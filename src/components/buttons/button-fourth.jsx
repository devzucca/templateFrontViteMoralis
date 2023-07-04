import Button from "@mui/material/Button";
import * as React from "react";

function ButtonStyles(
  width = "100px",
  height = { xs: "30px", md: "50px" },
  padding = "15px"
) {
  return {
    textAlign: "center",
    backgroundColor: "secondary.main",
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

export default function ButtonFourth(props) {
  let backgroundColor = "#C02327";
  if (props.disabled) {
    backgroundColor = "#595959";
  }
  return (
    <Button
      component={props.component}
      disabled={props.disabled}
      type={props.type}
      sx={ButtonStyles(props.width, props.height, props.padding)}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
}
