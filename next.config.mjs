/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "",
  assetPrefix: "",
  // Lets a production build run while `next dev` holds `.next`.
  distDir: process.env.NEXT_DIST_DIR || ".next",
  images: {
    // Required by `output: export` — the site ships vector art, so there is
    // nothing left for the optimiser to do anyway.
    unoptimized: true,
  },
  reactStrictMode: true,
  poweredByHeader: false,
  compiler: {
    // Strip console.* from the production bundle (errors kept).
    removeConsole: { exclude: ["error", "warn"] },
  },
};

export default nextConfig;
