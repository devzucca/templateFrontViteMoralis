import { Button } from "@mui/material";
import * as React from "react";

function ButtonStyles(
  width = "fit-content",
  height = "fit-content",
  color = "text.third",
  backgroundColor = "background.paper",
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
      backgroundColor: "background.default",
      border: "1px solid",
      borderColor: "background.paper",
      color: "text.secondary",
    },
  };
}

export default function ButtonPrimary(props) {
  return (
    <Button
      disabled={props.disabled}
      variant="button-primary"
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
