import { Button, Typography } from "@mui/material";
import ProductThumbnail from "../components/ProductThumbnail";
import StyledLink from "../components/StyledLink";

const ClearanceItems = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Typography textAlign="start" variant="h5">
        <StyledLink to="/products" name="Products" component="span" noBold />
        <Typography variant="h5" component="span">
          {" › Clearance Offers"}
        </Typography>
      </Typography>
      <div
        style={{
          marginTop: 20,
          marginBottom: 30,
        }}
      >
        {[...Array(20)].map((e, i) => {
          return <ProductThumbnail key={i} discount={true} />;
        })}
      </div>
      <Button variant="outlined">Load More</Button>
    </div>
  );
};

export default ClearanceItems;
