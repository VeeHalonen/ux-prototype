import { Typography, Grid, Card } from "@mui/material";
import { useContext } from "react";
import PrevNextButtons from "../components/PrevNextButtons";
import ShoppingCartStepper from "../components/ShoppingCartStepper";
import SimpleDataRow from "../components/SimpleDataRow";
import SimpleDataRowTitle from "../components/SimpleDataRowTitle";
import TotalSum from "../components/TotalSum";
import {
  getRandomProducts,
  getProductPrice,
  getTotalPrice,
  GlobalStateContext,
} from "../helpers";

const OrderConfirmation = () => {
  const context = useContext(GlobalStateContext);
  const products = context?.globalState?.shoppingCart || getRandomProducts(2);
  const shippingCost = parseInt(localStorage.getItem("shippingCost")) || 100;
  let shippingMethod = "";
  switch (shippingCost) {
    case 500:
      shippingMethod = "Carrier Pigeon";
      break;
    case 2000:
      shippingMethod = "African Swallow";
      break;
    default:
      shippingMethod = "Snail Mail";
  }
  const spacing = 50;
  return (
    <div>
      <ShoppingCartStepper step={3} />
      <Card style={{ padding: 50 }}>
        <Typography variant="h5" style={{ marginBottom: spacing }} paragraph>
          Review and Confirm Your Order
        </Typography>
        <Grid container spacing={3}>
          <SimpleDataRowTitle />
          {products.map((product, i) => {
            return (
              <SimpleDataRow
                name={product.productName}
                price={getProductPrice(product)}
                quantity={product.inCart}
                key={i}
              />
            );
          })}
          <SimpleDataRow
            name="Shipping"
            price={shippingCost}
            extraInfo={shippingMethod}
          />
        </Grid>
        <TotalSum sum={getTotalPrice(products) + shippingCost} />
        <Typography
          paragraph
          style={{ fontWeight: "bold", marginTop: spacing }}
        >
          Shipping Address
        </Typography>
        <Typography>Maija Meikäläinen</Typography>
        <Typography>Teikäläisentie 1 A 1</Typography>
        <Typography>00100 Helsinki</Typography>
        <Typography
          paragraph
          style={{ fontWeight: "bold", marginTop: spacing }}
        >
          Payment Method
        </Typography>
        <Typography paragraph>Card Payment</Typography>
        <PrevNextButtons
          prevLink="/shipping-and-payment"
          nextLink="/order-received"
          nextTitle="Finish"
        />
      </Card>
    </div>
  );
};

export default OrderConfirmation;
