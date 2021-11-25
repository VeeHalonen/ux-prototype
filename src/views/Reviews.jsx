import { Typography, Card } from "@mui/material";
import Review from "../components/Review";
import StyledLink from "../components/StyledLink";
import { getRandomProduct } from "../helpers";

const Reviews = () => {
  const product =
    JSON.parse(localStorage.getItem("product")) || getRandomProduct(); // TODO: ?
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
