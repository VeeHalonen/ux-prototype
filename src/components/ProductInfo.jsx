import { Typography, Rating, Grid, Button } from "@mui/material";
import StyledLink from "./StyledLink";

const ProductInfo = () => {
  return (
    <Grid item container>
      <Grid item container justifyContent="space-between">
        <Grid item>
          <Typography variant="h5" gutterBottom style={{ marginTop: 10 }}>
            Product Name
          </Typography>
          <Rating value={3} readOnly />
          <div style={{ marginLeft: 3 }}>
            <StyledLink
              name="Read Reviews"
              to="/reviews"
              component="p"
              paragraph
              textAlign="start"
              variant="body2"
            />
          </div>

          <Typography paragraph>Some key details here</Typography>
          <Typography paragraph>- cooling</Typography>
          <Typography paragraph>- noise level</Typography>
          <Typography paragraph>- dimensions</Typography>
          <Typography paragraph>- ...</Typography>
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
            <Typography variant="h4">€100</Typography>
          </Grid>
          <Grid item>
            <Button variant="contained">Add to Cart</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductInfo;
