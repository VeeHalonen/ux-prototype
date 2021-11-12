import { Typography, Card } from "@mui/material";
import Category from "../components/Category";
import ProductThumbnail from "../components/ProductThumbnail";
import StyledLink from "../components/StyledLink";
import { CATEGORIES } from "../helpers";

const Products = () => {
  return (
    <div style={{ textAlign: "center" }}>
      {/* PAGE TITLE */}
      <Typography
        paragraph
        variant="h4"
        textAlign="start"
        style={{ marginBottom: 30 }}
      >
        Products
      </Typography>
      {/* CATEGORIES */}
      <Typography paragraph variant="h5">
        Categories
      </Typography>
      <div
        style={{
          marginTop: 30,
          marginBottom: 50,
        }}
      >
        {CATEGORIES.map((c, i) => {
          return <Category key={i} category={c} />;
        })}
      </div>
      {/* CLEARANCE OFFERS */}
      <Typography paragraph variant="h5">
        Clearance Offers
      </Typography>
      <div
        style={{
          marginTop: 30,
          marginBottom: 30,
        }}
      >
        {[...Array(4)].map((e, i) => {
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
          width: "60%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        color="primary"
      >
        <StyledLink name="More Offers" to="/clearance-items" component="p" />
      </Card>
    </div>
  );
};

export default Products;
