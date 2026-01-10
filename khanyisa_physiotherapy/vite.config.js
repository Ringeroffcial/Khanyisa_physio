import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Add base path if deploying to subdirectory
  base: '/',
  // For SPA routing
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
})