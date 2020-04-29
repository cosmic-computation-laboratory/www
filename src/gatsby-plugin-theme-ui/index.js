// import { tailwind } from "@theme-ui/presets";
// console.log({
//   tailwind
// });
// export default {
//   ...tailwind,
//   styles: {
//     ...tailwind.styles
//   }
// };

const join = xs => xs.join(", ");

const theme = {
  colors: {
    // text:,
    background: "#0139FF"
    // primary
    // secondary
    // accent
    // muted
  },
  fonts: {
    serif: join(["WindsorLT-Bold", "Georgia", "serif"]),
    stamp: join(["HandStampedJNL-Regular", "serif"]),
    sans: join([
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Helvetica Neue",
      "Helvetica",
      "sans-serif"
    ])
  },
  text: {
    hero: {
      lineHeight: 0.9,
      mb: 4,
      textAlign: ["left", "center"],
      fontSize: [6, 8],
      fontFamily: "serif",
      color: "white"
    },
    subhero: {
      textAlign: ["left, center"],
      fontSize: [3, 4],
      mb: [4, 5],
      color: "white",
      fontFamily: "serif",
      fontWeight: "bold"
    }
  },
  styles: {
    root: {
      fontFamily: "sans",
      fontSize: 0
    }

    // h1: {
    //   fontSize: [5, 6, 7]
    // }
  }
};

export default theme;
