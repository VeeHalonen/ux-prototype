import { Typography, Card, Rating } from "@mui/material";
import { Link } from "react-router-dom";
import { getRandomProduct } from "../helpers";
import AddToCartButton from "./AddToCartButton";
import StyledLink from "./StyledLink";

// Optional prop: discount (boolean) - shows discount info
const ProductThumbnail = ({ discount, product }) => {
  const width = 200;
  const padding = 10;
  product = getRandomProduct(); // TODO: delete?
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
            src="productImgThumbnail.jpg"
            alt="Product Name"
            width={width - padding * 2}
          />
        </Link>
        <StyledLink to="/product" name={product.productName} component="p" />
        <Rating value={product.rating} size="small" readOnly />
        <Typography variant="body2" textAlign="center" paragraph>
          {product.shortInfo}
        </Typography>
        {!discount && (
          <Typography variant="h5" textAlign="center" paragraph>
            €{product.price}
          </Typography>
        )}
        {discount && (
          <Typography variant="h5" textAlign="center" paragraph>
            <strike>€{product.price}</strike> →{" "}
            <Typography variant="span" color="error">
              €{Math.floor(product.price / 2)}
            </Typography>
          </Typography>
        )}
        <AddToCartButton product={product} />
      </Card>
    </div>
  );
};

export default ProductThumbnail;
