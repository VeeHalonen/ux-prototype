import { useContext, useEffect } from "react";
import { GlobalStateContext } from "../helpers";
import { Typography, Card } from "@mui/material";
import PrevNextButtons from "../components/PrevNextButtons";
import ShoppingCartStepper from "../components/ShoppingCartStepper";

const OrderReceived = () => {
  const context = useContext(GlobalStateContext);
  useEffect(() => {
    context.dispatch({ type: "emptyCart" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <ShoppingCartStepper step={4} />
      <Card style={{ padding: 50 }}>
        <Typography variant="h5" style={{ marginBottom: 50 }} paragraph>
          Order Received!
        </Typography>
        <Typography paragraph style={{ fontWeight: "bold", marginBottom: 40 }}>
          Order Number: #{Math.floor(Math.random() * 100000000)}
        </Typography>
        <Typography paragraph style={{ marginBottom: 40 }}>
          A confirmation has been sent to your email. Thank you for being a fan!
        </Typography>
        <PrevNextButtons nextLink="/" nextTitle="Back to Home" />
      </Card>
    </div>
  );
};

export default OrderReceived;
