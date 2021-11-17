import { Typography, Rating, Grid, TextField } from "@mui/material";
import { getProductPrice } from "../helpers";
import AddToCartButton from "./AddToCartButton";
import StyledLink from "./StyledLink";

const ProductInfo = ({ product }) => {
  const property = (title, value) => {
    return (
      <Typography variant="caption" paragraph>
        <b>{title}</b>: {value}
      </Typography>
    );
  };
  return (
    <Grid item container>
      <Grid item container justifyContent="space-between">
        <Grid item>
          <Typography variant="h5" gutterBottom style={{ marginTop: 10 }}>
            {product.productName}
          </Typography>
          <Rating value={product.rating} readOnly />
          <div style={{ marginLeft: 3, marginBottom: 30 }}>
            <StyledLink
              name="Read Reviews"
              to="/reviews"
              component="p"
              paragraph
              textAlign="start"
              variant="body2"
            />
          </div>
          {property("Type", product.category + " fan")}
          {property("Coefficient of Performance", product.COP + ".0")}
          {property("Noise Level", product.soundLevel)}
          {property("Size", product.size)}
          {property("Speed Settings", product.speedSettings)}
        </Grid>
        <Grid
          item
          container
          justify="flex-end"
          direction="column"
          xs="auto"
          spacing={3}
        >
          <Grid item>
            {!product.discount && (
              <Typography variant="h4">€{product.price}</Typography>
            )}
            {product.discount && (
              <Typography variant="h4">
                <strike>€{product.price}</strike>
                <br />
                <Typography variant="span" color="error">
                  €{getProductPrice(product)}
                </Typography>
              </Typography>
            )}
          </Grid>
          <Grid item>
            <Typography component="span" variant="button">
              Quantity:
            </Typography>
            <TextField
              type="number"
              inputProps={{ min: 1, style: { textAlign: "center" } }}
              InputLabelProps={{
                shrink: true,
              }}
              style={{ width: 50 }}
              defaultValue={1}
              variant="standard"
            />
          </Grid>
          <Grid item>
            <AddToCartButton product={product} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductInfo;
