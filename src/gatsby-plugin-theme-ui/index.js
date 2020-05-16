const join = (xs) => xs.join(", ");

const theme = {
  colors: {
    text: "#222",
    background: "#fff",
    primary: "#0139FF",
  },
  fonts: {
    serif: join(["WindsorLT-Bold", "Georgia", "serif"]),
    stamp: join(["HandStampedJNL-Regular", "serif"]),
    sans: join([
      "Inter",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Helvetica Neue",
      "Helvetica",
      "sans-serif",
    ]),
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  sizes: {
    sidebar: 256,
    measure: 768,

    container: 1024,
  },
  text: {
    hero: {
      lineHeight: 0.9,
      mb: 4,
      textAlign: ["center"],
      fontSize: [6, 8],
      fontFamily: "serif",
      color: "white",
    },
    stamp: {
      fontFamily: "stamp",
    },
    subhero: {
      textAlign: ["center"],
      fontSize: [3, 4],
      mb: [4, 5],
      color: "white",
      fontFamily: "serif",
      fontWeight: "bold",
    },
    heading: {
      fontFamily: "serif",
    },
    linkedHeading: {
      fontFamily: "stamp",
      a: {
        color: "text",
      },
    },
  },
  layouts: {
    list: {
      maxWidth: "container",
      margin: "0 auto",
    },
  },
  styles: {
    root: {
      fontFamily: "sans",
      fontSize: 1,
    },
    a: {
      color: "primary",
    },
    h1: {
      variant: "text.stamp",
      fontSize: 5,
    },
    h2: {
      variant: "text.heading",
      fontSize: 5,
    },
    h3: {
      variant: "text.heading",
      fontSize: 4,
    },
    h4: {
      variant: "text.heading",
      fontSize: 3,
    },
    h5: {
      variant: "text.heading",
      fontSize: 2,
    },
    h6: {
      variant: "text.heading",
      fontSize: 1,
    },
    p: {
      fontSize: 3,
      color: "text",
      lineHeight: "body",
      fontFamily: "sans",
    },
    img: {
      maxWidth: "100%",
    },
  },
};

export default theme;
