import { Typography, Link as MUILink } from "@mui/material";
import { Link } from "react-router-dom";

const StyledLink = ({ name, to, component, paragraph }) => {
  return (
    <MUILink component={Link} to={to} underline="hover">
      <Typography
        variant="body"
        component={component}
        textAlign="center"
        style={{ fontWeight: "bold" }}
        paragraph={paragraph}
      >
        {name}
      </Typography>
    </MUILink>
  );
};

export default StyledLink;
