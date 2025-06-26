#!/bin/bash

# Clean up any previous deployment
rm -rf dist-deploy
mkdir dist-deploy

# Copy the build files
cp -R dist/* dist-deploy/

# Create a .nojekyll file (prevents GitHub Pages from ignoring files that start with an underscore)
touch dist-deploy/.nojekyll

# Initialize the git repository
cd dist-deploy
git init
git add .
git config user.email "deploy@github.com"
git config user.name "GitHub Pages Deploy"
git commit -m "Deploy to GitHub Pages"

# Add the remote repository
git remote add origin https://github.com/enermax5555/GSK.git

# Force push to the gh-pages branch
git push -f origin HEAD:refs/heads/gh-pages

# Clean up
cd ..
rm -rf dist-deploy

echo "Deployment complete!"
