import Button from "@mui/material/Button";
import * as React from "react";

export default function ButtonPrimary(props) {
  return (
    <Button
      variant="button-primary"
      sx={{ m: 1, color: "text.primary" }}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
}
