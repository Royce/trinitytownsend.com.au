/** @jsx jsx */
import { jsx } from "theme-ui"
import BackgroundImage from "gatsby-background-image"
import styled from "@emotion/styled"
import useImage from "../hooks/useImage"

const ImageBanner = (props: { file: string; title: string }) => {
  const image = useImage(props.file)

  return (
    <BackgroundImage
      Tag="div"
      className={"banner"}
      fluid={image.fluid}
      backgroundColor={`#040e18`}
    >
      <h1
        sx={{
          color: "white",
          padding: "120px",
          textAlign: "center",
          fontFamily: "arial, san-serif",
          textTransform: "uppercase",
          fontSize: "48px",
        }}
      >
        {props.title}
      </h1>
    </BackgroundImage>
  )
}

export default ImageBanner
// export default styled(ImageBanner)`
//   width: 100%;
//   background-position: bottom center;
//   background-repeat: repeat-y;
//   background-size: cover;
// `
