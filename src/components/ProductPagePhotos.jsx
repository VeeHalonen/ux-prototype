import { MobileStepper } from "@mui/material";

const ProductPagePhotos = () => {
  const imgWidth = 300;
  const imgHeight = 300;
  return (
    <div>
      <img
        src="productImg1.png"
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
            width: 50,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <MobileStepper steps={4} position="static" />
        </div>
      </div>
    </div>
  );
};

export default ProductPagePhotos;
