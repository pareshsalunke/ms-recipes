const withBundleAnalyzer = require('@next/bundle-analyzer');

module.exports = {
  cssModules: true,
  publicRuntimeConfig: {
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
    CONTENTFUL_ENVIRONMENT: process.env.CONTENTFUL_ENVIRONMENT,
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
  },
  enabled: process.env.ANALYZE === 'true',
};

module.exports = withBundleAnalyzer({})