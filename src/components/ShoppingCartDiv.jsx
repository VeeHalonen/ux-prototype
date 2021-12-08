import { useState } from "react";
import {
  Select,
  FormControl,
  MenuItem,
  Grid,
  Badge,
  IconButton,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import Toast from "./Toast";

const ShoppingCartDiv = ({ count }) => {
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  return (
    <Grid container alignItems="center" spacing={2} style={{ marginRight: 25 }}>
      <Toast
        message={toastMessage}
        open={showToast}
        onClose={() => setShowToast(false)}
      />
      <Grid item>
        <Link to="/shopping-cart">
          <IconButton>
            <Badge badgeContent={count} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Link>
      </Grid>
      <Grid item>
        <Grid container item direction="column">
          <FormControl variant="outlined" size="small">
            <Select
              size="small"
              defaultValue="en"
              onChange={() => {
                setToastMessage("Imagine the language changed!");
                setShowToast(true);
              }}
            >
              <MenuItem value="en">EN</MenuItem>
              <MenuItem value="fi">FI</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" size="small">
            <Select
              size="small"
              defaultValue="EUR"
              onChange={() => {
                setToastMessage("Imagine the currency changed!");
                setShowToast(true);
              }}
            >
              <MenuItem value="EUR">€</MenuItem>
              <MenuItem value="USD">$</MenuItem>
              <MenuItem value="GBP">£</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ShoppingCartDiv;
