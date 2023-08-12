/** @type {import('next').NextConfig} */
const nextConfig = {
  // Lets a server action to be called by the front end (i.e. fill the heart when selected as favorite)
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
