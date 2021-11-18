import { Button, Typography } from "@mui/material";
import { useContext } from "react";
import ProductThumbnail from "../components/ProductThumbnail";
import StyledLink from "../components/StyledLink";
import { GlobalStateContext } from "../helpers";

const ClearanceItems = () => {
  const context = useContext(GlobalStateContext);
  const products = context?.globalState?.products || [];
  return (
    <div style={{ textAlign: "center" }}>
      <Typography textAlign="start" variant="h5">
        <StyledLink to="/products" name="Products" component="span" noBold />
        <Typography variant="h5" component="span">
          {" › Offers"}
        </Typography>
      </Typography>
      <div
        style={{
          marginTop: 20,
          marginBottom: 30,
        }}
      >
        {products.map((p, i) => {
          if (p.discount)
            return <ProductThumbnail key={i} discount={true} product={p} />;
          else return null;
        })}
      </div>
      <Button variant="outlined" disabled>
        Load More
      </Button>
    </div>
  );
};

export default ClearanceItems;
