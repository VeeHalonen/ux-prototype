import "./App.css";
import { theme } from "./theme";
import Home from "./views/Home";
import About from "./views/About";
import ShoppingCart from "./views/ShoppingCart";
import ClearanceItems from "./views/ClearanceItems";
import Categories from "./views/Categories";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ThemeProvider } from "@mui/system";
import TopMenu from "./components/TopMenu";
import { TextField, Grid, CssBaseline } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Products from "./views/Products";
import Search from "./views/Search";
import ShoppingCartDiv from "./components/ShoppingCartDiv";
import { useState } from "react";
import ProductPage from "./views/ProductPage";
import Reviews from "./views/Reviews";
import OrderSummary from "./views/OrderSummary";
import ShippingAndPayment from "./views/ShippingAndPayment";
import OrderConfirmation from "./views/OrderConfirmation";
import OrderReceived from "./views/OrderReceived";

// Add routes:
// 1. Add the page component in the "views" folder
// 2. Give it a URL in the <Switch> below (put it above the home route!)
// 3. Link to route anywhere:
// import { Link } from "react-router-dom";
// <Link to="/some-route">ClickMe</Link>

function App() {
  const [shoppingCartItems, setShoppingCartItems] = useState(2);
  const addToCart = () => {
    setShoppingCartItems(shoppingCartItems + 1);
  };
  return (
    <div className="App">
      <Router
        // onAdd={addToCart}
        render={(props) => <Search {...props} onAdd={addToCart} />}
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {/* Top part of layout */}
          <Grid container id="topDiv" alignItems="center">
            <Grid
              item
              style={{
                backgroundColor: "#a6a6a6",
                marginBottom: 10,
                padding: 7,
                paddingBottom: 3,
              }}
              xs={12}
              md={10}
            >
              <Link to="/" style={{ width: "100%" }}>
                <img
                  id="logo"
                  src="logo.jpg"
                  alt="Fans Only Home"
                  style={{ width: "100%" }}
                />
              </Link>
            </Grid>
            <Grid item>
              <ShoppingCartDiv count={shoppingCartItems} />
            </Grid>
          </Grid>
          <div id="navDiv">
            <TopMenu />
            <div>
              <Grid container alignItems="center" spacing={1}>
                <Grid item>
                  <TextField
                    placeholder="Search..."
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid item>
                  <Link to="/search">
                    <SearchIcon color="primary" />
                  </Link>
                </Grid>
              </Grid>
            </div>
          </div>
          {/* Pages (changing content, don't add non-router code here) */}
          <div>
            {/* ROUTES */}
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/products">
                <Products />
              </Route>
              <Route path="/search">
                <Search />
              </Route>
              <Route path="/shopping-cart">
                <ShoppingCart />
              </Route>
              <Route path="/clearance-items">
                <ClearanceItems />
              </Route>
              <Route path="/categories">
                <Categories />
              </Route>
              <Route path="/product">
                <ProductPage />
              </Route>
              <Route path="/reviews">
                <Reviews />
              </Route>
              <Route path="/order-summary">
                <OrderSummary />
              </Route>
              <Route path="/shipping-and-payment">
                <ShippingAndPayment />
              </Route>
              <Route path="/order-confirmation">
                <OrderConfirmation />
              </Route>
              <Route path="/order-received">
                <OrderReceived />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
          {/* Bottom part of layout */}
          <footer></footer>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
