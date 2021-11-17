import { Grid, Button, Typography } from "@mui/material";
import ProductThumbnail from "../components/ProductThumbnail";
import SearchOptions from "../components/SearchOptions";
import StyledLink from "../components/StyledLink";

const Search = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} style={{ marginBottom: 10 }}>
        <Typography textAlign="start" variant="h5">
          <StyledLink to="/products" name="Products" component="span" noBold />
          <Typography variant="h5" component="span">
            {" › Search"}
          </Typography>
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <SearchOptions />
      </Grid>
      <Grid item xs={9} textAlign="center">
        <Typography variant="h5" paragraph textAlign="start">
          83 Results
        </Typography>
        <div style={{ textAlign: "center" }}>
          {[...Array(12)].map((e, i) => {
            return <ProductThumbnail key={i} />;
          })}
          <div style={{ marginTop: 20 }}>
            <Button variant="outlined" disabled>
              Load More
            </Button>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Search;
