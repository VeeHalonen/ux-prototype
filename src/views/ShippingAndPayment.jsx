import { Typography } from "@mui/material";
import PrevNextButtons from "../components/PrevNextButtons";

const ShippingAndPayment = () => {
  return (
    <div>
      <Typography variant="h5">Shipping and Payment</Typography>
      <PrevNextButtons
        prevLink="/order-summary"
        nextLink="/order-confirmation"
      />
    </div>
  );
};

export default ShippingAndPayment;
