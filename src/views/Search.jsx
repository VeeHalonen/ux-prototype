import { Grid, Button, Typography } from "@mui/material";
import ProductThumbnail from "../components/ProductThumbnail";
import SearchOptions from "../components/SearchOptions";

const Search = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <SearchOptions />
      </Grid>
      <Grid item xs={9}>
        <Typography variant="h5" paragraph>
          83 Results
        </Typography>
        {[...Array(15)].map((e, i) => {
          return <ProductThumbnail key={i} />;
        })}
        <div style={{ textAlign: "center", marginTop: 20 }}>
          <Button variant="outlined">Load More</Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default Search;
