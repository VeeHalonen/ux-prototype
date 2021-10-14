import { createTheme } from "@mui/material/styles";
import { blueGrey, grey } from "@mui/material/colors";

// https://mui.com/customization/theming/

// NOTE: always use <Typography> in the code for the fonts to work!

export const theme = createTheme({
  /* FONTS (default: Roboto) */
  typography: {
    /* ALL: */
    // fontFamily: ["Times New Roman", "serif"].join(","), // <- fallback syntax
    /* ...OR by component type: */
    // h5: {
    //   fontFamily: "Arial",
    // },
    // button: {
    //   fontFamily: "Comic Sans MS",
    // },
  },
  /* COLOURS */
  palette: {
    background: {
      default: "lightgray",
    },
    primary: {
      // main: "#96cc00", // <- works too
      main: blueGrey[600],
    },
    secondary: {
      main: grey[600],
    },
    // Example: custom colour (can be used e.g. in buttons)
    disabled: {
      main: grey[500],
      contrastText: "#fff", // e.g. button text
    },
  },
});
