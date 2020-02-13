/** @jsx jsx */
import { jsx } from "theme-ui"
import styled from "@emotion/styled"

export interface Props {
  children?: string
  type: "shadow" | "line"
}

const Shadow = styled.div`
  overflow: hidden;
  height: 20px;
  &:after {
    content: "";
    display: block;
    margin: -25px auto 0;
    width: 100%;
    height: 25px;
    border-radius: 125px/12px;
    box-shadow: 0 0 8px black;
  }
`

const Line = styled.div`
  position: relative;
  margin-top: 5px;
  height: 1px;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 5%;
    right: 5%;
    width: 90%;
    height: 1px;
    background-image: linear-gradient(
      to right,
      transparent,
      rgb(48, 49, 51),
      transparent
    );
  }
`

export default (props: Props) => {
  if (props.type === "shadow")
    return (
      <div sx={{ margin: "auto", width: "80%", position: "relative" }}>
        <Shadow />
      </div>
    )
  return (
    <div sx={{ margin: "auto", width: "80%", position: "relative" }}>
      <Line />
    </div>
  )
}
