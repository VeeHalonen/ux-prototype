import { Typography, Link as MUILink } from "@mui/material";
import { Link } from "react-router-dom";

const StyledLink = ({ name, to, component, paragraph, textAlign, variant }) => {
  const align = textAlign || "center";
  const variant2 = variant || "body";
  return (
    <MUILink component={Link} to={to} underline="hover">
      <Typography
        variant={variant2}
        component={component}
        textAlign={align}
        style={{ fontWeight: "bold" }}
        paragraph={paragraph}
      >
        {name}
      </Typography>
    </MUILink>
  );
};

export default StyledLink;
