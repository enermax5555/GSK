import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    cors: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  },
  // Adjust this to match your GitHub repository name for GitHub Pages
  base: '/GSK/' // Replace with your repo name
})
