import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.ybsecurity.nl" }],
        destination: "https://ybsecurity.nl/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;


export default nextConfig;
