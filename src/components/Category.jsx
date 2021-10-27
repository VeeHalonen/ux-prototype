import { Card } from "@mui/material";
import { Link } from "react-router-dom";
import StyledLink from "./StyledLink";

const Category = () => {
  const width = 200;
  const padding = 10;
  return (
    <div style={{ width, margin: 10, display: "inline-block" }}>
      <Card style={{ padding }}>
        <Link to="/search">
          <img
            id="logo"
            src="categoryImg.jpg"
            alt="Category Name"
            width={width - padding * 2}
          />
        </Link>
        <StyledLink to="/search" name="Category Name" component="p" />
      </Card>
    </div>
  );
};

export default Category;
