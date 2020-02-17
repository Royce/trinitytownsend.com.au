import * as React from "react"
import { Footer as FooterBase, useColorMode } from "theme-ui"
import styled from "@emotion/styled"
import SocialLinks from "../components/SocialLinks"
import useSiteMetadata from "../hooks/useSiteMetadata"

const Button = styled.button<{ theme?: any }>`
  padding: 0.4rem 0.75rem;
  font-size: 0.875rem;
  cursor: pointer;
  background: none;
  border: 1px solid ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.primary};
`

const Footer = () => {
  const siteMetadata = useSiteMetadata()
  const [colorMode, setColorMode] = useColorMode()

  return (
    <FooterBase>
      <p>{`© ${new Date().getFullYear()} ${siteMetadata.author}`}</p>
      {/* <Button
        onClick={() => {
          setColorMode(colorMode === "light" ? "dark" : "light")
        }}
      >
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button> */}

      <SocialLinks />
    </FooterBase>
  )
}

export default Footer
