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
      <Grid item>
        <Link to="/clearance-items">
          <img src="bannerOffers.png" alt="Offers" />
        </Link>
      </Grid>
      <Grid item>
        <Link to="/search">
          <img src="bannerLatest.png" alt="Latest" />
        </Link>
      </Grid>
      <Grid item>
        <Link to="/categories">
          <img src="bannerCategories.png" alt="Categories" />
        </Link>
      </Grid>
    </Grid>
  );
};

export default Home;
