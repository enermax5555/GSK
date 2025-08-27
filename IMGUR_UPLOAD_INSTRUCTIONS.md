# Image Upload to ImageBB Instructions

## Step 1: Get ImageBB API Key

1. Go to https://api.imgbb.com/
2. Sign up for a free account
3. Go to your dashboard and copy your API key

## Step 2: Upload Images

Run the upload script with your API key:

```bash
IMGBB_API_KEY=your_api_key_here node upload-to-imgur.js
```

This will:
- Upload all 54 images to ImageBB
- Create an `imgbb-links.json` file with the mapping
- Take about 1-2 minutes

## Step 3: Update Code

After successful upload, run:

```bash
node update-image-paths.js
```

This will:
- Replace all `getImagePath()` calls with direct ImageBB URLs
- Update all React components
- Remove the `getImagePath` function from helpers.ts

## Step 4: Deploy

Now you can deploy without the large images:

```bash
npm run deploy
```

## Benefits of ImageBB

- Free plan with generous limits
- Reliable API
- Fast global CDN
- Direct hotlinking allowed
- Better for batch uploads than Catbox
