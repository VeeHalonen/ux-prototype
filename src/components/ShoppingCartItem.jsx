import { Typography, Grid, Button, TextField } from "@mui/material";
import StyledLink from "./StyledLink";

const ShoppingCartItem = () => {
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
                name="Product Name"
                to="/product"
                paragraph
                textAlign="start"
                variant="body2"
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
          <Typography
            textAlign="end"
            style={{ fontWeight: "bold", marginRight: 10 }}
          >
            €50
          </Typography>
          <TextField
            label="Amount"
            type="number"
            inputProps={{ min: 0, style: { textAlign: "center" } }}
            InputLabelProps={{
              shrink: true,
            }}
            style={{ width: 50 }}
            defaultValue={1}
            variant="standard"
          />
          <Button
            variant="contained"
            size="small"
            color="secondary"
            style={{ width: 100 }}
          >
            Remove
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default ShoppingCartItem;
