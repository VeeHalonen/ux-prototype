import { Typography, Link as MUILink } from "@mui/material";
import { Link } from "react-router-dom";

const StyledLink = ({
  name,
  to,
  component,
  paragraph,
  textAlign,
  variant,
  noBold,
  product, // if given, save to LocalStorage on click
}) => {
  const align = textAlign || "center";
  const variant2 = variant || "body";
  const fontWeight = noBold ? "normal" : "bold";
  const click = () => {
    if (product) {
      localStorage.setItem("product", JSON.stringify(product));
    }
  };
  return (
    <MUILink component={Link} to={to} underline="hover" onClick={click}>
      <Typography
        variant={variant2}
        component={component}
        textAlign={align}
        style={{ fontWeight }}
        paragraph={paragraph}
      >
        {name}
      </Typography>
    </MUILink>
  );
};

export default StyledLink;
