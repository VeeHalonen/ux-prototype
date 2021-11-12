import { Card } from "@mui/material";
import { Link } from "react-router-dom";
import StyledLink from "./StyledLink";

const Category = ({ category, wide }) => {
  const width = wide ? 500 : 200;
  const padding = 10;
  const height = wide ? 200 : "100%";
  return (
    <div style={{ width, margin: 10, display: "inline-block" }}>
      <Card style={{ padding }}>
        <Link to="/search">
          <img
            src="categoryImg.jpg"
            alt="Category Name"
            width={width - padding * 2}
            height={height}
          />
        </Link>
        <StyledLink to="/search" name={category} component="p" />
      </Card>
    </div>
  );
};

export default Category;
