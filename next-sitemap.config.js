/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://metryanalytics.com',
  generateRobotsTxt: true,
  exclude: ['/404', '/500'],
  // Auto genera tags hreflang
  alternateRefs: [
    {
      href: 'https://metryanalytics.com/en',
      hreflang: 'en',
    },
    {
      href: 'https://metryanalytics.com',
      hreflang: 'es',
    },
  ],
}
