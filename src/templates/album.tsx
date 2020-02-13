import * as React from "react"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Gallery from "../components/Gallery"
import useSiteMetadata from "../hooks/useSiteMetadata"

const HomePage = ({ pageContext }) => {
  const siteMetadata = useSiteMetadata()

  return (
    <Layout>
      <Header />
      <Gallery folder={pageContext.folder} />
      {siteMetadata.author && <Footer />}
    </Layout>
  )
}

export default HomePage
