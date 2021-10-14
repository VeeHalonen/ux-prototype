import { Typography, Card } from "@mui/material";
import Category from "../components/Category";
import ProductThumbnail from "../components/ProductThumbnail";
import StyledLink from "../components/StyledLink";

const Products = () => {
  return (
    <div style={{ textAlign: "center" }}>
      {/* CATEGORIES */}
      <Typography paragraph variant="h5" textAlign="start">
        Categories
      </Typography>
      <div
        style={{
          marginTop: 20,
          marginBottom: 30,
        }}
      >
        {[...Array(8)].map((e, i) => {
          return <Category key={i} />;
        })}
      </div>
      <Card
        style={{
          margin: 40,
          marginTop: 0,
          marginBottom: 40,
          paddingTop: 8,
          paddingBottom: 8,
        }}
        color="primary"
      >
        <StyledLink name="All Categories" to="/categories" component="p" />
      </Card>
      {/* CLEARANCE OFFERS */}
      <Typography paragraph variant="h5" textAlign="start">
        Clearance Offers
      </Typography>
      <div
        style={{
          marginTop: 20,
          marginBottom: 30,
        }}
      >
        {[...Array(8)].map((e, i) => {
          return <ProductThumbnail key={i} discount={true} />;
        })}
      </div>
      <Card
        style={{
          margin: 40,
          marginTop: 0,
          marginBottom: 40,
          paddingTop: 8,
          paddingBottom: 8,
        }}
        color="primary"
      >
        <StyledLink name="More Offers" to="/clearance-items" component="p" />
      </Card>
    </div>
  );
};

export default Products;
