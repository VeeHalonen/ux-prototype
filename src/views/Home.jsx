import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Grid
      container
      direction="column"
      textAlign="center"
      spacing={1}
      style={{ marginTop: 50 }}
    >
      {/* <Grid item textAlign="start">
        <Typography variant="h4">Home</Typography>
      </Grid> */}
      <Grid item>
        <Link to="/clearance-items">
          <img id="logo" src="bannerOffers.png" alt="Latest" />
        </Link>
      </Grid>
      <Grid item>
        <Link to="/search">
          <img id="logo" src="bannerLatest.png" alt="Latest" />
        </Link>
      </Grid>
      <Grid item>
        <Link to="/categories">
          <img id="logo" src="bannerCategories.png" alt="Latest" />
        </Link>
      </Grid>
    </Grid>
  );
};

export default Home;
