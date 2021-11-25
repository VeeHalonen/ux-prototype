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
  const cartEmpty = products.length === 0;

  const totalPrice = getTotalPrice(products);

  return (
    <Card style={{ padding: 50 }}>
      {/* Page Title */}
      <Typography variant="h5">Shopping Cart</Typography>
      {/* Items */}
      {products.map((product, i) => {
        return <ShoppingCartItem product={product} key={i} context={context} />;
      })}
      {/* No items? */}
      {cartEmpty && (
        <Typography variant="body2" style={{ marginTop: 25 }} paragraph>
          The cart is empty.
        </Typography>
      )}
      {/* Divider */}
      <hr style={{ marginTop: 25, marginBottom: 25 }} />
      {/* Total */}
      <Typography variant="h5" textAlign="end">
        Total: €{totalPrice}
      </Typography>
      {/* Checkout button */}
      <PrevNextButtons
        nextLink="/order-summary"
        nextTitle="To Checkout"
        disableNext={cartEmpty}
      />
    </Card>
  );
};

export default ShoppingCart;
