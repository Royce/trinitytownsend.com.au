/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import Img from "gatsby-image"
import useGalleryList from "../hooks/useGalleryList"
import useGallery from "../hooks/useGallery"
import Grid from "./Grid"
import Tile from "./Tile"

const imgStyles: any = {
  css: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    transition: "transform 0.5s, filter 0.25s",
    "&:hover": {
      transform: "scale(1.1)",
      filter: "saturate(1.3)",
    },
  },
}

const GalleryList = (props: { folder: string }) => {
  const galleries = useGalleryList(props.folder)
  const images = galleries.map(id => useGallery(id)[0])

  return (
    <div>
      <Grid>
        {images.map((image, index) => (
          <Tile key={image.id}>
            <Link to={galleries[index]}>
              <Img alt={image.name} fluid={image.fluid} {...imgStyles} />
            </Link>
          </Tile>
        ))}
      </Grid>
    </div>
  )
}

export default GalleryList
