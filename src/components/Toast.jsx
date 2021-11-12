import { Snackbar, Alert } from "@mui/material";

const Toast = ({ message, open, onClose }) => {
  return (
    <Snackbar open={open} autoHideDuration={2000} onClose={onClose}>
      <Alert onClose={onClose}>{message}</Alert>
    </Snackbar>
  );
};

export default Toast;
