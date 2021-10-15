import { Typography, Grid, Button } from "@mui/material";

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
                src="productImgThumbnail.png"
                alt="Product Name"
                width={150}
              />
            </div>
            <Grid item xs={9}>
              <Typography
                variant="body2"
                paragraph
                style={{ fontWeight: "bold" }}
              >
                Product Name
              </Typography>
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
          <Typography textAlign="end" style={{ fontWeight: "bold" }}>
            €50
          </Typography>
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
