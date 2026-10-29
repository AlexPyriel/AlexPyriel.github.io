import type { NextConfig } from 'next';

// Static export for GitHub Pages: `next build` writes a fully static site to `out/`.
const nextConfig: NextConfig = {
  output: 'export',
  // Emit out/ru/index.html rather than out/ru.html, so the /ru/ link resolves
  // on GitHub Pages' static file server.
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
