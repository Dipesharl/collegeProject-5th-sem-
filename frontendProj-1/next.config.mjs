/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        // pathname: "/dwmfxtqxp/image/**",
        pathname: "/**"
      },
    ],
  },
};

export default nextConfig;

