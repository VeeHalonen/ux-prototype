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
  latestOnly: false,
};

const SearchOptions = ({ applyFilter }) => {
  // Read query parameters
  const params = new URLSearchParams(window.location.search);
  const initialCategory = params.get("category") || DEFAULT_FILTERS.category;
  const initialLatestOnly = params.get("latestOnly")
    ? true
    : DEFAULT_FILTERS.latestOnly;
  const initialText = params.get("text") || DEFAULT_FILTERS.textSearch;

  const [textSearch, setTextSearch] = useState(initialText);
  const [priceRange, setPriceRange] = useState(DEFAULT_FILTERS.priceRange);
  const [acceptedPriceRange, setAcceptedPriceRange] = useState(
    DEFAULT_FILTERS.priceRange
  );
  const [category, setCategory] = useState(initialCategory);
  const [discountedOnly, setDiscountedOnly] = useState(
    DEFAULT_FILTERS.discountedOnly
  );
  const [latestOnly, setLatestOnly] = useState(initialLatestOnly);

  // Trigger filter on mount
  useEffect(() => {
    triggerFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Watch for state changes to trigger filter automatically
  useEffect(() => {
    triggerFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, discountedOnly, latestOnly]);

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
  const rangeSlider = (value, min, max, stepSize, onChange) => {
    return (
      <Slider
        style={{ marginLeft: "10px", width: "90%" }}
        value={value}
        onChange={onChange}
        valueLabelDisplay="off"
        min={min}
        max={max}
        step={stepSize}
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
      latestOnly,
    };
  };
  const triggerFilter = () => {
    setAcceptedPriceRange(priceRange);
    applyFilter(getFilters());
  };
  const resetFilters = () => {
    // Set values
    setTextSearch(DEFAULT_FILTERS.textSearch);
    setPriceRange(DEFAULT_FILTERS.priceRange);
    setAcceptedPriceRange(DEFAULT_FILTERS.priceRange);
    setCategory(DEFAULT_FILTERS.category);
    setDiscountedOnly(DEFAULT_FILTERS.discountedOnly);
    setLatestOnly(DEFAULT_FILTERS.latestOnly);
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
          {rangeSlider(priceRange, 0, MAX_PRICE, 10, handlePriceRangeChange)}
          {/* TODO: */}
          {/* <Typography>Range 2</Typography>
          <Slider defaultValue={50} valueLabelDisplay="auto" /> */}
          <div style={{ margin: 8, marginLeft: 20, marginRight: 20 }}>
            <Button
              variant="contained"
              size="small"
              onClick={() => {
                triggerFilter();
              }}
              fullWidth
              disabled={priceRange === acceptedPriceRange}
            >
              Set Range
            </Button>
          </div>
        </Grid>
        {/* Discounted Only */}
        <Grid item>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={discountedOnly}
                  onChange={(e) => setDiscountedOnly(e.target.checked)}
                />
              }
              label="Discounted Only"
            />
          </FormGroup>
          {/* Neew Only */}
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={latestOnly}
                  onChange={(e) => setLatestOnly(e.target.checked)}
                />
              }
              label="Latest Only"
            />
          </FormGroup>
        </Grid>
        {/* Reset Button */}
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
