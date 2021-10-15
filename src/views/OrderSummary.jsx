import { Grid, Typography } from "@mui/material";
import PrevNextButtons from "../components/PrevNextButtons";
import SimpleDataRow from "../components/SimpleDataRow";
import SimpleDataRowTitle from "../components/SimpleDataRowTitle";
import TotalSum from "../components/TotalSum";

const OrderSummary = () => {
  return (
    <div>
      <Typography variant="h5" paragraph>
        Order Summary
      </Typography>
      <Grid container spacing={3} style={{ marginTop: 10 }}>
        <SimpleDataRowTitle />
        <SimpleDataRow name="Product Name" price={50} quantity={1} />
        <SimpleDataRow name="Product Name" price={50} quantity={1} />
      </Grid>
      <TotalSum sum={100} />
      <PrevNextButtons nextLink="/shipping-and-payment" />
    </div>
  );
};

export default OrderSummary;
