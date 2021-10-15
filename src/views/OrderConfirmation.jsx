import { Typography, Grid } from "@mui/material";
import PrevNextButtons from "../components/PrevNextButtons";
import SimpleDataRow from "../components/SimpleDataRow";
import SimpleDataRowTitle from "../components/SimpleDataRowTitle";
import TotalSum from "../components/TotalSum";

const OrderConfirmation = () => {
  return (
    <div>
      <Typography variant="h5" style={{ marginBottom: 50 }} paragraph>
        Order Confirmation
      </Typography>
      <Typography paragraph style={{ fontWeight: "bold", marginBottom: 40 }}>
        Order Number: #123456789
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
      <Typography paragraph style={{ fontWeight: "bold", marginTop: 50 }}>
        Shipping Address
      </Typography>
      <Typography>Maija Meikäläinen</Typography>
      <Typography>Teikäläisentie 1 A 1</Typography>
      <Typography>00100 Helsinki</Typography>
      <PrevNextButtons nextLink="/" nextTitle="Back to Home" />
    </div>
  );
};

export default OrderConfirmation;
