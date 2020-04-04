export default {
  initialColorMode: "light",
  fonts: {
    body: '"Avenir Next", system-ui, sans-serif',
    heading: '"Avenir Next", system-ui, sans-serif',
    monospace: "Menlo, monospace",
  },
  colors: {
    text: "#fff",
    background: "#151515",
    primary: "#A5F",
    muted: "#888",
    modes: {
      light: {
        text: "#000",
        background: "#f9ffff",
        primary: "#639",
      },
    },
  },
  styles: {
    root: {
      fontFamily: "body",
    },
    Global: {
      "*": { boxSizing: "border-box" },
      body: { margin: 0, padding: 0 },
      html: { margin: 0, padding: 0 },
    },
    Container: {
      padding: 4,
      margin: [0, 0, 0, "40px auto"],
      width: ["100%", "100%", "100%", "95%"],
      pb: 0,
      border: "1px solid lightgrey",
      borderWidth: [0, 0, 0, "1px"],
      background: "white",
    },
    Header: {
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "1rem",
    },
    Footer: {
      width: "100%",
      padding: 1,
      mt: 4,
      fontSize: 1,
      alignItems: "center",
      justifyContent: "space-between",
    },
    h1: {
      fontFamily: "heading",
      color: "#444",
      fontWeight: 400,
      lineHeight: "1.2",
      fontSize: [5, 6, 7],
    },
    h2: {
      fontFamily: "heading",
      color: "text",
      fontWeight: 400,
      lineHeight: "1.2",
      paddingTop: [2, 2, 3],
      fontSize: [2, 3, 4],
    },
    navlink: {
      textTransform: "uppercase",
      textDecoration: "none",
      color: "primary",
      m: 2,
    },
    a: {
      color: "text",
      marginLeft: "1rem",
      fontSize: 1,
      "&:hover": {
        opacity: 0.75,
      },
    },
  },
}
