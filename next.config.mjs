/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    distDir: 'dist',
    images: {
        domains: [
            'i.pinimg.com',
            'd2u8k2ocievbld.cloudfront.net',
            'plus.unsplash.com'
        ],
    },
    experimental: {
        appDir: true,
    },
};

export default nextConfig;
