import * as React from "react";
import { Stack, Button, Snackbar, Slide, Typography } from "@mui/material";
import { useBoundStore } from "@/stores/index";
import { shallow } from "zustand/shallow";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function AlertGlobal() {
  const { stateAlert, titleAlert, ChangeStateAlert } = useBoundStore(
    (state) => state,
    shallow
  );

  function TransitionRight(props) {
    return <Slide {...props} direction="left" />;
  }

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    ChangeStateAlert(false);
  };

  return (
    <Stack sx={{ width: "100%" }}>
      <Snackbar
        open={stateAlert}
        autoHideDuration={3000}
        // onClose={handleClose}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
        TransitionComponent={TransitionRight}
      >
        <Alert severity="success" onClose={handleClose} sx={{ width: "100%" }}>
          <Typography variant="body2">{titleAlert}</Typography>
        </Alert>
      </Snackbar>
      {/* <Alert severity="error">This is an error message!</Alert>
      <Alert severity="warning">This is a warning message!</Alert>
      <Alert severity="info">This is an information message!</Alert>
      <Alert severity="success">This is a success message!</Alert> */}
    </Stack>
  );
}
