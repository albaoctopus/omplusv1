const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
});

module.exports = withPWA({
  // your existing Next.js config without the pwa property
  webpack: (config) => {
    config.externals.push({
      "utf-8-validate": "commonjs utf-8-validate",
      bufferutil: "commonjs bufferutil"
    });
    
    return config;
  },
  images: {
    domains: [
      "uploadthing.com",
      "utfs.io"
    ],
  },
  // No `pwa` property should be here, it is passed to withPWA() above
});
