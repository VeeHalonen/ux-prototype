import { TextField } from "@mui/material";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

const SearchField = () => {
  let history = useHistory();
  const location = useLocation();
  const [textField, setTextField] = useState("");

  return (
    <TextField
      value={textField}
      placeholder="Search..."
      variant="outlined"
      size="small"
      style={{ backgroundColor: "white", borderRadius: "5px" }}
      onChange={(e) => setTextField(e.target.value)}
      onKeyPress={(e) => {
        if (e.key === "Enter") {
          const text = textField;
          history.push("/search?text=" + text);
          setTextField("");
        }
      }}
      disabled={location.pathname === "/search"}
    />
  );
};

export default SearchField;
