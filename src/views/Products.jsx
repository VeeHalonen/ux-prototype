import { Typography } from "@mui/material";
import { useContext } from "react";
import Category from "../components/Category";
import ProductThumbnail from "../components/ProductThumbnail";
import StyledLink from "../components/StyledLink";
import { CATEGORIES, GlobalStateContext } from "../helpers";

const Products = () => {
  const context = useContext(GlobalStateContext);
  const products = context?.globalState?.products || [];
  const discounts = products.filter((p) => p.discount).slice(0, 5); // first five discounted
  const latest = products.filter((p) => p.latest).slice(0, 5); // first five latest

  // const cardStyle = {
  //   margin: 40,
  //   marginTop: 0,
  //   marginBottom: 60,
  //   padding: 100,
  //   paddingTop: 8,
  //   paddingBottom: 8,
  //   // width: "50%",
  //   display: "inline-block",
  //   marginLeft: "auto",
  //   marginRight: "auto",
  //   // backgroundColor: "#ededed",
  // };
  const headerStyle = { backgroundColor: "white", padding: 8 };
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
      <div style={headerStyle}>
        <StyledLink to={"/categories"} name="Categories" variant="h5" />
      </div>
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
      {/* NEW */}
      <div style={headerStyle}>
        <StyledLink
          to={"/search?latestOnly=true"}
          name="New Items"
          variant="h5"
        />
      </div>
      <div
        style={{
          marginTop: 30,
          marginBottom: 30,
        }}
      >
        {latest.map((p, i) => {
          return <ProductThumbnail key={i} product={p} />;
        })}
      </div>
      {/* <Card style={cardStyle} color="primary">
        <StyledLink
          name="More New Items"
          to="/search?latestOnly=true"
          component="p"
        />
      </Card> */}
      {/* OFFERS */}
      <div style={headerStyle}>
        <StyledLink to={"/clearance-items"} name="Offers" variant="h5" />
      </div>
      <div
        style={{
          marginTop: 30,
          marginBottom: 30,
        }}
      >
        {discounts.map((p, i) => {
          return <ProductThumbnail key={i} discount={true} product={p} />;
        })}
      </div>
      {/* <Card style={cardStyle} color="primary">
        <StyledLink name="More Offers" to="/clearance-items" component="p" />
      </Card> */}
    </div>
  );
};

export default Products;
