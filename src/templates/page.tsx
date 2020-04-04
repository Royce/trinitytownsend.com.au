/** @jsx jsx */

import { graphql } from "gatsby"
import { jsx, Box, Flex, Heading } from "theme-ui"
import Layout from "../components/Layout"
import ImageBanner from "../components/ImageBanner"
import Header from "../components/Header"
import Footer from "../components/Footer"
import useSiteMetadata from "../hooks/useSiteMetadata"

const HomePage = ({ pageContext, data }) => {
  const siteMetadata = useSiteMetadata()
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <Header />
      {frontmatter.banner ? (
        <ImageBanner
          file={frontmatter.banner.relativePath}
          title={frontmatter.title}
        />
      ) : (
        <h1>{frontmatter.title}</h1>
      )}
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      {siteMetadata.author && <Footer />}
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        banner {
          relativePath
        }
      }
    }
  }
`

export default HomePage
