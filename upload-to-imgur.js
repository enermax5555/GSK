#!/usr/bin/env node

/**
 * Script to upload images to ImageBB and generate a mapping file
 * 
 * To use this script:
 * 1. Get an ImageBB API key from https://api.imgbb.com/
 * 2. Run: IMGBB_API_KEY=your_api_key node upload-to-imgur.js
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMGBB_API_KEY = process.env.IMGBB_API_KEY;

if (!IMGBB_API_KEY) {
  console.error('Please set IMGBB_API_KEY environment variable');
  console.error('Get one from: https://api.imgbb.com/');
  process.exit(1);
}

async function uploadToImageBB(imagePath) {
  return new Promise((resolve, reject) => {
    const imageBuffer = fs.readFileSync(imagePath);
    const base64Image = imageBuffer.toString('base64');
    
    // Create form data boundary
    const boundary = '----WebKitFormBoundary' + Math.random().toString(36).substr(2, 16);
    
    // Build form data
    let formData = '';
    formData += `--${boundary}\r\n`;
    formData += 'Content-Disposition: form-data; name="image"\r\n\r\n';
    formData += base64Image + '\r\n';
    
    const postData = Buffer.concat([
      Buffer.from(formData, 'utf8'),
      Buffer.from(`--${boundary}--\r\n`, 'utf8')
    ]);
    
    const options = {
      hostname: 'api.imgbb.com',
      port: 443,
      path: `/1/upload?key=${IMGBB_API_KEY}`,
      method: 'POST',
      headers: {
        'Content-Type': `multipart/form-data; boundary=${boundary}`,
        'Content-Length': postData.length
      }
    };
    
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          if (response.success) {
            resolve(response.data.url);
          } else {
            reject(new Error(`Upload failed: ${response.error?.message || 'Unknown error'}`));
          }
        } catch (e) {
          reject(new Error(`Parse error: ${e.message}`));
        }
      });
    });
    
    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

function findImages(dir) {
  const images = [];
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      images.push(...findImages(fullPath));
    } else if (/\.(jpg|jpeg|png|gif|webp)$/i.test(file)) {
      images.push(fullPath);
    }
  }
  
  return images;
}

async function main() {
  const imagesDir = 'public/assets/Images';
  const outputFile = 'imgbb-links.json';
  
  console.log('Finding images...');
  const images = findImages(imagesDir);
  console.log(`Found ${images.length} images`);
  
  const urlMapping = {};
  const failed = [];
  
  for (let i = 0; i < images.length; i++) {
    const imagePath = images[i];
    const relativePath = imagePath.replace('public/', '');
    
    console.log(`[${i + 1}/${images.length}] Uploading ${relativePath}...`);
    
    try {
      const url = await uploadToImageBB(imagePath);
      urlMapping[relativePath] = url;
      console.log(`✓ Uploaded: ${url}`);
      
      // Add a small delay to respect rate limits
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error(`✗ Failed to upload ${relativePath}:`, error.message);
      failed.push({ path: relativePath, error: error.message });
    }
  }
  
  // Save the mapping
  fs.writeFileSync(outputFile, JSON.stringify(urlMapping, null, 2));
  console.log(`\nMapping saved to ${outputFile}`);
  
  if (failed.length > 0) {
    console.log('\nFailed uploads:');
    failed.forEach(f => console.log(`- ${f.path}: ${f.error}`));
  }
  
  console.log(`\nSuccessfully uploaded ${Object.keys(urlMapping).length}/${images.length} images`);
}

main().catch(console.error);
