/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: false,
    output: "export",
    /*If your next.config.js file includes { output: 'export' }, this configuration is incompatible 
    with the Image Optimization API provided by Next.js.  */
    images: {
      unoptimized: true
    }
  };

module.exports = nextConfig
