import { Grid, Typography } from "@mui/material";

const SimpleDataRow = ({ name, price, quantity, extraInfo }) => {
  const style = {};
  return (
    <Grid container item justifyContent="space-between">
      <Grid item xs={8}>
        <Typography gutterBottom style={{ fontWeight: "bold" }} variant="body2">
          {name}
        </Typography>
        {extraInfo && <Typography variant="body2">{extraInfo}</Typography>}
      </Grid>
      <Grid item xs={2}>
        <Typography variant="body2" align="right">
          {quantity || ""}
        </Typography>
      </Grid>
      <Grid item xs={1}></Grid>
      <Grid item xs={1}>
        <Typography variant="body2" style={style} align="right">
          €{price}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SimpleDataRow;
