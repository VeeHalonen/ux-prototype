import { Grid, Typography } from "@mui/material";

const SimpleDataRow = ({ name, price, quantity, extraInfo }) => {
  const style = {};
  return (
    <Grid container item justifyContent="space-between">
      <Grid item>
        <Typography gutterBottom style={{ fontWeight: "bold" }} variant="body2">
          {name}
        </Typography>
        {extraInfo && <Typography variant="body2">{extraInfo}</Typography>}
      </Grid>
      <Grid item></Grid>
      <Grid item>
        <Typography variant="body2">{quantity || ""}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2" style={style}>
          €{price}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SimpleDataRow;
