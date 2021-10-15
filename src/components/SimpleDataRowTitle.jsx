import { Grid, Typography } from "@mui/material";

const SimpleDataRowTitle = () => {
  const style = { fontWeight: "bold" };
  return (
    <Grid container item justifyContent="space-between">
      <Grid item>
        <Typography style={style}>Product</Typography>
      </Grid>
      <Grid item></Grid>
      <Grid item>
        <Typography style={style}>Quantity</Typography>
      </Grid>
      <Grid item>
        <Typography style={style}>Price</Typography>
      </Grid>
    </Grid>
  );
};

export default SimpleDataRowTitle;
