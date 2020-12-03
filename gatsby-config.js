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
			accessToken:`MC5YNmdwM2hJQUFDQUFTdUJl.H--_vQTvv71R77-9A--_vVQY77-977-9Wu-_vXVaCe-_vShO77-977-977-9e--_ve-_vRHvv70kLyrvv70`,
			//`MC5YNTRIV1JBQUFDTUFWVXJD.aBw377-977-9BCgQ77-9C1bvv73vv70LNO-_vWvvv73vv70177-977-977-9b--_vXHvv73vv71i77-977-977-9`,
			schemas: {
			   cooperator: require('./src/schemas/cooperator.json'),
			   newscollection: require('./src/schemas/newscollection.json'),
			   platform: require('./src/schemas/platform.json'),
			   aboutushomepage: require('./src/schemas/aboutushomepage.json'),
			   product:require('./src/schemas/product.json'),
			   platformhomepage:require('./src/schemas/platformhomepage.json'),

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
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		'gatsby-plugin-sass',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon:`src/w_logo.png`,
				background_color:`white`,//TBD
			},
		}
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
};
