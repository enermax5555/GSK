#!/usr/bin/env node

/**
 * Quick fix: Replace image paths with placeholder URLs to enable immediate deployment
 * This allows us to deploy now and replace images later
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Placeholder service that provides random images
const PLACEHOLDER_BASE = 'https://picsum.photos';

function getPlaceholderUrl(imagePath) {
  // Generate consistent placeholder based on path
  const hash = imagePath.split('').reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0);
    return a & a;
  }, 0);
  
  const width = 800;
  const height = 600;
  const seed = Math.abs(hash) % 1000;
  
  // Use a consistent seed for each image so they don't change
  return `${PLACEHOLDER_BASE}/${width}/${height}?random=${seed}`;
}

function updateImagePaths(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let updated = false;
  
  // Find all getImagePath calls and replace with placeholders
  const getImagePathPattern = /getImagePath\(['"]([^'"]+)['"]\)/g;
  content = content.replace(getImagePathPattern, (match, imagePath) => {
    const placeholderUrl = getPlaceholderUrl(imagePath);
    updated = true;
    return `"${placeholderUrl}"`;
  });
  
  // Also find direct asset paths
  const assetPathPattern = /['"]\/assets\/Images\/[^'"]+['"]/g;
  content = content.replace(assetPathPattern, (match) => {
    const imagePath = match.slice(1, -1); // Remove quotes
    const placeholderUrl = getPlaceholderUrl(imagePath);
    updated = true;
    return `"${placeholderUrl}"`;
  });
  
  if (updated) {
    fs.writeFileSync(filePath, content);
    console.log(`✓ Updated ${filePath} with placeholder images`);
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
  console.log('🚀 Quick deployment fix: Using placeholder images');
  console.log('This allows immediate deployment. You can replace with real images later.\n');
  
  const reactFiles = findReactFiles('src');
  console.log(`Found ${reactFiles.length} React files to update`);
  
  let updatedCount = 0;
  
  reactFiles.forEach(file => {
    if (updateImagePaths(file)) {
      updatedCount++;
    }
  });
  
  // Update the helpers.ts file to remove getImagePath function
  const helpersPath = 'src/utils/helpers.ts';
  if (fs.existsSync(helpersPath)) {
    let content = fs.readFileSync(helpersPath, 'utf8');
    content = content.replace(
      /export const getImagePath[\s\S]*?(?=export|$)/,
      '// getImagePath function removed - using direct URLs now\n\n'
    );
    fs.writeFileSync(helpersPath, content);
    console.log('✓ Updated helpers.ts to remove getImagePath function');
  }
  
  console.log(`\n✅ Updated ${updatedCount} files with placeholder images`);
  console.log('\n🎯 Next steps:');
  console.log('1. Run: npm run deploy');
  console.log('2. Your site will be live with placeholder images');
  console.log('3. Later: manually upload key images and replace URLs in code');
}

main();
