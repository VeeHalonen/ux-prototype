import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const PrevNextButtons = ({ nextLink, prevLink, nextTitle, prevTitle }) => {
  const minWidth = 100;
  return (
    <div style={{ textAlign: "end", marginTop: 100, marginBottom: 100 }}>
      {/* Previous button (if link given) */}
      {prevLink && (
        <Button
          component={Link}
          to={prevLink}
          variant="contained"
          color="secondary"
          style={{ marginRight: 10, minWidth }}
        >
          {prevTitle || "Previous"}
        </Button>
      )}
      {/* Next button (if link given) */}
      {nextLink && (
        <Button
          component={Link}
          to={nextLink}
          variant="contained"
          style={{ minWidth }}
        >
          {nextTitle || "Next"}
        </Button>
      )}
    </div>
  );
};

export default PrevNextButtons;
