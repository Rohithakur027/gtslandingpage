/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://groundtosky.in',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/thankyou', '/thank-you'],
  transform: async (config, path) => {
    // Give homepage maximum priority
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      };
    }
    // Course pages are high priority
    if (path.startsWith('/courses/') && path !== '/courses') {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      };
    }
    // Contact page is important for conversions
    if (path === '/contact') {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      };
    }
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/thank-you', '/thankyou'] },
    ],
    additionalSitemaps: [],
  },
  additionalPaths: async (config) => {
    return [
      { loc: '/', changefreq: 'daily', priority: 1.0 },
      { loc: '/courses', changefreq: 'weekly', priority: 0.85 },
      { loc: '/blog', changefreq: 'weekly', priority: 0.8 },
      { loc: '/contact', changefreq: 'monthly', priority: 0.8 },
      { loc: '/gallery', changefreq: 'monthly', priority: 0.6 },
      { loc: '/courses/air-hostess-training', changefreq: 'monthly', priority: 0.9 },
      { loc: '/courses/hotel-operations-management', changefreq: 'monthly', priority: 0.8 },
      { loc: '/courses/airport-ground-staff', changefreq: 'monthly', priority: 0.9 },
      { loc: '/courses/travel-tourism-management', changefreq: 'monthly', priority: 0.8 },
      { loc: '/blog/best-cabin-crew-courses-india-guide', changefreq: 'monthly', priority: 0.7 },
      { loc: '/blog/how-to-become-air-hostess-india-guide', changefreq: 'monthly', priority: 0.8 },
      { loc: '/blog/air-hostess-salary-india-2025', changefreq: 'monthly', priority: 0.8 },
      { loc: '/blog/ground-staff-jobs-delhi-airport', changefreq: 'monthly', priority: 0.8 },
    ];
  },
};
