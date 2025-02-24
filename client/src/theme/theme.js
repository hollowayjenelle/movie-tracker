import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: {
      fontSize: 36,
      fontWeight: 800,
    },
    h3: {
      fontSize: 24,
      fontWeight: 700,
    },
    body1: {
      fontSize: 14,
      fontWeight: 400,
    },
    button: {
      textTransform: "none",
    },
    caption: {
      fontSize: 12,
      fontWeight: 500,
    },
  },
  palette: {
    primary: {
      main: "#7b2cbf",
    },
    secondary: {
      main: "#ff9e00",
    },
  },
});

export default theme;
