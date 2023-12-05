import * as React from "react";
import { Button } from "@mui/material";

function ButtonStyles(
  width = "auto",
  height = { xs: "30px", md: "40px" },
  padding = { xs: "8px 10px", sm: "20px", md: "15px" },
  backgroundColor = "secondary.main"
) {
  return {
    textAlign: "center",
    backgroundColor: backgroundColor,
    borderRadius: "30px",
    "&:hover": {
      backgroundColor: "common.fourt",
      color: "text.primary",
    },
    height: height,
    width: width,
    padding: padding,
    color: "common.white",
    "&:disabled": {
      backgroundColor: "grey",
    },
  };
}

export default function ButtonFilter(props) {
  let backgroundColor = "#C02327";
  if (props.reset) {
    backgroundColor = "#595959";
  }
  return (
    <Button
      component={props.component}
      disabled={props.disabled}
      type={props.type}
      sx={ButtonStyles(
        props.width,
        props.height,
        props.padding,
        backgroundColor
      )}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
}
