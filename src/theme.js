import { createTheme } from "@mui/material/styles";
import { blueGrey, grey, purple } from "@mui/material/colors";

// https://mui.com/customization/theming/

// NOTE: always use <Typography> in the code for the fonts to work!
// e.g. <Typography variant="h5" paragraph>I'm a title!</Typography>

export const theme = createTheme({
  /* FONTS (default: Roboto) */
  typography: {
    /* ALL: */
    // fontFamily: ["Times New Roman", "serif"].join(","), // <- fallback syntax
    /* ...OR by tag type: */
    // h5: {
    //   fontFamily: "Arial",
    // },
    // button: {
    //   fontFamily: "Comic Sans MS",
    // },
    /* Specific components */
    link: {
      color: "#00ff00",
      "&:hover": {
        color: "#000000",
        textDecoration: "underline #000000",
      },
    },
    components: {
      // Name of the component (global class, from MUI documentation)
      MuiLink: {
        styleOverrides: {
          color: purple[500],
          root: {
            color: purple[500],
          },
        },
      },
    },
  },
  /* COLOURS */
  palette: {
    background: {
      default: "lightgray", // Site background
      // paper: "red", // Products cards etc.
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
    /* Certain interactive parts */
    // action: {
    //   active: purple[200],
    //   activeOpacity: 1,
    //   hover: purple[100],
    //   hoverOpacity: 0.7,
    //   focus: purple[600],
    //   focusOpacity: 1,
    //   selected: purple[300],
    //   selectedOpacity: 1,
    // },
  },
});
