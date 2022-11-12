/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    // enable app directory
    experimental: {
        appDir: true,
    },
    images: {
        domains: ['images.unsplash.com', 'links.papareact.com'],
    }
}
