import { Button, Typography } from "@mui/material";
import ProductThumbnail from "../components/ProductThumbnail";

const ClearanceItems = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Typography paragraph variant="h5" textAlign="start">
        Clearance Offers
      </Typography>
      <div
        style={{
          marginTop: 20,
          marginBottom: 30,
        }}
      >
        {[...Array(20)].map((e, i) => {
          return <ProductThumbnail key={i} discount={true} />;
        })}
      </div>
      <Button variant="outlined">Load More</Button>
    </div>
  );
};

export default ClearanceItems;
