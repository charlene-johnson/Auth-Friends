import { createMuiTheme } from '@material-ui/core/styles';

const PangoFont ='Pangolin, cursive';

const orange = "#FCE7DE";
const yellow = "#FCF8DE";
const green = "#DEFCE0";
const blue = "#DEF2FC";
const purple = "#F0DEFD" ;

export default createMuiTheme({
    palette: {
        common: {
            orange: orange,
            yellow: yellow,
            green: green,
            blue: blue,
            purple: purple
        },
        primary: {
            main: green
        },
        secondary: {
            main: purple
        },
    },
    typography: {
        tab: {
            fontFamily:PangoFont,
            textTransform: "none",
            fontSize: "1.5rem",
            color: purple
        },
        h1: {
            fontFamily: PangoFont,
            fontSize: '4rem',
            color: purple
        },
        h2: {
            fontFamily: PangoFont
        },
        h3: {
            fontFamily: PangoFont
        },
        h4: {
            fontFamily: PangoFont
        },
        h5: {
            fontFamily: PangoFont
        },
        h6: {

        },
        p: {
            fontFamily: PangoFont
        },
        buttons: {
            fontFamily: PangoFont,
            textTransform: "none",
            color: blue
        }, subtitle1: {
            fontFamily: PangoFont
        }
    }
})
