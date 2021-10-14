import { Typography, Card, Rating, Button } from "@mui/material";
import { Link } from "react-router-dom";
import StyledLink from "./StyledLink";

// Optional prop: discount (boolean) - shows discount info
const ProductThumbnail = (props) => {
  const width = 200;
  const padding = 10;
  return (
    <div
      style={{
        width,
        margin: 10,
        display: "inline-block",
        textAlign: "center",
      }}
    >
      <Card style={{ padding, paddingBottom: 20 }}>
        <Link to="/product">
          <img
            id="logo"
            src="productImgThumbnail.png"
            alt="Product Name"
            width={width - padding * 2}
          />
        </Link>
        <StyledLink to="/product" name="Product Name" component="p" />
        <Rating value={3} size="small" readOnly />
        <Typography variant="body2" textAlign="center">
          Some more information
        </Typography>
        <Typography variant="body2" textAlign="center" paragraph>
          About the product
        </Typography>
        {!props.discount && (
          <Typography variant="h5" textAlign="center" paragraph>
            €100
          </Typography>
        )}
        {props.discount && (
          <Typography variant="h5" textAlign="center" paragraph>
            <strike>€100</strike> →{" "}
            <Typography variant="span" color="error">
              €50
            </Typography>
          </Typography>
        )}

        <Button variant="contained" size="small">
          Add to Cart
        </Button>
      </Card>
    </div>
  );
};

export default ProductThumbnail;
