import { Grid, Button, Typography } from "@mui/material";
import { useState, useContext } from "react";
import ProductThumbnail from "../components/ProductThumbnail";
import SearchOptions from "../components/SearchOptions";
import StyledLink from "../components/StyledLink";
import { GlobalStateContext } from "../helpers";

const Search = () => {
  const [filters, setFilters] = useState(null);
  const context = useContext(GlobalStateContext);
  const products = context?.globalState?.products || [];

  // Checks product against filters, returns true if product should be shown
  const passesFilters = (product) => {
    if (!filters) return true;
    // Name
    if (
      !product.productName
        .toLowerCase()
        .includes(filters.textSearch.toLowerCase())
    ) {
      return false;
    }
    // Discounted only?
    if (filters.discountedOnly && !product.discount) {
      return false;
    }
    // Latest only?
    if (filters.latestOnly && !product.latest) {
      return false;
    }
    // Price
    if (product.discount) {
      if (
        filters.priceRange[0] > product.price / 2 ||
        filters.priceRange[1] < product.price / 2
      )
        return false;
    } else if (
      filters.priceRange[0] > product.price ||
      filters.priceRange[1] < product.price
    ) {
      return false;
    }
    // Category
    if (filters.category !== "ALL" && filters.category !== product.category) {
      return false;
    }

    return true;
  };
  const productsAfterFilters = () => {
    return products.filter((p) => passesFilters(p));
  };
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
        <SearchOptions applyFilter={setFilters} />
      </Grid>
      <Grid item xs={9} textAlign="center">
        <Typography variant="h5" paragraph textAlign="start">
          {productsAfterFilters().length} Results
        </Typography>
        <div style={{ textAlign: "center" }}>
          {productsAfterFilters().map((p, i) => {
            return <ProductThumbnail key={i} product={p} />;
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
