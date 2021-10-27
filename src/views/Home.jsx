import { Card, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  const bannerStyle = {
    width: "100%",
    fontSize: 20,
    background: "linear-gradient(to right, #607d8b, #a6a6a6, lightgray)",
    marginBottom: 15,
    padding: 40,
    paddingLeft: 90,
    paddingRight: 90,
    textAlign: "start",
  };
  const categoryTitleStyle = {
    fontWeight: "bold",
    color: "#263238",
  };
  const linkStyle = {
    textDecoration: "none",
    color: "unset",
  };
  return (
    <Grid
      container
      item
      direction="column"
      textAlign="center"
      spacing={1}
      style={{ marginTop: 50 }}
      xs={12}
      md={10}
    >
      <Grid item>
        <Link to="/clearance-items" style={linkStyle}>
          <Card style={bannerStyle} elevation="none">
            <Typography variant="h5" style={categoryTitleStyle}>
              OFFERS
            </Typography>
          </Card>
        </Link>
      </Grid>
      <Grid item>
        <Link to="/search" style={linkStyle}>
          <Card style={bannerStyle} elevation="none">
            <Typography variant="h5" style={categoryTitleStyle}>
              LATEST
            </Typography>
          </Card>
        </Link>
      </Grid>
      <Grid item>
        <Link to="/categories" style={linkStyle}>
          <Card style={bannerStyle} elevation="none">
            <Typography variant="h5" style={categoryTitleStyle}>
              PRODUCT CATEGORIES
            </Typography>
          </Card>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Home;
