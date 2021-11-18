import { TextField } from "@mui/material";
import { useHistory } from "react-router-dom";

const SearchField = () => {
  let history = useHistory();
  return (
    <TextField
      placeholder="Search..."
      variant="outlined"
      size="small"
      style={{ backgroundColor: "white", borderRadius: "5px" }}
      onKeyPress={(e) => {
        if (e.key === "Enter") {
          history.push("/search");
        }
      }}
    />
  );
};

export default SearchField;
