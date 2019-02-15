module.exports = {
  siteMetadata: {
    title: `Cosmic Computation Laboratory`,
    description: `Exploring alternate futures for mind, body, spirit & planet`,
    author: `@cosmiccomlab`,
    email: 'ccl@jon.gold'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/journal`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-mdx`,
      options: {
        // gatsbyRemarkPlugins: [
        //   {
        //     resolve: `gatsby-remark-images`,
        //     options: {
        //       maxWidth: 590,
        //     },
        //   },
        //   {
        //     resolve: `gatsby-remark-responsive-iframe`,
        //     options: {
        //       wrapperStyle: `margin-bottom: 1.0725rem`,
        //     },
        //   },
        //   `gatsby-remark-prismjs`,
        //   `gatsby-remark-copy-linked-files`,
        //   `gatsby-remark-smartypants`,
        // ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-emotion'
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon-512x512.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
