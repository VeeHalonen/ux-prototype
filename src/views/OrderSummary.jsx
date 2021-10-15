import { Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const OrderSummary = () => {
  const style = { fontWeight: "bold" };
  return (
    <div>
      <Typography variant="h5" paragraph>
        Order Summary
      </Typography>
      <Grid container spacing={3} style={{ marginTop: 10 }}>
        <Grid container item justifyContent="space-between">
          <Grid item>
            <Typography style={style}>Product Name</Typography>
          </Grid>
          <Grid item>
            <Typography style={style}>€50</Typography>
          </Grid>
        </Grid>
        <Grid container item justifyContent="space-between">
          <Grid item>
            <Typography style={style}>Product Name</Typography>
          </Grid>
          <Grid item>
            <Typography style={style}>€50</Typography>
          </Grid>
        </Grid>
      </Grid>
      <hr style={{ marginTop: 25, marginBottom: 25 }} />
      <Typography variant="h5" textAlign="end">
        Total: €100
      </Typography>
      <div style={{ textAlign: "end", marginTop: 30, marginBottom: 100 }}>
        <Button component={Link} to="/shipping-and-payment" variant="contained">
          Next
        </Button>
      </div>
    </div>
  );
};

export default OrderSummary;
