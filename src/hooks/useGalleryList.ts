import { graphql, useStaticQuery } from "gatsby"

interface Query {
  allFile: {
    distinct: string[]
  }
}

const useGalleryList = (folder: string) => {
  const data = useStaticQuery<Query>(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "gallery" } }) {
        distinct(field: relativeDirectory)
      }
    }
  `)

  return data.allFile.distinct.filter(dir => dir.startsWith(folder))
}

export default useGalleryList
