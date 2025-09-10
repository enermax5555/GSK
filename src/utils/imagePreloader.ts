export interface ImagePreloader {
  preloadImages: (urls: string[]) => Promise<void>;
  preloadImage: (url: string) => Promise<void>;
  preloadInBackground: (urls: string[], delay?: number) => void;
  getLoadedUrls: () => Set<string>;
  isImageLoaded: (url: string) => boolean;
}

class ImagePreloaderImpl implements ImagePreloader {
  private loadedImages: Set<string> = new Set();
  private loadingImages: Set<string> = new Set();

  preloadImage(url: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.loadedImages.has(url)) {
        resolve();
        return;
      }

      if (this.loadingImages.has(url)) {
        // Already loading, wait for it to finish
        const checkLoaded = () => {
          if (this.loadedImages.has(url)) {
            resolve();
          } else {
            setTimeout(checkLoaded, 100);
          }
        };
        checkLoaded();
        return;
      }

      this.loadingImages.add(url);
      
      const img = new Image();
      img.onload = () => {
        this.loadedImages.add(url);
        this.loadingImages.delete(url);
        resolve();
      };
      img.onerror = () => {
        this.loadingImages.delete(url);
        console.warn(`Failed to preload image: ${url}`);
        reject(new Error(`Failed to load image: ${url}`));
      };
      img.src = url;
    });
  }

  async preloadImages(urls: string[]): Promise<void> {
    const promises = urls.map(url => 
      this.preloadImage(url).catch(err => {
        console.warn(`Preload failed for ${url}:`, err);
        return Promise.resolve(); // Continue with other images even if one fails
      })
    );
    
    await Promise.all(promises);
  }

  preloadInBackground(urls: string[], delay: number = 1000): void {
    setTimeout(() => {
      this.preloadImages(urls).catch(err => {
        console.warn('Background image preloading failed:', err);
      });
    }, delay);
  }

  getLoadedUrls(): Set<string> {
    return new Set(this.loadedImages);
  }

  isImageLoaded(url: string): boolean {
    return this.loadedImages.has(url);
  }
}

// Export singleton instance
export const imagePreloader = new ImagePreloaderImpl();

// Export utility functions for common patterns
export const preloadGalleryImages = (galleryData: Array<{imageSrc: string}>, delay?: number) => {
  const urls = galleryData.map(item => item.imageSrc);
  imagePreloader.preloadInBackground(urls, delay);
};

export const preloadDetailImages = (images: string[]) => {
  return imagePreloader.preloadImages(images);
};

export const isImagePreloaded = (url: string): boolean => {
  return imagePreloader.isImageLoaded(url);
};
