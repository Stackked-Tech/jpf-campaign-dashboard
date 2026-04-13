import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["jsforce", "@supabase/supabase-js"],
};

export default nextConfig;
