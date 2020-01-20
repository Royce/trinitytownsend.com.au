import { graphql, useStaticQuery } from "gatsby"

interface Query {
  allFile: {
    distinct: string[]
  }
}

const useGalleryList = () => {
  // TODO: Make "content/gallery" dynamic somehow..
  const data = useStaticQuery<Query>(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "gallery" } }) {
        distinct(field: relativeDirectory)
      }
    }
  `)

  return data.allFile.distinct
}

export default useGalleryList
