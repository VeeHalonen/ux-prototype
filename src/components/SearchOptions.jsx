import { useState } from "react";
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

const SearchOptions = () => {
  const [textSearch, setTextSearch] = useState("");
  const [priceRange, setPriceRange] = useState([0, MAX_PRICE]);
  const [category, setCategory] = useState("ALL");
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
  // const getFilters = () => {
  //   return {
  //     textSearch,
  //     priceRange,
  //   };
  // };
  return (
    <Card style={{ padding: 15, width: 210 }}>
      <Grid container spacing={2} direction="column">
        <Grid container item alignItems="center" spacing={1}>
          <Grid item>
            <TextField
              placeholder="Search..."
              variant="outlined"
              size="small"
              style={{ width: 140 }}
              value={textSearch}
              onChange={(e) => setTextSearch(e.target.value)}
            />
          </Grid>
          <Grid item>
            <SearchIcon color="primary" />
          </Grid>
        </Grid>
        <Grid item>{title("Filters")}</Grid>
        <Grid item>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Option 1" />
            <FormControlLabel control={<Checkbox />} label="Option 2" />
          </FormGroup>
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
          <Typography>Range 2</Typography>
          <Slider defaultValue={50} valueLabelDisplay="auto" />
        </Grid>
      </Grid>
    </Card>
  );
};

export default SearchOptions;
