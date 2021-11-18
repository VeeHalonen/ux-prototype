/* Corner indicator for new products */

import { Paper, Typography } from "@mui/material";

const NewIndicator = () => {
  return (
    <Paper
      variant="outlined"
      style={{
        // display: "inline-block",
        position: "absolute",
        // transform: "rotate(-45deg)",
        // right: 2,
        // top: 45,
        padding: 2,
        paddingLeft: 8,
        paddingRight: 8,
        // margin: 0,
        borderColor: "lightGray",
        backgroundColor: "darkRed",
        color: "white",
      }}
    >
      <Typography component="span" variant="subtitle2">
        NEW!
      </Typography>
    </Paper>
  );
};

export default NewIndicator;
