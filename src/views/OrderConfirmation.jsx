import { Typography, Grid, Card } from "@mui/material";
import PrevNextButtons from "../components/PrevNextButtons";
import ShoppingCartStepper from "../components/ShoppingCartStepper";
import SimpleDataRow from "../components/SimpleDataRow";
import SimpleDataRowTitle from "../components/SimpleDataRowTitle";
import TotalSum from "../components/TotalSum";

const OrderConfirmation = () => {
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
          <SimpleDataRow
            name="Product Name"
            price={50}
            quantity={1}
            extraInfo="Some Info"
          />
          <SimpleDataRow
            name="Product Name"
            price={50}
            quantity={1}
            extraInfo="Some Info"
          />
          <SimpleDataRow name="Shipping" price={100} extraInfo="Snail Mail" />
        </Grid>
        <TotalSum sum={200} />
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
