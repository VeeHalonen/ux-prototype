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
          <img
            src="bannerOffers.jpeg"
            alt="Offers"
            width="100%"
            height="100%"
            style={{ maxWidth: "1000px" }}
          />
        </Link>
      </Grid>
      <Grid item>
        <Link to="/search">
          <img
            src="bannerLatest.jpeg"
            alt="Latest"
            width="100%"
            height="100%"
            style={{ maxWidth: "1000px" }}
          />
        </Link>
      </Grid>
      <Grid item>
        <Link to="/categories">
          <img
            src="bannerCategories.jpeg"
            alt="Categories"
            width="100%"
            height="100%"
            style={{ maxWidth: "1000px" }}
          />
        </Link>
      </Grid>
    </Grid>
  );
};

export default Home;
