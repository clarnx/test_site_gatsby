module.exports = {
    plugins: [
        {
            resolve: 'gatsby-theme-portfolio-minimal',
            options: {
                siteUrl: '', // Used for sitemap generation
                manifestSettings: {
                    favicon: './content/images/favicon.png', // Path is relative to the root
                    siteName: 'My Minimal Portfolio', // Used in manifest.json
                    shortName: 'Portfolio', // Used in manifest.json
                    startUrl: '/', // Used in manifest.json
                    backgroundColor: '#FFFFFF', // Used in manifest.json
                    themeColor: '#000000', // Used in manifest.json
                    display: 'minimal-ui', // Used in manifest.json
                },
                contentDirectory: './content', // Specifies the root content directory path
                // blogSettings: {
                //     // If set, the blog integration is enabled
                //     path: '', // Defines the slug for the blog listing page
                //     usePathPrefixForArticles: false, // Default true (i.e. path will be /blog/first-article)
                // },
                // plausibleAnalytics: {
                //     // If set, the Plausible.io analytics integration is enabled
                //     domain: 'example.com',
                // },
                // googleAnalytics: {
                //     // If set, the Google Analytics integration is enabled
                //     trackingId: '', // e.g. UA-XXXXXX-X
                //     anonymize: true, // Default is true
                //     environments: [], // Default ["production"]
                // },
            },
        },
    ],
};
