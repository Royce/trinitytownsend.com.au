import { graphql, useStaticQuery } from "gatsby"
import { FluidObject } from "gatsby-image"

export interface Query {
  allFile: {
    nodes: {
      id: string
      name: string
      publicURL: string
      relativePath: string
      childImageSharp: {
        fluid: FluidObject
      }
    }[]
  }
}

const useImage = (file: string) => {
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
          relativePath
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
    .filter(node => !file || file === node.relativePath)
    .map(node => ({
      ...node.childImageSharp,
      id: node.id,
      name: node.name,
      publicURL: node.publicURL,
    }))[0]
}

export default useImage
