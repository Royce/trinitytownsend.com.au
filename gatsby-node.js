const path = require("path")

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
      component: path.resolve(`${__dirname}/src/pages/gallery.tsx`),
    })
  )

  createPage({
    path: basePath || "/",
    component: path.resolve(`${__dirname}/src/pages/index.tsx`),
  })

  createPage({
    path: basePath || "/about",
    component: path.resolve(`${__dirname}/src/pages/about.tsx`),
  })

  createPage({
    path: "/events",
    component: path.resolve(`${__dirname}/src/pages/list.tsx`),
  })
}
