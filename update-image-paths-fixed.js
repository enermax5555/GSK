#!/usr/bin/env node

/**
 * Script to replace local image paths with ImageBB URLs in React components
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function updateImagePaths(filePath, urlMapping) {
  let content = fs.readFileSync(filePath, 'utf8');
  let updated = false;
  
  // Replace getImagePath calls and direct paths with ImageBB URLs
  Object.entries(urlMapping).forEach(([localPath, imageBBUrl]) => {
    const patterns = [
      // getImagePath('Images/...')
      new RegExp(`getImagePath\\(['"]Images/${localPath.replace('assets/Images/', '')}['"]\\)`, 'g'),
      // getImagePath("Images/...")
      new RegExp(`getImagePath\\(["']Images/${localPath.replace('assets/Images/', '')}["']\\)`, 'g'),
      // getImagePath('assets/Images/...')
      new RegExp(`getImagePath\\(['"]${localPath.replace('assets/', '')}['"]\\)`, 'g'),
      // getImagePath("assets/Images/...")
      new RegExp(`getImagePath\\(["']${localPath.replace('assets/', '')}["']\\)`, 'g'),
      // Direct asset paths /assets/Images/...
      new RegExp(`['"]/${localPath}['"]`, 'g'),
      new RegExp(`["']/${localPath}["']`, 'g'),
      // Direct asset paths assets/Images/...
      new RegExp(`['"]${localPath}['"]`, 'g'),
      new RegExp(`["']${localPath}["']`, 'g'),
    ];
    
    patterns.forEach(pattern => {
      if (pattern.test(content)) {
        content = content.replace(pattern, `"${imageBBUrl}"`);
        updated = true;
      }
    });
  });
  
  if (updated) {
    fs.writeFileSync(filePath, content);
    console.log(`✓ Updated ${filePath}`);
  }
  
  return updated;
}

function replaceServiceImages(filePath, urlMapping) {
  let content = fs.readFileSync(filePath, 'utf8');
  let updated = false;
  
  // Map service types to main images
  const serviceImageMap = {
    'PregradniSteni': urlMapping['assets/Images/PregradniSteni/PregradniSteniMain.jpg'],
    'PredStenni': urlMapping['assets/Images/PredStenni/PredStenniMain.jpg'],
    'OkacheniTavani': urlMapping['assets/Images/OkacheniTavani/OkacheniTavaniMain.JPEG'],
    'Oblicovki': urlMapping['assets/Images/Oblicovki/OblicovkiMain.jpg'],
    'PVCtavani': urlMapping['assets/Images/PVCtavani/PVCtavaniMain.jpg'],
    'RasterniTavani': urlMapping['assets/Images/RasterniTavani/RasterniTavaniMain.jpg']
  };

  // Replace service main images
  if (content.includes('imageSrc:')) {
    Object.entries(serviceImageMap).forEach(([serviceType, imageUrl]) => {
      if (imageUrl) {
        // Look for patterns like 'imageSrc: "https://picsum.photos/800/600?random=385",'
        const pattern = new RegExp(`(imageFolder:\\s*['"]${serviceType}['"][^}]*?imageSrc:\\s*)["'][^"']*["']`, 'g');
        content = content.replace(pattern, `$1"${imageUrl}"`);
        updated = true;
      }
    });
  }

  if (updated) {
    fs.writeFileSync(filePath, content);
    console.log(`✓ Updated service images in ${filePath}`);
  }
  
  return updated;
}

function replaceGalleryServiceImages(filePath, urlMapping) {
  let content = fs.readFileSync(filePath, 'utf8');
  let updated = false;
  
  // Map service titles to main images
  const serviceImageMap = {
    'Преградни стени': urlMapping['assets/Images/PregradniSteni/PregradniSteniMain.jpg'],
    'Предстенни обшивки': urlMapping['assets/Images/PredStenni/PredStenniMain.jpg'],
    'Обшивки и облицовки': urlMapping['assets/Images/Oblicovki/OblicovkiMain.jpg'],
    'Окачени тавани от гипсокартон': urlMapping['assets/Images/OkacheniTavani/OkacheniTavaniMain.JPEG'],
    'Окачени PVC тавани': urlMapping['assets/Images/PVCtavani/PVCtavaniMain.jpg'],
    'Растерни тавани': urlMapping['assets/Images/RasterniTavani/RasterniTavaniMain.jpg']
  };

  // Replace gallery service images
  Object.entries(serviceImageMap).forEach(([serviceTitle, imageUrl]) => {
    if (imageUrl) {
      // Look for patterns like 'title: 'Преградни стени', imageSrc: "https://picsum.photos/800/600?random=48",'
      const pattern = new RegExp(`(title:\\s*['"]${serviceTitle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}['"][^}]*?imageSrc:\\s*)["'][^"']*["']`, 'g');
      if (pattern.test(content)) {
        content = content.replace(pattern, `$1"${imageUrl}"`);
        updated = true;
      }
    }
  });

  if (updated) {
    fs.writeFileSync(filePath, content);
    console.log(`✓ Updated gallery service images in ${filePath}`);
  }
  
  return updated;
}

function replaceGalleryImages(filePath, urlMapping) {
  let content = fs.readFileSync(filePath, 'utf8');
  let updated = false;

  // Create arrays of images for each service type
  const galleryImageArrays = {
    'PregradniSteni': [],
    'PredStenni': [],
    'OkacheniTavani': [],
    'Oblicovki': [],
    'PVCtavani': [],
    'RasterniTavani': []
  };

  // Populate arrays with matching images
  Object.entries(urlMapping).forEach(([localPath, imageUrl]) => {
    const pathParts = localPath.split('/');
    if (pathParts.length >= 3 && pathParts[1] === 'Images') {
      const serviceType = pathParts[2];
      if (galleryImageArrays[serviceType] && !localPath.includes('Main')) {
        galleryImageArrays[serviceType].push(imageUrl);
      }
    }
  });

  // Replace gallery image arrays
  Object.entries(galleryImageArrays).forEach(([serviceType, images]) => {
    if (images.length > 0) {
      const imageArrayString = images.map(url => `          "${url}"`).join(',\\n');
      const pattern = new RegExp(`(["']${serviceType}["']:\\s*\\[)[^\\]]*\\]`, 'g');
      const replacement = `$1\\n${imageArrayString}\\n        ]`;
      
      if (pattern.test(content)) {
        content = content.replace(pattern, replacement);
        updated = true;
      }
    }
  });

  if (updated) {
    fs.writeFileSync(filePath, content);
    console.log(`✓ Updated gallery images in ${filePath}`);
  }
  
  return updated;
}

function findReactFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findReactFiles(fullPath));
    } else if (/\.(tsx?|jsx?)$/.test(item)) {
      files.push(fullPath);
    }
  }
  
  return files;
}

function main() {
  const mappingFile = 'imgbb-links.json';
  
  if (!fs.existsSync(mappingFile)) {
    console.error(`Error: ${mappingFile} not found. Run upload-to-imgur.js first.`);
    process.exit(1);
  }
  
  const urlMapping = JSON.parse(fs.readFileSync(mappingFile, 'utf8'));
  console.log(`Loaded ${Object.keys(urlMapping).length} image mappings`);
  
  const reactFiles = findReactFiles('src');
  console.log(`Found ${reactFiles.length} React files to update`);
  
  let updatedCount = 0;
  
  reactFiles.forEach(file => {
    if (updateImagePaths(file, urlMapping)) {
      updatedCount++;
    }
    
    // Special handling for Services.tsx
    if (file.includes('Services.tsx')) {
      if (replaceServiceImages(file, urlMapping)) {
        updatedCount++;
      }
    }
    
    // Special handling for Gallery.tsx
    if (file.includes('Gallery.tsx')) {
      if (replaceGalleryServiceImages(file, urlMapping)) {
        updatedCount++;
      }
    }
    
    // Special handling for GalleryDetail.tsx
    if (file.includes('GalleryDetail.tsx')) {
      if (replaceGalleryImages(file, urlMapping)) {
        updatedCount++;
      }
    }
  });

  console.log(`\nUpdated ${updatedCount} files with new ImageBB URLs`);
  
  // Also update the helpers.ts file to remove getImagePath function
  const helpersPath = 'src/utils/helpers.ts';
  if (fs.existsSync(helpersPath)) {
    let content = fs.readFileSync(helpersPath, 'utf8');
    // Comment out or remove the getImagePath function
    content = content.replace(
      /export const getImagePath[\s\S]*?(?=export|$)/,
      '// getImagePath function removed - using direct ImageBB URLs now\n\n'
    );
    fs.writeFileSync(helpersPath, content);
    console.log('✓ Updated helpers.ts to remove getImagePath function');
  }
}

main();
