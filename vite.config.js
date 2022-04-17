import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/confisdsg/
export default defineConfig({
  plugins: [react()],
  server:{
    watch: {
      usePolling: true
    }
  },
  resolve:{
    alias:{
      "@":path.resolve(__dirname,"src")
    }
  }
})
