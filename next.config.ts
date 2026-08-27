import type { NextConfig } from 'next';

// Static export for GitHub Pages: `next build` writes a fully static site to `out/`.
const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
};

export default nextConfig;
