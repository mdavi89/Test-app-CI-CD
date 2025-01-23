import type { Request, Response } from 'express';
import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Proxy API requests to server.com
router.use(
  '/api',
  createProxyMiddleware({
    target: 'https://test-app-ci-cd-server.onrender.com/', // Replace with your server URL
    changeOrigin: true,           // Ensures the host header matches the target
    pathRewrite: {
      '^/api': '/api',            // Optional: Adjust if your server uses a different path structure
    },
    secure: true,                 // Use `true` if `server.com` uses HTTPS; set `false` for self-signed certs
  })
);

// Serve up React front-end in production
router.use((_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../../../client/dist/index.html'));
});

export default router;
