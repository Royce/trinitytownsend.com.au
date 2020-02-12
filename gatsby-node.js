const path = require("path")

const onlyUnique = function onlyUnique(value, index, self) {
  return self.indexOf(value) === index
}

exports.createPages = async ({ actions, graphql }, themeOptions) => {
  const { createPage } = actions
  const { basePath } = themeOptions

  const { data } = await graphql(`
    query {
      allFile(filter: { sourceInstanceName: { eq: "gallery" } }) {
        distinct(field: relativeDirectory)
      }
    }
  `)

  data.allFile.distinct.forEach(dir =>
    createPage({
      path: `/${dir}`,
      component: path.resolve(`${__dirname}/src/templates/album.tsx`),
      context: { folder: dir },
    })
  )

  const parents = data.allFile.distinct
    .map(dir => dir.split("/")[0])
    .filter(onlyUnique)
  parents.forEach(dir =>
    createPage({
      path: `/${dir}`,
      component: path.resolve(`${__dirname}/src/templates/collection.tsx`),
      context: { folder: dir },
    })
  )

  createPage({
    path: basePath || "/",
    component: path.resolve(`${__dirname}/src/pages/index.tsx`),
  })
}
