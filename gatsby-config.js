module.exports = {
	pathPrefix: '/yonghe-online',
	siteMetadata: {
		title: 'title',
		description: 'description',
		author: 'author',
		mode: 'test'
	},
	plugins: [
		{
		  resolve: 'gatsby-source-prismic',
		  options: {
			repositoryName:`yonghe-dev`,
			accessToken:`MC5YNTRIV1JBQUFDTUFWVXJD.aBw377-977-9BCgQ77-9C1bvv73vv70LNO-_vWvvv73vv70177-977-977-9b--_vXHvv73vv71i77-977-977-9`,
			schemas: {
			   cooperator: require('./src/schemas/cooperator.json'),
			   newscollection: require('./src/schemas/newscollection.json'),
			},
			imageImgixParams: {
				auto: 'format',
				fit: 'max',
				q: 100,
			},
		  },
		},
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/images`,
			},
		},
		`gatsby-transformer-json`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/test-about-us-middle`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/test-about-us-top`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/testOurteam`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/test-fields-info`,
			},
		},
		//Strapi API
		// {
		//   resolve: `gatsby-source-strapi`,
		//   options: {
		//     apiURL: `http://localhost:1337`,
		//     queryLimit: 1000, // Default to 100
		//     contentTypes: [`our-team`, `cooperator`, `news-collection`],
		//     //If using single types place them in this array.
		//     // singleTypes: [`home-page`, `contact`],
		//   },
		// },
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		'gatsby-plugin-sass',
		'gatsby-plugin-manifest'
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
};
