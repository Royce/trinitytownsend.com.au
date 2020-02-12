/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import useSiteMetadata from "../hooks/useSiteMetadata"
import GalleryListList from "../components/GalleryListList"
import Logo from "../components/Logo"

const Header = () => {
  const siteMetadata = useSiteMetadata()

  return (
    <header
      sx={{
        py: 4,
        variant: "styles.header",
      }}
    >
      <div
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: 3,
        }}
      >
        <Link to="/" title="Home" style={{ width: "100%" }}>
          <Logo />
          <span
            sx={{
              position: "absolute",
              width: 1,
              height: 1,
              overflow: "hidden",
              top: -9999,
            }}
          >
            {siteMetadata.title}
          </span>
        </Link>
      </div>
      <GalleryListList />
    </header>
  )
}

export default Header
