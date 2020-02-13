/** @jsx jsx */
import { jsx, Flex, Box } from "theme-ui"
import { Link } from "gatsby"
import useSiteMetadata from "../hooks/useSiteMetadata"
import GalleryListList from "../components/GalleryListList"
import Logo from "../components/Logo"
import Divider from "./Divider"

const Header = () => {
  const siteMetadata = useSiteMetadata()

  return (
    <header>
      <div>
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
      <Flex sx={{ color: "muted" }}>
        <Box>NORTH PERTH</Box>
        <Box sx={{ textAlign: "center", flex: "1 1 auto" }}>
          WESTERN AUSTRALIA
        </Box>
        <Box>0404044044</Box>
      </Flex>
      <GalleryListList />
    </header>
  )
}

export default Header
