/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import GlobalStyles from "./GlobalStyles"

const Layout: React.FunctionComponent<{}> = ({ children }) => (
  <Container>
    <GlobalStyles />
    {children}
  </Container>
)

export default Layout
