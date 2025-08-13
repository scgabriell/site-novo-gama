/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Permitir acesso de outros dispositivos na rede local durante desenvolvimento
  allowedDevOrigins: [
    '192.168.1.16',
    '192.168.1.0/24', // Permite toda a rede local 192.168.1.x
    '10.0.0.0/8',     // Permite redes 10.x.x.x
    '172.16.0.0/12',  // Permite redes 172.16.x.x - 172.31.x.x
    'localhost',
    '127.0.0.1',
  ],
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 dias
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  compress: true,
  // Headers de cache para otimização
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

export default nextConfig
