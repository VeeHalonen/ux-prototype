import {
  Grid,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useState, useContext } from "react";
import ProductThumbnail from "../components/ProductThumbnail";
import SearchOptions from "../components/SearchOptions";
import StyledLink from "../components/StyledLink";
import { getProductPrice, GlobalStateContext } from "../helpers";

const Search = () => {
  const [filters, setFilters] = useState(null);
  const [sortBy, setSortBy] = useState("Relevance");
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
  const productsAfterFiltersAndSorting = () => {
    /* Assign sorting function */
    let sortFunction = () => true;

    // (Relevance is a lie)
    // Alphabetical by name
    if (sortBy === "A-Z") {
      sortFunction = (a, b) => {
        if (a.productName < b.productName) {
          return -1;
        }
        if (a.productName > b.productName) {
          return 1;
        }
        return 0;
      };
    }
    // Prize (ascending)
    else if (sortBy === "Cheapest") {
      sortFunction = (a, b) => {
        return getProductPrice(a) - getProductPrice(b);
      };
    }
    // Price (descending)
    else if (sortBy === "Most Expensive") {
      sortFunction = (a, b) => {
        return getProductPrice(b) - getProductPrice(a);
      };
    }
    // Rating (descending)
    else if (sortBy === "Rating") {
      sortFunction = (a, b) => {
        return b.rating - a.rating;
      };
    }
    /* Return sort result */
    return productsAfterFilters().sort(sortFunction);
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
        <Grid item container xs={12} justifyContent="space-between">
          <Grid item>
            <Typography variant="h5" paragraph textAlign="start">
              {productsAfterFiltersAndSorting().length} Results
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <FormControl size="small">
              <InputLabel>Sort By</InputLabel>
              <Select
                style={{ minWidth: 150 }}
                value={sortBy}
                label="Sort By"
                fullWidth
                onChange={(e) => {
                  setSortBy(e.target.value);
                }}
              >
                <MenuItem value="Relevance">Relevance</MenuItem>
                <MenuItem value="A-Z">A-Z</MenuItem>
                <MenuItem value="Cheapest">Cheapest</MenuItem>
                <MenuItem value="Most Expensive">Most Expensive</MenuItem>
                <MenuItem value="Rating">Best Rated</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <div style={{ textAlign: "center" }}>
          {productsAfterFiltersAndSorting().map((p, i) => {
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
