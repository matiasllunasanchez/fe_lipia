// src/theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      contrastText: "#FDFFE2",
      main: "#457B9D",
      light: "#83B4FF",
      dark: "#1A2130",
    },
    secondary: {
      main: "#3AA6B9",
    },
  },
});

export default theme;
