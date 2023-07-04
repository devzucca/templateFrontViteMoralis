import Button from "@mui/material/Button";
import * as React from "react";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";

function ButtonStyles() {
  return {
    textAlign: "center",
    backgroundColor: "#00d12a",
    borderRadius: "10px",
    "&:hover": {
      backgroundColor: "#00d12a",
    },
    color: "common.white",
    width: "100%",
    height: { xs: "32px", md: "52px" },
    padding: { xs: "8px 10px", sm: "20px", md: "15px" },
  };
}

export default function ButtonTertiary() {
  return <Button sx={ButtonStyles}><TaskAltOutlinedIcon/>Verified mail</Button>;
}
