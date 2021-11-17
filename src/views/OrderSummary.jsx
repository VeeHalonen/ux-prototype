import { Grid, Typography, Card } from "@mui/material";
import { useContext } from "react";
import PrevNextButtons from "../components/PrevNextButtons";
import ShoppingCartStepper from "../components/ShoppingCartStepper";
import SimpleDataRow from "../components/SimpleDataRow";
import SimpleDataRowTitle from "../components/SimpleDataRowTitle";
import TotalSum from "../components/TotalSum";
import {
  getProductPrice,
  getRandomProducts,
  getTotalPrice,
  GlobalStateContext,
} from "../helpers";

const OrderSummary = () => {
  const context = useContext(GlobalStateContext);
  const products = context?.globalState?.shoppingCart || getRandomProducts(2);
  return (
    <div>
      <ShoppingCartStepper step={1} />
      <Card style={{ padding: 50 }}>
        <Typography variant="h5" paragraph>
          Order Summary
        </Typography>
        <Grid container spacing={3} style={{ marginTop: 10 }}>
          <SimpleDataRowTitle />
          {products.map((product, i) => {
            return (
              <SimpleDataRow
                name={product.productName}
                price={getProductPrice(product)}
                quantity={1}
                key={i}
              />
            );
          })}
        </Grid>
        <TotalSum sum={getTotalPrice(products)} />
        <PrevNextButtons
          nextLink="/shipping-and-payment"
          prevLink="/shopping-cart"
        />
      </Card>
    </div>
  );
};

export default OrderSummary;
