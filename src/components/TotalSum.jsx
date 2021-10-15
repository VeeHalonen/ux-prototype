import { Typography, Grid } from "@mui/material";

const TotalSum = ({ sum }) => {
  const style = { fontWeight: "bold" };
  return (
    <>
      <hr style={{ marginTop: 25, marginBottom: 25 }} />
      <Grid container item justifyContent="space-between">
        <Grid item>
          <Typography style={style}>Total</Typography>
        </Grid>
        <Grid item></Grid>
        <Grid item>
          <Typography style={style}>€{sum}</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default TotalSum;
