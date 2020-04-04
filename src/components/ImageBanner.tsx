/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import BackgroundImage from "gatsby-background-image"
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
      <Styled.h1
        sx={{
          color: "white",
          padding: ["60px", "90px", "120px"],
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        {props.title}
      </Styled.h1>
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
