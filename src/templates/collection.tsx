import * as React from "react"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Footer from "../components/Footer"
import GalleryList from "../components/GalleryList"
import useSiteMetadata from "../hooks/useSiteMetadata"

const HomePage = ({ pageContext }) => {
  const siteMetadata = useSiteMetadata()

  return (
    <Layout>
      <Header />
      <GalleryList folder={pageContext.folder} />
      {siteMetadata.author && <Footer />}
    </Layout>
  )
}

export default HomePage
