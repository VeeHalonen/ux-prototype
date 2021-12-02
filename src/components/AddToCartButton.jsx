import { Badge, Button } from "@mui/material";
import { useState, useContext } from "react";
import { GlobalStateContext } from "../helpers";
import Toast from "./Toast";

const AddToCartButton = ({ product, count, onAdd }) => {
  const context = useContext(GlobalStateContext);
  count = count || 1;
  const [toast, setToast] = useState(false);
  const addToCart = () => {
    setToast(true);
    context.dispatch({ type: "addMultipleToCart", product, count });
    if (onAdd) {
      onAdd(product);
    }
  };
  const hideToast = () => {
    setToast(false);
  };

  return (
    <>
      <Toast message="Added to cart!" open={toast} onClose={hideToast} />
      <Badge badgeContent={product.inCart} color="error">
        <Button variant="contained" onClick={addToCart}>
          Add to Cart
        </Button>
      </Badge>
    </>
  );
};

export default AddToCartButton;
