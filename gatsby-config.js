module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-portfolio-minimal",
      options: {
        siteUrl: "https://gatsby-starter-portfolio-minimal-theme.netlify.app/", // Used for sitemap generation
        manifestSettings: {
          favicon: "./content/images/favicon.png", // Path is relative to the root
          siteName: "My Minimal Portfolio", // Used in manifest.json
          shortName: "Portfolio", // Used in manifest.json
          startUrl: "/", // Used in manifest.json
          backgroundColor: "#FFFFFF", // Used in manifest.json  #0e006b
          themeColor: "#000000", // Used in manifest.json       #edebff
          display: "minimal-ui", // Used in manifest.json
        },
        contentDirectory: "./content",
        //blogSettings: {
          //path: "/blog", // Defines the slug for the blog listing page
          //usePathPrefixForArticles: false, // Default true (i.e. path will be /blog/first-article)
        //},
        // googleAnalytics: {
        //     trackingId: "UA-XXXXXX-X",
        //     anonymize: true, // Default true
        //     environments: ["production", "development"] // Default ["production"]
        // }
      },
    },
  ],
};
