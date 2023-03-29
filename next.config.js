/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    unoptimized: true
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/normandmickey/gptessay",
        permanent: false,
      }
    ];
  },
};
