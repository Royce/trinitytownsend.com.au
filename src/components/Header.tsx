/** @jsx jsx */
import { jsx, Flex, Box, Styled } from "theme-ui"
import { Link } from "gatsby"
import useSiteMetadata from "../hooks/useSiteMetadata"
import GalleryListList from "../components/GalleryListList"
import Logo from "../components/Logo"

const Header = () => {
  const siteMetadata = useSiteMetadata()

  return (
    <header>
      <div sx={{ mb: 3 }}>
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
      <Flex sx={{ color: "muted", mb: 3 }}>
        <Styled.p as={Box}>NORTH PERTH</Styled.p>
        <Styled.p as={Box} sx={{ textAlign: "center", flex: "1 1 auto" }}>
          WESTERN AUSTRALIA
        </Styled.p>
        <Styled.p as={Box}>0424299811</Styled.p>
      </Flex>
      <GalleryListList />
    </header>
  )
}

export default Header
