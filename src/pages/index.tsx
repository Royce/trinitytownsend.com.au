import * as React from "react"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Footer from "../components/Footer"
import useSiteMetadata from "../hooks/useSiteMetadata"

const HomePage = () => {
  const siteMetadata = useSiteMetadata()

  return (
    <Layout>
      <Header />
      <h2>Index</h2>
      {siteMetadata.author && <Footer />}
    </Layout>
  )
}

export default HomePage
