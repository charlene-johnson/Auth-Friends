import { createMuiTheme } from "@material-ui/core/styles";

const PangoFont = "Pangolin, cursive";

const lightestGreen = "#DCEEC8";
const lightGreen = "#C5E2A5";
const green = "#AED681";
const darkGreen = "#9CCC65";
const darkestGreen = "#8BC44A";

export default createMuiTheme({
  palette: {
    common: {
      lightestGreen: lightestGreen,
      lightGreen: lightGreen,
      green: green,
      darkGreen: darkGreen,
      darkestGreen: darkestGreen,
    },
    primary: {
      main: lightGreen,
    },
    secondary: {
      main: green,
    },
  },
  typography: {
    tab: {
      fontFamily: PangoFont,
      textTransform: "none",
      fontSize: "1.5rem",
      color: darkGreen,
    },
    h1: {
      fontFamily: PangoFont,
      fontSize: "4rem",
      color: darkGreen,
    },
    h2: {
      fontFamily: PangoFont,
    },
    h3: {
      fontFamily: PangoFont,
    },
    h4: {
      fontFamily: PangoFont,
    },
    h5: {
      fontFamily: PangoFont,
    },
    h6: {},
    p: {
      fontFamily: PangoFont,
    },
    buttons: {
      fontFamily: PangoFont,
      textTransform: "none",
      color: darkestGreen,
    },
    subtitle1: {
      fontFamily: PangoFont,
    },
  },
});
