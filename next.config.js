/** @type {import('next').NextConfig} */

// const isProd = process.env.NODE_ENV === 'production';

console.log('isProd', isProd);
const nextConfig = {
    // basePath: isProd ? '/viraj19r': '',
    output: 'export',
    images: {
        unoptimized: true,
    }
}

module.exports = nextConfig
