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

const SearchOptions = () => {
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
            />
          </Grid>
          <Grid item>
            <SearchIcon color="primary" />
          </Grid>
        </Grid>
        <Grid item>
          <Typography style={{ fontWeight: "bold", marginTop: 10 }}>
            Filters
          </Typography>
        </Grid>
        <Grid item>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Option 1" />
            <FormControlLabel control={<Checkbox />} label="Option 2" />
          </FormGroup>
        </Grid>
        <Grid item>
          <Select value={10} fullWidth size="small">
            <MenuItem value={10}>Option 1</MenuItem>
            <MenuItem value={20}>Option 2</MenuItem>
            <MenuItem value={30}>Option 3</MenuItem>
          </Select>
        </Grid>
        <Grid item>
          <Typography>Range 1</Typography>
          <Slider defaultValue={50} valueLabelDisplay="auto" />
          <Typography>Range 2</Typography>
          <Slider defaultValue={50} valueLabelDisplay="auto" />
        </Grid>
      </Grid>
    </Card>
  );
};

export default SearchOptions;
