/** @jsx jsx */

import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { jsx, Styled } from "theme-ui"
import Layout from "../components/Layout"
import ImageBanner from "../components/ImageBanner"
import Header from "../components/Header"
import Footer from "../components/Footer"
import useSiteMetadata from "../hooks/useSiteMetadata"

const HomePage = ({ pageContext, data }) => {
  const siteMetadata = useSiteMetadata()
  const { mdx } = data
  const { frontmatter, body } = mdx

  return (
    <Layout>
      <Header />
      {frontmatter.banner ? (
        <ImageBanner
          file={frontmatter.banner.relativePath}
          title={frontmatter.title}
        />
      ) : (
        <Styled.h1>{frontmatter.title}</Styled.h1>
      )}
      <MDXRenderer>{body}</MDXRenderer>
      {siteMetadata.author && <Footer />}
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
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
