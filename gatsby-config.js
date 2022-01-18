require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.pathwaves.ca',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          formats: ['auto', 'webp'],
          placeholder: 'dominantColor',
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: 'transparent',
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          // gatsby-remark-relative-images must go before gatsby-remark-images
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-auth0',
      options: {
        domain: process.env.AUTH0_DOMAIN,
        clientId: process.env.AUTH0_CLIENT_ID,
      },
    },
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/assets`,
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'content',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/images/icon.png',
      },
    },
  ],
};
