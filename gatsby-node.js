const path = require(`path`)

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  const loadGallery = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPhotoGallery {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allContentfulPhotoGallery.edges.map(({ node }) => {
        createPage({
          path: `${node.slug}/`,
          component: path.resolve(`./src/templates/gallery.js`),
          context: {
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })

  return Promise.all([loadGallery])
}
