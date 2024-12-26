/** @type {import('next').NextConfig} */
const nextConfig = {
        images: {
        remotePatterns: [
            {
            protocol: "https",
            hostname: "i.scdn.co", // Allow images from Spotify's CDN
            pathname: "/**", // Allow all paths under this hostname
            },
            {
            protocol: "https",
            hostname: "i.ytimg.com", // Allow images from YouTube's CDN
            pathname: "/**", // Allow all paths under this hostname
            },
        ],
        },
    };
  
export default nextConfig;
  