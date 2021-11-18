import { Link, useLocation, useHistory } from "react-router-dom";
import { Button, ButtonGroup, MenuItem, Paper } from "@mui/material";
import { useState } from "react";

const usePathname = () => {
  const location = useLocation();
  return location.pathname;
};
const TopMenu = () => {
  const route = usePathname();
  const history = useHistory();
  const [productDropdown, setProductDropdown] = useState(false);
  const [productDropdownHovering, setProductDropdownHovering] = useState(false);
  const activeColor = "primary"; // see theme.js
  const notActiveColor = "inherit";
  const menuItemStyle = { fontSize: 13 };

  const handleOpen = () => {
    setProductDropdown(true);
  };
  const handleClose = () => {
    setProductDropdown(false);
    setProductDropdownHovering(false);
  };
  const handleHoverDropdownEnter = () => {
    setProductDropdownHovering(true);
  };
  const handleHoverDropdownLeave = () => {
    setProductDropdownHovering(false);
  };
  const handleClickProducts = () => {
    // If dropdown is not currently being hovered over, open products page
    if (!productDropdownHovering) {
      history.push("/products");
      handleClose();
    }
  };
  return (
    <div>
      <ButtonGroup variant="contained">
        {/* HOME */}
        <Button
          component={Link}
          to="/"
          color={route === "/" ? activeColor : notActiveColor}
          disableElevation
        >
          Home
        </Button>
        {/* PRODUCTS DROPDOWN */}
        <Button
          onMouseOver={handleOpen}
          onMouseLeave={handleClose}
          onClick={handleClickProducts}
          sx={{
            borderRadius: 0,
            borderRight: "1px solid",
            borderColor: "primary.dark",
          }}
          // All of these routes highlight Products
          color={
            [
              "/products",
              "/categories",
              "/clearance-items",
              "/search",
            ].includes(route)
              ? activeColor
              : notActiveColor
          }
        >
          {" "}
          Products
          {productDropdown && (
            <Paper
              onMouseOver={handleHoverDropdownEnter}
              onMouseLeave={handleHoverDropdownLeave}
              style={{ position: "absolute", zIndex: "1000", top: 37, left: 0 }}
              square
            >
              {/* Search */}
              <MenuItem
                style={menuItemStyle}
                component={Link}
                to="/search"
                // selected={route === "/search"}
                onClick={handleClose}
              >
                Search
              </MenuItem>
              {/* Categories */}
              <MenuItem
                style={menuItemStyle}
                component={Link}
                to="/categories"
                // selected={route === "/categories"}
                onClick={handleClose}
              >
                Categories
              </MenuItem>
              {/* Clearance Offers */}
              <MenuItem
                style={menuItemStyle}
                component={Link}
                to="/clearance-items"
                // selected={route === "/clearance-items"}
                onClick={handleClose}
              >
                Offers
              </MenuItem>
            </Paper>
          )}
        </Button>
        {/* ABOUT */}
        <Button
          component={Link}
          to="/about"
          color={route === "/about" ? activeColor : notActiveColor}
        >
          About
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default TopMenu;
