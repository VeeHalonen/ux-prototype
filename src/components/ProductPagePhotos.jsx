import { MobileStepper, Typography } from "@mui/material";
import { useState } from "react";
import { getProductPicSrc } from "../helpers";
import Backdrop from "@mui/material/Backdrop";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ProductPagePhotos = ({ product }) => {
  const [showCarousel, setShowCarousel] = useState(false);
  const imgWidth = 300;
  const imgHeight = 300;

  const openCarousel = () => {
    setShowCarousel(true);
  };
  const closeCarousel = () => {
    setShowCarousel(false);
  };
  return (
    <>
      {/* Carousel Overlay (placeholder) */}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={showCarousel}
        onClick={closeCarousel}
      >
        <ArrowBackIosIcon />
        <img
          src={getProductPicSrc(product)}
          alt="Product Pic 1"
          style={{
            maxHeight: "100%",
            objectFit: "scale-down",
          }}
        />
        <Typography
          variant="h5"
          color="red"
          style={{
            position: "absolute",
            textShadow: "white 1px 0 10px",
            fontWeight: "bold",
          }}
        >
          CAROUSEL PLACEHOLDER
        </Typography>
        <ArrowForwardIosIcon />
      </Backdrop>
      {/* Image & Stepper (placeholder) */}
      <div style={{ textAlign: "center" }} onClick={openCarousel}>
        <img
          src={getProductPicSrc(product)}
          alt="Product Pic 1"
          style={{
            maxWidth: imgWidth,
            height: imgHeight,
            margin: 0,
          }}
        />
        <div style={{ width: imgWidth }}>
          <div
            style={{
              width: 65,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <MobileStepper
              steps={4}
              position="static"
              style={{ backgroundColor: "transparent" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPagePhotos;
