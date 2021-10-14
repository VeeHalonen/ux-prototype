import { Typography } from "@mui/material";
import Category from "../components/Category";

const Categories = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Typography paragraph variant="h5" textAlign="start">
        Categories
      </Typography>
      <div
        style={{
          marginTop: 20,
          marginBottom: 30,
        }}
      >
        {[...Array(16)].map((e, i) => {
          return <Category key={i} />;
        })}
      </div>
    </div>
  );
};

export default Categories;
