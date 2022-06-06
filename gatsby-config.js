require('dotenv').config();
console.log({url : process.env.STRAPI_API_URL, token: process.env.STRAPI_TOKEN})

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: ['job', "blog"],
  singleTypes: [],
};

module.exports = {
  plugins: [`gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,{
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/assets/images`,
      },
    },`gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    }
  ],
}
