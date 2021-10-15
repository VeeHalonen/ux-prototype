import { Typography } from "@mui/material";
import PrevNextButtons from "../components/PrevNextButtons";
import ShoppingCartStepper from "../components/ShoppingCartStepper";

const ShippingAndPayment = () => {
  return (
    <div>
      <ShoppingCartStepper step={2} />
      <Typography variant="h5">Shipping and Payment Information</Typography>
      <PrevNextButtons
        prevLink="/order-summary"
        nextLink="/order-confirmation"
      />
    </div>
  );
};

export default ShippingAndPayment;
