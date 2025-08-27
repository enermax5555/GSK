// src/utils/imageOptimization.ts - Image optimization utilities

/**
 * Generates responsive image sizes for srcSet attribute
 * @param basePath Base path to the image
 * @param widths Array of widths for responsive images
 * @param extension File extension (jpg, png, etc.)
 * @returns srcSet string for img tag
 */
export const generateSrcSet = (basePath: string, widths: number[], extension: string = 'jpg'): string => {
  const basePathWithoutExt = basePath.replace(new RegExp(`\\.${extension}$`), '');
  
  return widths
    .map(width => `${basePathWithoutExt}-${width}w.${extension} ${width}w`)
    .join(', ');
};

/**
 * Generates sizes attribute for responsive images
 * @returns sizes attribute string
 */
export const getResponsiveSizes = (): string => {
  return '(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw';
};

/**
 * Get image dimensions as width x height for proper aspect ratio
 * Common aspect ratios:
 * - 16:9 = 1.78
 * - 4:3 = 1.33
 * - 3:2 = 1.5
 * - 1:1 = 1
 */
export const getImageDimensions = (width: number, aspectRatio: number = 1.5): { width: number, height: number } => {
  const height = Math.round(width / aspectRatio);
  return { width, height };
};

/**
 * Add loading="lazy" and decoding="async" to images that are not in the viewport
 * Also adds alt text and helps prevent layout shifts with aspect ratio
 */
export const optimizedImageProps = (
  alt: string, 
  width: number = 800, 
  aspectRatio: number = 1.5
): {
  alt: string;
  loading: "lazy" | "eager";
  decoding: "async" | "sync";
  width: number;
  height: number;
} => {
  const { width: w, height: h } = getImageDimensions(width, aspectRatio);
  
  return {
    alt,
    loading: "lazy",
    decoding: "async",
    width: w,
    height: h
  };
};
