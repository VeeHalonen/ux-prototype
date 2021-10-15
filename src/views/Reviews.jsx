import { Typography, Card } from "@mui/material";
import Review from "../components/Review";
import StyledLink from "../components/StyledLink";

const Reviews = () => {
  return (
    <Card style={{ padding: 50 }}>
      <Typography variant="h5" paragraph>
        Customer reviews for{" "}
        <StyledLink name="Product Name" to="/product" component="span" />
      </Typography>
      {[...Array(5)].map((e, i) => {
        return <Review key={i} />;
      })}
    </Card>
  );
};

export default Reviews;
