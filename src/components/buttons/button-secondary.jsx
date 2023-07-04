import Button from "@mui/material/Button";
import * as React from "react";

function ButtonStyles(
  width = "auto",
  padding = { xs: "8px 10px", sm: "20px", md: "15px" },
  height = { xs: "32px", md: "52px" }
) {
  return {
    textAlign: "center",
    backgroundColor: "transparent",
    borderRadius: "10px",
    "&:hover": {
      backgroundColor: "#C02327",
      color: "common.white",
    },
    height: height,
    width: width,
    padding: padding,
    color: "text.secondary",
    outline: "2px solid #C02327",
  };
}

export default function ButtonSecondary(props) {
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
