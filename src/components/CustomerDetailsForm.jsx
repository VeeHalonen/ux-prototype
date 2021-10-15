import {
  FormGroup,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

const CustomerDetailsForm = () => {
  const spacing = { marginTop: 5, marginBottom: 5 };
  return (
    <FormGroup style={{ width: 300 }}>
      <TextField
        variant="outlined"
        size="small"
        label="Full Name"
        fullWidth
        style={spacing}
      />
      <TextField
        variant="outlined"
        size="small"
        label="Address"
        fullWidth
        style={spacing}
      />
      <TextField
        variant="outlined"
        size="small"
        label="City"
        fullWidth
        style={spacing}
      />
      <TextField
        variant="outlined"
        size="small"
        label="Postal Code"
        fullWidth
        style={spacing}
      />
      <FormControl size="small" fullWidth style={spacing}>
        <InputLabel>Country</InputLabel>
        <Select defaultValue="" label="Country" fullWidth>
          <MenuItem value="Finland">Finland</MenuItem>
          <MenuItem value="USA">USA</MenuItem>
          <MenuItem value="Zimbabwe">Zimbabwe</MenuItem>
        </Select>
      </FormControl>
      <TextField
        variant="outlined"
        size="small"
        label="Phone Number"
        fullWidth
        style={spacing}
      />
      <TextField
        variant="outlined"
        size="small"
        label="Email Address"
        fullWidth
        style={spacing}
      />
    </FormGroup>
  );
};

export default CustomerDetailsForm;
