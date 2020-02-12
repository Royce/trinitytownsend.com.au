/** @jsx jsx */
import { StaticQuery, graphql } from "gatsby"
import { jsx } from "theme-ui"
import Img, { FluidObject } from "gatsby-image"

export interface Query {
  file: {
    id: string
    name: string
    publicURL: string
    relativeDirectory: string
    childImageSharp: {
      fluid: FluidObject & { presentationWidth: number }
    }
  }
}

export default () => (
  <StaticQuery<Query>
    query={graphql`
      query Logo {
        file(
          sourceInstanceName: { eq: "images" }
          name: { eq: "trinitytownsend-logo" }
        ) {
          id
          name
          publicURL
          relativeDirectory
          childImageSharp {
            fluid(maxWidth: 593) {
              ...GatsbyImageSharpFluid
              presentationWidth
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        alt={data.file.name}
        fluid={data.file.childImageSharp.fluid}
        style={{
          maxWidth: data.file.childImageSharp.fluid.presentationWidth,
          margin: "0 auto",
          flex: 1,
        }}
      />
    )}
  />
)
