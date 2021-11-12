import { Typography } from "@mui/material";
import Category from "../components/Category";
import StyledLink from "../components/StyledLink";
import { CATEGORIES } from "../helpers";

const Categories = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Typography textAlign="start" variant="h5">
        <StyledLink to="/products" name="Products" component="span" noBold />
        <Typography variant="h5" component="span">
          {" › Categories"}
        </Typography>
      </Typography>
      <div
        style={{
          marginTop: 20,
          marginBottom: 30,
        }}
      >
        {CATEGORIES.map((c, i) => {
          return <Category key={i} category={c} wide />;
        })}
      </div>
    </div>
  );
};

export default Categories;
