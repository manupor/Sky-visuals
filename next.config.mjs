/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dugem-style.html',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
