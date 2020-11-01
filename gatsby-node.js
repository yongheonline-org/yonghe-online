/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path");

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allNews: allPrismicNewscollection {
        edges {
            node{
                uid
            }
        }
      }
    }
  `)

  result.data.allNews.edges.forEach(news => {
    createPage({
      path: `/news/${news.node.uid}`,
      component: path.resolve(`src/components/newsDetails/newsDetails.js`),
      context: {
        uid: news.node.uid,
      },
    })
  })
}
