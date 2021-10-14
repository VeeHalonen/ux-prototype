import { Typography } from "@mui/material";
import Review from "../components/Review";
import StyledLink from "../components/StyledLink";

const Reviews = () => {
  return (
    <div>
      <Typography variant="h5" paragraph>
        Customer reviews for{" "}
        <StyledLink name="Product Name" to="/product" component="span" />
      </Typography>
      {[...Array(5)].map((e, i) => {
        return <Review key={i} />;
      })}
    </div>
  );
};

export default Reviews;
