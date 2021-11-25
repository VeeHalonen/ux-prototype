import { Typography, Grid, Button, TextField } from "@mui/material";
import { getProductPrice } from "../helpers";
import StyledLink from "./StyledLink";

const ShoppingCartItem = ({ product, context }) => {
  const count = product.inCart;
  const removeFromCart = () => {
    context.dispatch({ type: "removeFromCart", product });
  };
  const onCountChange = (e) => {
    var value = parseInt(e.target.value);
    if (!value || value < 0) value = 0;
    product.inCart = value;
    context.dispatch({ type: "changeCount", product });
  };
  return (
    <div>
      <hr style={{ marginTop: 25, marginBottom: 25 }} />
      <Grid container justifyContent="space-between">
        <Grid container item xs={10}>
          <Grid container item>
            <div style={{ display: "inline-block", marginRight: 30 }}>
              <img
                id="logo"
                src="productImgThumbnail.jpg"
                alt="Product Name"
                width={140}
              />
            </div>
            <Grid item xs={9}>
              <StyledLink
                name={product.productName}
                to="/product"
                paragraph
                textAlign="start"
                variant="body2"
                product={product}
              />
              <Typography variant="body2" paragraph>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Ducimus vitae placeat voluptatum iusto obcaecati sed nemo magni
                dolore natus eaque!
              </Typography>
              <Typography variant="body2" paragraph>
                Natus dignissimos autem est et deserunt. Nemo placeat veniam
                voluptate?
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={2}
          container
          justifyContent="space-between"
          alignItems="end"
          direction="column"
        >
          <Typography textAlign="end" style={{ marginRight: 10 }}>
            <b>€{getProductPrice(product) * count}</b>
            <br />
            {count > 1 && "(€" + getProductPrice(product) + " x " + count + ")"}
          </Typography>
          <TextField
            label="Quantity"
            type="number"
            inputProps={{ min: 0, style: { textAlign: "center" } }}
            InputLabelProps={{
              shrink: true,
            }}
            style={{ width: 50 }}
            value={count}
            onChange={onCountChange}
            variant="standard"
          />
          <Button
            variant="contained"
            size="small"
            color="secondary"
            style={{ width: 100 }}
            onClick={removeFromCart}
          >
            Remove
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default ShoppingCartItem;
