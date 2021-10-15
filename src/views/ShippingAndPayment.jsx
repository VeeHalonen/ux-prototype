import {
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Grid,
  Card,
} from "@mui/material";
import CustomerDetailsForm from "../components/CustomerDetailsForm";
import PrevNextButtons from "../components/PrevNextButtons";
import ShoppingCartStepper from "../components/ShoppingCartStepper";

const ShippingAndPayment = () => {
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
              {getPriceRow("Products", 100)}
              {getPriceRow("Shipping", 100)}
              <hr />
              {getPriceRow("Total", 200)}
            </Card>
          </Grid>
        </Grid>
        <Typography paragraph style={headerStyle}>
          Shipping
        </Typography>
        <RadioGroup defaultValue="Snail Mail">
          <FormControlLabel
            value="Snail Mail"
            control={<Radio />}
            label={getLabel("Snail Mail", 100, "1+ years")}
          />
          <FormControlLabel
            value="Carrier Pigeon"
            control={<Radio />}
            label={getLabel("Carrier Pigeon", 500, "2-3 weeks")}
          />
          <FormControlLabel
            value="Other"
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
        />
      </Card>
    </div>
  );
};

export default ShippingAndPayment;
