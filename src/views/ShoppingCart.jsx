import { Typography, Card } from "@mui/material";
import ShoppingCartItem from "../components/ShoppingCartItem";
import PrevNextButtons from "../components/PrevNextButtons";

const ShoppingCart = () => {
  return (
    <Card style={{ padding: 50 }}>
      <Typography variant="h5">Shopping Cart</Typography>
      <ShoppingCartItem />
      <ShoppingCartItem />
      <hr style={{ marginTop: 25, marginBottom: 25 }} />
      <Typography variant="h5" textAlign="end">
        Total: €100
      </Typography>
      <PrevNextButtons nextLink="/order-summary" nextTitle="To Checkout" />
    </Card>
  );
};

export default ShoppingCart;
