import { createTheme } from "@mui/material";

// Specifications of Material Design
// Extra-small (phone): 0-599dp
// Small (tablet) (1): 600-904dp
// Small (tablet) (2): 905-1239dp
// Medium (laptop): 1240-1439dp
// Large (desktop): 1440+dp

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: 14,
    h1: { fontSize: "4.209rem" },
    h2: { fontSize: "3.157rem" },
    h3: { fontSize: "2.359rem" },
    h4: { fontSize: "1.777rem" },
    h5: { fontSize: "1.333rem" },
  },
  palette: {
    primary: {
      main: "#2B4C9A",
      light: "#ffffff",
      dark: "#111414"
    },
    secondary: {
      main: "#F4C22A"
    },
  },
  components: {
    MuiGrid: {
      styleOverrides: {
        item: {
          display: "flex",
          alignItems: "center"
        }
      }
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 905,
      lg: 1240,
      xl: 1440
    },
  },
  spacing: [4, 8, 12, 16, 20],
});

export default theme;