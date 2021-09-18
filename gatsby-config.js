/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "functions experiments",
  },
  flags: {
    FUNCTIONS: true,
  },
  plugins: [
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] },
    },
    {
      resolve: `gatsby-source-youtube-playlist`,
      options: {
        apiKey: "AIzaSyDvuN5ZzVJxRoXaH-CA9PwrfDQQaRsY9lQ",
        channelId: "UCaRW_DIcp4n3iDDlvx002dQ",
        maxResults: 20, // default is 5
      },
    },
  ],
}
