import * as React from "react";
import { Button } from "@mui/material";

function ButtonStyles(
  width = "fit-content",
  height = "fit-content",
  color = "text.third",
  backgroundColor = "background.default",
  padding = "5px 10px"
) {
  return {
    width: width,
    height: height,
    color: color,
    backgroundColor: backgroundColor,
    padding: padding,
    borderRadius: "10px",
    transition: "0.5s",
    ":hover": {
      backgroundColor: "background.paper",
      color: "text.secondary",
    },
  };
}

export default function ButtonSecondary(props) {
  return (
    <Button
      disabled={props.disabled}
      type={props.type}
      sx={ButtonStyles(
        props.width,
        props.height,
        props.color,
        props.disabled ? "#8C8C8C" : props.backgroundColor,
        props.padding
      )}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
}
