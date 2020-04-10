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
      <h2>Hi, I'm Trinity</h2>
      <p>
        I love to travel, make friends with dogs, drink fortified wines, spend
        time with fun and interesting people, and photograph beautiful scenes -
        in the following pages are some of those scenes and people.
      </p>
      {siteMetadata.author && <Footer />}
    </Layout>
  )
}

export default HomePage
