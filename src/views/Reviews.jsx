import { Typography, Card } from "@mui/material";
import { useContext } from "react";
import Review from "../components/Review";
import StyledLink from "../components/StyledLink";
import {
  getRandomProduct,
  GlobalStateContext,
  getLastProduct,
} from "../helpers";

const Reviews = () => {
  const context = useContext(GlobalStateContext);
  const product =
    getLastProduct(context?.globalState?.products) || getRandomProduct(); // TODO: ?
  return (
    <Card style={{ padding: 50 }}>
      <Typography variant="h5" paragraph>
        Customer reviews for{" "}
        <StyledLink name={product.productName} to="/product" component="span" />
      </Typography>
      {product.reviews.map((r, i) => {
        return <Review key={i} review={r} />;
      })}
    </Card>
  );
};

export default Reviews;
