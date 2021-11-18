import { useEffect, useState } from "react";
import {
  Grid,
  TextField,
  Card,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  MenuItem,
  Select,
  Slider,
  Button,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {
  CATEGORIES,
  // MATERIALS,
  // COLORS,
  // FEATURES,
  // SIZES,
  // POWER_CONSUMPTION,
  // SOUND_LEVEL,
  MAX_PRICE,
} from "../helpers";

const DEFAULT_FILTERS = {
  textSearch: "",
  priceRange: [0, MAX_PRICE],
  category: "ALL",
  discountedOnly: false,
};

const SearchOptions = ({ applyFilter }) => {
  // Read query parameters
  const params = new URLSearchParams(window.location.search);
  const initialCategory = params.get("category") || DEFAULT_FILTERS.category;

  const [textSearch, setTextSearch] = useState(DEFAULT_FILTERS.textSearch);
  const [priceRange, setPriceRange] = useState(DEFAULT_FILTERS.priceRange);
  const [category, setCategory] = useState(initialCategory);
  const [discountedOnly, setDiscountedOnly] = useState(
    DEFAULT_FILTERS.discountedOnly
  );

  // Trigger filter on mount
  useEffect(() => {
    triggerFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePriceRangeChange = (event, newValue) => {
    setPriceRange(newValue);
  };
  const title = (title) => {
    return (
      <Typography style={{ fontWeight: "bold", marginTop: 10 }}>
        {title}
      </Typography>
    );
  };
  const rangeSlider = (value, min, max, onChange) => {
    return (
      <Slider
        style={{ marginLeft: "10px", width: "90%" }}
        value={value}
        onChange={onChange}
        valueLabelDisplay="off"
        min={min}
        max={max}
      />
    );
  };
  const select = (VALUES, value, onChangeFunction) => {
    return (
      <Select
        value={value}
        fullWidth
        size="small"
        onChange={(e) => {
          onChangeFunction(e.target.value);
        }}
      >
        <MenuItem value="ALL">ALL</MenuItem>
        {VALUES.map((c) => {
          return (
            <MenuItem value={c} key={c}>
              {c}
            </MenuItem>
          );
        })}
      </Select>
    );
  };
  const getFilters = () => {
    return {
      textSearch,
      priceRange,
      category,
      discountedOnly,
    };
  };
  const triggerFilter = () => {
    applyFilter(getFilters());
  };
  const resetFilters = () => {
    // Set values
    setTextSearch(DEFAULT_FILTERS.textSearch);
    setPriceRange(DEFAULT_FILTERS.priceRange);
    setCategory(DEFAULT_FILTERS.category);
    setDiscountedOnly(DEFAULT_FILTERS.setDiscountedOnly);
    // Send to parent
    applyFilter(DEFAULT_FILTERS);
  };
  return (
    <Card style={{ padding: 15, width: 210 }}>
      <Grid container spacing={2} direction="column">
        <Grid item>{title("Search Filters")}</Grid>
        <Grid container item alignItems="center" spacing={1}>
          <Grid item>
            <TextField
              placeholder="Search..."
              variant="outlined"
              size="small"
              style={{ width: 140 }}
              value={textSearch}
              onChange={(e) => setTextSearch(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  triggerFilter();
                }
              }}
            />
            <IconButton size="small" onClick={triggerFilter}>
              <SearchIcon color="primary" />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item>{title("Category")}</Grid>
        <Grid item>{select(CATEGORIES, category, setCategory)}</Grid>
        <Grid item>
          {/* Price Range */}
          <Typography>
            <b>Price: </b> {priceRange[0] + "-" + priceRange[1]} €
          </Typography>
          {rangeSlider(priceRange, 0, MAX_PRICE, handlePriceRangeChange)}
          {/* TODO: */}
          {/* <Typography>Range 2</Typography>
          <Slider defaultValue={50} valueLabelDisplay="auto" /> */}
        </Grid>
        {/* Discounted Only */}
        <Grid item>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  value={discountedOnly}
                  onChange={(e) => setDiscountedOnly(e.target.checked)}
                />
              }
              label="Discounted Only"
            />
          </FormGroup>
        </Grid>
        {/* Buttons */}
        <Grid item>
          <Button variant="contained" fullWidth onClick={triggerFilter}>
            Search
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" fullWidth onClick={resetFilters}>
            Reset Filters
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default SearchOptions;
