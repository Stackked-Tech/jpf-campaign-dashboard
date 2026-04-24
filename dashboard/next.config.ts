import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["jsforce", "@supabase/supabase-js"],
  // Next.js 15's middleware parses the request body to a 10MB cap by default,
  // which truncates large multipart uploads (grant attachments) and corrupts
  // the multipart boundary, crashing req.formData() in the route handler.
  // Matches the Supabase storage bucket's 50MB cap.
  experimental: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    middlewareClientMaxBodySize: "50mb" as any,
  },
};

export default nextConfig;
