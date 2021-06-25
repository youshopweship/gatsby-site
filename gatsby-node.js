const path = require('path')


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const response = await graphql(`
    query {
      allContentfulProduct{
        edges{
          node{
            slug
          }
        }
      }
    }
  `)
  response.data.allContentfulProduct.edges.forEach(edge => {
    createPage({
      path: `/product/${edge.node.slug}`,
      component: path.resolve("./src/templates/product-template.js"),
      context: {
        slug: edge.node.slug,
      }
    })
  })

}
