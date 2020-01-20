import { graphql, useStaticQuery } from "gatsby"
import { FluidObject } from "gatsby-image"

export interface Query {
  allFile: {
    nodes: {
      id: string
      name: string
      publicURL: string
      relativeDirectory: string
      childImageSharp: {
        fluid: FluidObject
      }
    }[]
  }
}

const useGallery = (directory: string) => {
  // TODO: Make "content/gallery" dynamic somehow..
  const data = useStaticQuery<Query>(graphql`
    query {
      allFile(
        filter: { sourceInstanceName: { eq: "gallery" } }
        sort: { order: ASC, fields: name }
      ) {
        nodes {
          id
          name
          publicURL
          relativeDirectory
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  return data.allFile.nodes
    .filter(node => !directory || directory === node.relativeDirectory)
    .map(node => ({
      ...node.childImageSharp,
      id: node.id,
      name: node.name,
      publicURL: node.publicURL,
    }))
}

export default useGallery
