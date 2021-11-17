import { Typography, Card } from "@mui/material";
import ShoppingCartItem from "../components/ShoppingCartItem";
import PrevNextButtons from "../components/PrevNextButtons";
import { useContext } from "react";
import {
  getRandomProducts,
  getTotalPrice,
  GlobalStateContext,
} from "../helpers";

const ShoppingCart = () => {
  const context = useContext(GlobalStateContext);
  const products = context?.globalState?.shoppingCart || getRandomProducts(2);

  const totalPrice = getTotalPrice(products);

  return (
    <Card style={{ padding: 50 }}>
      <Typography variant="h5">Shopping Cart</Typography>
      {products.map((product, i) => {
        return <ShoppingCartItem product={product} key={i} context={context} />;
      })}
      <hr style={{ marginTop: 25, marginBottom: 25 }} />
      <Typography variant="h5" textAlign="end">
        Total: €{totalPrice}
      </Typography>
      <PrevNextButtons nextLink="/order-summary" nextTitle="To Checkout" />
    </Card>
  );
};

export default ShoppingCart;
