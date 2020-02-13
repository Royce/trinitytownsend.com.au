export default {
  initialColorMode: "light",
  fonts: {
    body: '"Avenir Next", system-ui, sans-serif',
    heading: '"Avenir Next", system-ui, sans-serif',
    moonospace: "Menlo, monospace",
  },
  colors: {
    text: "#fff",
    background: "#151515",
    primary: "#A5F",
    muted: "#888",
    modes: {
      light: {
        text: "#000",
        background: "#fff",
        primary: "#639",
      },
    },
  },
  styles: {
    root: {
      fontFamily: "body",
    },
    Container: {
      padding: 4,
      pb: 0,
      border: "1px solid lightgrey",
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
      color: "text",
      fontWeight: 400,
      lineHeight: "1.2",
      fontSize: [3, 4, 5],
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
