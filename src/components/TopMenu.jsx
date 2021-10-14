import { Link, useLocation } from "react-router-dom";
import { Button, ButtonGroup } from "@mui/material";

const usePathname = () => {
  const location = useLocation();
  return location.pathname;
};
const TopMenu = () => {
  const route = usePathname();
  const activeColor = "primary"; // see theme.js
  const notActiveColor = "inherit";
  return (
    <div>
      <ButtonGroup variant="contained">
        <Button
          component={Link}
          to="/"
          // variant={route === "/" ? "contained" : "outlined"}
          color={route === "/" ? activeColor : notActiveColor}
          disableElevation
        >
          Home
        </Button>
        <Button
          component={Link}
          to="/products"
          // variant={route === "/products" ? "contained" : "outlined"}
          color={route === "/products" ? activeColor : notActiveColor}
        >
          Products
        </Button>
        <Button
          component={Link}
          to="/about"
          // variant={route === "/about" ? "contained" : "outlined"}
          color={route === "/about" ? activeColor : notActiveColor}
        >
          About
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default TopMenu;
