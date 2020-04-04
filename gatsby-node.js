const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

const onlyUnique = function onlyUnique(value, index, self) {
  return self.indexOf(value) === index
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ actions, graphql }, themeOptions) => {
  const { createPage } = actions
  const { basePath } = themeOptions

  const { data } = await graphql(`
    query {
      allFile(filter: { sourceInstanceName: { eq: "gallery" } }) {
        distinct(field: relativeDirectory)
      }
      allMdx {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const albums = data.allFile.distinct.filter(dir => dir.split("/").length > 1)

  albums.forEach(dir =>
    createPage({
      path: `/${dir}`,
      component: path.resolve(`${__dirname}/src/templates/album.tsx`),
      context: { folder: dir },
    })
  )

  const parents = albums.map(dir => dir.split("/")[0]).filter(onlyUnique)
  parents.forEach(dir =>
    createPage({
      path: `/${dir}`,
      component: path.resolve(`${__dirname}/src/templates/collection.tsx`),
      context: { folder: dir },
    })
  )

  data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`${__dirname}/src/templates/page.tsx`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
}
