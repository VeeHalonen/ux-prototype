import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const PrevNextButtons = ({
  nextLink,
  prevLink,
  nextTitle,
  prevTitle,
  disablePrev,
  disableNext,
  actionOnNext, // Optional extra functionality for next button
}) => {
  const minWidth = 100;
  return (
    <div style={{ textAlign: "end", marginTop: 100, marginBottom: 10 }}>
      {/* Previous button (if link given) */}
      {prevLink && (
        <Button
          component={Link}
          to={prevLink}
          variant="contained"
          color="secondary"
          style={{ marginRight: 10, minWidth }}
          disabled={disablePrev}
        >
          {prevTitle || "Back"}
        </Button>
      )}
      {/* Next button (if link given) */}
      {nextLink && (
        <Button
          component={Link}
          to={nextLink}
          variant="contained"
          style={{ minWidth }}
          disabled={disableNext}
          onClick={actionOnNext}
        >
          {nextTitle || "Next"}
        </Button>
      )}
    </div>
  );
};

export default PrevNextButtons;
