/** @jsx jsx */
import { Link } from "gatsby"
import { jsx } from "theme-ui"
import useGalleryListList from "../hooks/useGalleryListList"

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

const GalleryListList = () => {
  const sections = useGalleryListList()

  return (
    <div
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {sections.map(section => (
        <Link
          to={`/${section}`}
          sx={{
            variant: "styles.navlink",
            p: 2,
          }}
        >
          {section}
        </Link>
      ))}
    </div>
  )
}

export default GalleryListList
