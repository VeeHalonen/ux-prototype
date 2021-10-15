import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const OrderConfirmation = () => {
  return (
    <div>
      <Typography variant="h5">Order Confirmation</Typography>
      <div style={{ textAlign: "end", marginTop: 30, marginBottom: 100 }}>
        <Button component={Link} to="/" variant="contained">
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
