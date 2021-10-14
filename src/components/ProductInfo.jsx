import { Typography, Rating, Grid } from "@mui/material";
import StyledLink from "./StyledLink";

const ProductInfo = () => {
  return (
    <div>
      <Grid item container justifyContent="space-between">
        <Grid item>
          <Typography variant="h5" gutterBottom style={{ marginTop: 10 }}>
            Product Name
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h4">€100</Typography>
        </Grid>
      </Grid>
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
    </div>
  );
};

export default ProductInfo;
