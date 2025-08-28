import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental:{
    staleTimes:{
      static:80,
      dynamic:60
    }
  }
};

export default nextConfig;
