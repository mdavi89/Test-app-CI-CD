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
        secure: true,  // Use true if `server.com` uses HTTPS
        rewrite: (path) => path.replace(/^\/api/, '/api'), // Optional if you need to modify the path
      },
    },
  },
});
