const path = require("path")

exports.createPages = ({ actions }, themeOptions) => {
  const { createPage } = actions
  const { basePath } = themeOptions

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

  createPage({
    path: "/inside",
    component: path.resolve(`${__dirname}/src/pages/gallery.tsx`),
  })

  createPage({
    path: "/outside",
    component: path.resolve(`${__dirname}/src/pages/gallery.tsx`),
  })
}
