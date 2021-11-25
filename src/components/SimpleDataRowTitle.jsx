import { Grid, Typography } from "@mui/material";

const SimpleDataRowTitle = () => {
  const style = { fontWeight: "bold" };
  return (
    <Grid container item justifyContent="space-between">
      <Grid item xs={8}>
        <Typography style={style}>Product</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography style={style} align="right">
          Quantity
        </Typography>
      </Grid>
      <Grid item xs={1}></Grid>
      <Grid item xs={1}>
        <Typography style={style} align="right">
          Price
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SimpleDataRowTitle;
