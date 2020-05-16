const gatsbyBeaker = process.env.GATSBY_BEAKER === "true";

module.exports = {
  siteMetadata: {
    title: `Cosmic Computation Laboratory`,
    description: `Exploring alternate futures for mind, body, spirit & planet`,
    author: `@cosmiccomlab`,
    email: `gold@cosmiccomputation.org`,
    defaultImage: "icons/icon-512x512.png",
    siteUrl: gatsbyBeaker
      ? "hyper://a1399bc69709e26e5f6b49c92e4045ea7c254ff0ed04ff0efbb49479a8cd9d61/"
      : "https://cosmiccomputation.org",

    beaker: gatsbyBeaker,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/journal`,
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-mdx`,
    `gatsby-theme-style-guide`,
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
};
