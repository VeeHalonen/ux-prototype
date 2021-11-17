import { Button } from "@mui/material";
import { useState, useContext } from "react";
import { GlobalStateContext } from "../helpers";
import Toast from "./Toast";

const AddToCartButton = ({ product }) => {
  const context = useContext(GlobalStateContext);
  const [toast, setToast] = useState(false);
  const addToCart = () => {
    setToast(true);
    context.dispatch({ type: "addToCart", product });
  };
  const hideToast = () => {
    setToast(false);
  };

  return (
    <>
      <Toast message="Added to cart!" open={toast} onClose={hideToast} />
      <Button variant="contained" onClick={addToCart}>
        Add to Cart
      </Button>
    </>
  );
};

export default AddToCartButton;
