/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          { protocol: "https", hostname: "**.flagcdn.com" },
          {
            protocol: "https",
            hostname: "**.upload.wikimedia.org",
          },
          {
            protocol: "https",
            hostname: "gravatar.com",
          },
          {
            protocol: "https",
            hostname: "solutions-platform-media.s3.amazonaws.com",
          },
        ],
      },
};

export default nextConfig;
