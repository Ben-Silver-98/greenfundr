/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://greenfundr.com",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  transform: async (config, path) => {
    const priorities = {
      "/": 1.0,
      "/services/grantmatch-scan": 0.8,
      "/services/consortium-leadership": 0.8,
      "/services/grant-readiness": 0.8,
      "/services/advisory": 0.8,
      "/insights": 0.7,
      "/about": 0.6,
      "/pricing": 0.6,
      "/contact": 0.6,
    };

    const freq =
      path === "/" || path.startsWith("/insights")
        ? "weekly"
        : path.startsWith("/services") ||
            path === "/about" ||
            path === "/pricing" ||
            path === "/contact"
          ? "monthly"
          : config.changefreq;

    return {
      loc: path,
      changefreq: freq,
      priority: priorities[path] ?? config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
