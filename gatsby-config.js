module.exports = {
  siteMetadata: {
    title: `Trinity Townsend Photography`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Trinity Townsend`,
    social: [
      {
        name: "Instagram",
        url: "http://instagram.com/trinitytownsendphotography",
      },
      {
        name: "Twitter",
        url: "https://twitter.com/trinlovesfrogs",
      },
    ],
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "gallery",
        path: "content/gallery-example",
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
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: require.resolve("./src/templates/mdx.tsx"),
        },
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-typescript",
    "gatsby-plugin-emotion",
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "trinitytownsend.com.au",
        region: "ap-southeast-2",
      },
    },
  ],
  // plugins: [
  //   `gatsby-plugin-react-helmet`,
  //   `gatsby-transformer-sharp`,
  //   `gatsby-plugin-sharp`,
  //   {
  //     resolve: `gatsby-plugin-manifest`,
  //     options: {
  //       name: `gatsby-starter-default`,
  //       short_name: `starter`,
  //       start_url: `/`,
  //       background_color: `#663399`,
  //       theme_color: `#663399`,
  //       display: `minimal-ui`,
  //       icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
  //     },
  //   },
  //   // this (optional) plugin enables Progressive Web App + Offline functionality
  //   // To learn more, visit: https://gatsby.dev/offline
  //   // `gatsby-plugin-offline`,
  // ],
}
