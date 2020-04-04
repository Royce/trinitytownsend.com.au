/** @jsx jsx */

import { jsx } from "theme-ui"

export default ({ children }: { children: any }) => (
  <div>
    <h1>My Layout</h1>
    <div>{children}</div>
  </div>
)
