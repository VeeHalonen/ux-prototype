import { Button, Typography } from "@mui/material";
import ShoppingCartItem from "../components/ShoppingCartItem";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  return (
    <div>
      <Typography variant="h5">Shopping Cart</Typography>
      <ShoppingCartItem />
      <ShoppingCartItem />
      <hr style={{ marginTop: 25, marginBottom: 25 }} />
      <Typography variant="h5" textAlign="end">
        Total: €100
      </Typography>
      <div style={{ textAlign: "end", marginTop: 30, marginBottom: 100 }}>
        <Button component={Link} to="/order-summary" variant="contained">
          To Checkout
        </Button>
      </div>
    </div>
  );
};

export default ShoppingCart;
