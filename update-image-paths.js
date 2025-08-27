#!/usr/bin/env node

/**
 * Script to replace local image paths with Imgur URLs in React components
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function updateImagePaths(filePath, urlMapping) {
  let content = fs.readFileSync(filePath, 'utf8');
  let updated = false;
  
  // Replace getImagePath calls with direct URLs
  Object.entries(urlMapping).forEach(([localPath, imgurUrl]) => {
    const patterns = [
      // getImagePath('assets/Images/...')
      new RegExp(`getImagePath\\(['"]${localPath.replace('assets/', '')}['"]\\)`, 'g'),
      // getImagePath("assets/Images/...")
      new RegExp(`getImagePath\\(["']${localPath.replace('assets/', '')}["']\\)`, 'g'),
      // Direct asset paths
      new RegExp(`['"]/${localPath}['"]`, 'g'),
      new RegExp(`["']/${localPath}["']`, 'g'),
    ];
    
    patterns.forEach(pattern => {
      if (pattern.test(content)) {
        content = content.replace(pattern, `"${imgurUrl}"`);
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
  });
  
  console.log(`\nUpdated ${updatedCount} files with new image URLs`);
  
  // Also update the helpers.ts file to remove getImagePath function
  const helpersPath = 'src/utils/helpers.ts';
  if (fs.existsSync(helpersPath)) {
    let content = fs.readFileSync(helpersPath, 'utf8');
    // Comment out or remove the getImagePath function
    content = content.replace(
      /export const getImagePath[\s\S]*?(?=export|$)/,
      '// getImagePath function removed - using direct Imgur URLs now\n\n'
    );
    fs.writeFileSync(helpersPath, content);
    console.log('✓ Updated helpers.ts to remove getImagePath function');
  }
}

main();
