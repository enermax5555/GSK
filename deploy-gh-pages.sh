#!/bin/sh

# Navigate to the build folder
cd dist

# Create a .nojekyll file to tell GitHub Pages not to use Jekyll
touch .nojekyll

# Initialize a new Git repository inside the dist folder
git init

# Configure Git user (optional but recommended)
git config user.name "GitHub Actions"
git config user.email "actions@github.com"

# Add all files to the new repository
git add .
git commit -m "Deploy to GitHub Pages"

# Add your GitHub repository as remote
# Replace with your actual GitHub repository URL
git remote add origin https://github.com/enermax5555/GSK.git

# Force push to the gh-pages branch
git push -f origin Master:gh-pages

# Go back to the project root
cd ..
