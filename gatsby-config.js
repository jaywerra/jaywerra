module.exports = {
  siteMetadata: {
    title: "Jay Werra",
    description: "Los Angeles based front developer and designer. Founder of Werra Design.",
    titleTemplate: " // Jay Werra"
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-plugin-transition-link`,
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-36911456-1",
      },
    },
    "gatsby-plugin-react-helmet",
    // "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/fav-icon.svg",
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              linkImagesToOriginal: false,
              quality: 100,
              withWebp: true
            }
          }
        ]
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: "./src/projects"
      }
    },
    {
      resolve: `gatsby-source-spotify`,
      options: {
        clientId: `d1ac03ce86e747ec86264865dafd3520`,
        clientSecret: `a18433a0f23b4a7a9b4a7f5bca4b6b2c`,
        refreshToken: `AQBDAYVHz06TJVvAzJaZf0gL_WMb3oxjoGVs6PF6-ihTu4iAK_u-UA13fb7PYDbiv_XHmB7f93mnnYTO8vlP68BOoK_k7cAqjScfOZthnmwB18AeM--AKJ-JScCXUgmif1M`,
        fetchPlaylists: true,
        fetchRecent: true,
        timeRanges: ['long_term'],
      },
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: {
        production: true,
        disable: !process.env.ANALYZE_BUNDLE_SIZE,
        generateStatsFile: true,
        analyzerMode: 'static',
      }
    }
  ],
};
