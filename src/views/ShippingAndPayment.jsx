import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ShippingAndPayment = () => {
  return (
    <div>
      <Typography variant="h5">Shipping and Payment</Typography>
      <div style={{ textAlign: "end", marginTop: 30, marginBottom: 100 }}>
        <Button
          component={Link}
          to="/order-summary"
          variant="contained"
          color="secondary"
          style={{ marginRight: 10 }}
        >
          Previous
        </Button>
        <Button component={Link} to="/order-confirmation" variant="contained">
          Next
        </Button>
      </div>
    </div>
  );
};

export default ShippingAndPayment;
