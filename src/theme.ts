import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
        primary: {
            main: '#9f86c0',
        },
        secondary: {
            main: '#4f8e36',
        },
    },
    typography: {
        fontFamily: "Helvetica Neue"
    }
});

theme = responsiveFontSizes(theme)

export default theme;