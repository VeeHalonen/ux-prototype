import { MobileStepper } from "@mui/material";
import { getProductPicSrc } from "../helpers";

const ProductPagePhotos = ({ product }) => {
  const imgWidth = 300;
  const imgHeight = 300;
  return (
    <div style={{ textAlign: "center" }}>
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
  );
};

export default ProductPagePhotos;
