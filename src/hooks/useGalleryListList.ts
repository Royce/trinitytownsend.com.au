import { graphql, useStaticQuery } from "gatsby"

interface Query {
  allFile: {
    distinct: string[]
  }
}

const onlyUnique = function onlyUnique<T>(value: T, index: number, self: T[]) {
  return self.indexOf(value) === index
}

const useGalleryListList = () => {
  const data = useStaticQuery<Query>(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "gallery" } }) {
        distinct(field: relativeDirectory)
      }
    }
  `)

  return data.allFile.distinct.map(dir => dir.split("/")[0]).filter(onlyUnique)
}

export default useGalleryListList
