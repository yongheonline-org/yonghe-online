/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path");

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const categories = [0,1,2,3,4,5,6,7]; //0-瓷器,1-字画 2-玉石 3-青铜器，4古服饰 5钱币 6佛像唐卡 7其他类
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
      allProducts: allPrismicProduct {
        edges {
          node {
            uid
            data {
              categoryid
            }
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
  });
  categories.forEach(category =>{
    createPage({
      path: `/platform/product-list-${category}`,
      component: path.resolve(`src/components/productList/productList.js`),
      context: {
        categoryId: category,
      },
    })
  });
  result.data.allProducts.edges.forEach(product =>{
    createPage({
      path: `/platform/product-list-${product.node.data.categoryid}/${product.node.uid}`,
      component: path.resolve(`src/components/productDetails/productDetails.js`),
      context: {
        uid: product.node.uid,
      },
    })
  });

}
