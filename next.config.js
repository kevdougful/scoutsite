/** @type {import('next').NextConfig} */

const { withContentlayer } = require('next-contentlayer')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const webpack = require('webpack')

let config = {
  optimizeFonts: true,
  reactStrictMode: true,
  images: {
    loader: "imgix",
    path: "/img"
  },
  reactStrictMode: true,
  typescript: {
    // turn of untill v2
    ignoreBuildErrors: true,
  },
  experimental: {
    externalDir: true,
  },
  compiler: {},
  async redirects() {
    return [
      {
        source: '/docs',
        destination: '/docs/introduction',
        permanent: false,
      },
    ]
  },
  webpack: (config, { defaultLoaders }) => {
    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test('.svg')
    )
    fileLoaderRule.exclude = /\.svg$/

    config.module.rules.push({
      test: /\.(png|jpe?g|gif|mp4)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      ],
    })

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'removeViewBox',
                  active: false,
                },
              ],
            },
          },
        },
      ],
    })

    config.resolve = {
      ...config.resolve,
    }

    return config
  },
}

const isNextDev = process.argv.includes('dev')

if (isNextDev) {
  config = withContentlayer(config)
}

module.exports = withBundleAnalyzer(config)
