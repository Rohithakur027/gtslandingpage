/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://groundtosky.in/', // 🔁 Change this to your live domain
  generateRobotsTxt: true,           // ✅ generates robots.txt file
  generateIndexSitemap: true,        // ✅ for multi-sitemaps
  sitemapSize: 5000,                 // optional (default is 5000)
  changefreq: 'weekly',              // optional (for SEO guidance)
  priority: 0.7,                     // optional
};
