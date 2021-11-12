import { Button } from "@mui/material";
import { useState } from "react";
import Toast from "./Toast";

const AddToCartButton = ({ product }) => {
  const [toast, setToast] = useState(false);
  const addToCart = () => {
    setToast(true);
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
