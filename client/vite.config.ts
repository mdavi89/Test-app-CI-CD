import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 10000,
    open: true,
    proxy: {
      '/api': {
        target: 'https://test-app-ci-cd-server.onrender.com/',
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
