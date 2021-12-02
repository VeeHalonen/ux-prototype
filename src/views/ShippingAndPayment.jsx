import {
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Grid,
  Card,
} from "@mui/material";
import { useContext, useState } from "react";
import CustomerDetailsForm from "../components/CustomerDetailsForm";
import PrevNextButtons from "../components/PrevNextButtons";
import ShoppingCartStepper from "../components/ShoppingCartStepper";
import { getTotalPrice, GlobalStateContext } from "../helpers";

const ShippingAndPayment = () => {
  const [shipping, setShipping] = useState(100);
  const context = useContext(GlobalStateContext);
  const products = context?.globalState?.shoppingCart;
  const totalPrice = products ? getTotalPrice(products) : 100;
  const headerStyle = { fontWeight: "bold", marginTop: 30 };
  const getLabel = (name, price, deliveryTime) => {
    return (
      <div style={{ marginBottom: 5, marginTop: 5 }}>
        <Typography>
          {name + " "}
          <Typography variant="caption">(€{price})</Typography>
        </Typography>
        <Typography variant="caption">{deliveryTime}</Typography>
      </div>
    );
  };
  const getPriceRow = (name, price) => {
    const rowStyle = { fontWeight: "bold", marginTop: 5, marginBottom: 5 };
    return (
      <Grid container item justifyContent="space-between">
        <Grid item>
          <Typography variant="body2" style={rowStyle}>
            {name}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" style={rowStyle}>
            €{price}
          </Typography>
        </Grid>
      </Grid>
    );
  };
  // Saves shipping information to localStorage
  const saveShippingInfo = () => {
    localStorage.setItem("shippingCost", shipping);
  };
  return (
    <div>
      <ShoppingCartStepper step={2} />
      <Card style={{ padding: 50 }}>
        <Typography variant="h5" paragraph>
          Shipping and Payment Information
        </Typography>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Typography paragraph style={headerStyle}>
              Customer Details
            </Typography>
            <CustomerDetailsForm />
          </Grid>
          <Grid item xs={3}>
            <Card
              style={{
                padding: 20,
                paddingLeft: 30,
                paddingRight: 30,
                marginTop: 25,
              }}
            >
              {getPriceRow("Products", totalPrice)}
              {getPriceRow("Shipping", shipping)}
              <hr />
              {getPriceRow("Total", totalPrice + shipping)}
            </Card>
          </Grid>
        </Grid>
        <Typography paragraph style={headerStyle}>
          Shipping
        </Typography>
        <RadioGroup
          value={shipping}
          onChange={(e) => setShipping(parseInt(e.target.value))}
        >
          <FormControlLabel
            value={100}
            control={<Radio />}
            label={getLabel("Snail Mail", 100, "1+ years")}
          />
          <FormControlLabel
            value={500}
            control={<Radio />}
            label={getLabel("Carrier Pigeon", 500, "2-3 weeks")}
          />
          <FormControlLabel
            value={2000}
            control={<Radio />}
            label={getLabel("African Swallow", 2000, "3-5 days")}
          />
        </RadioGroup>
        <Typography paragraph style={headerStyle}>
          Payment Methods
        </Typography>
        <img id="logo" src="paymentMethods.png" alt="Payment Methods" />
        <PrevNextButtons
          prevLink="/order-summary"
          nextLink="/order-confirmation"
          actionOnNext={saveShippingInfo}
        />
      </Card>
    </div>
  );
};

export default ShippingAndPayment;
