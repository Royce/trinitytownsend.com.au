import * as React from "react"
import { Global } from "@emotion/core"

const GlobalStyles = () => {
  return <Global styles={theme => theme.styles.Global} />
}

export default GlobalStyles
