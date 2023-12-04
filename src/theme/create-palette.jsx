import { common } from "@mui/material/colors";
import { alpha } from "@mui/material/styles";
import { error, indigo, info, neutral, success, warning } from "./colors";

export function createPalette(mode) {
  return {
    action: {
      active: neutral[500],
      disabled: alpha(neutral[900], 0.38),
      disabledBackground: alpha(neutral[900], 0.12),
      focus: alpha(neutral[900], 0.16),
      hover: alpha(neutral[900], 0.04),
      selected: alpha(neutral[900], 0.12),
    },
    background: {
      default: common.white,
      paper: common.white,
    },
    divider: "#F2F4F7",
    error,
    info,
    mode: mode,
    ...(mode == "light"
      ? {
          background: {
            default: "#F5F5F5",
            paper: "#3B3B3B",
          },
          text: {
            primary: "#3B3B3B",
            secondary: "#F5F5F5",
            third: "#D711FF",
          },
          icon: {
            primary: "#3B3B3B",
            secondary: "#F5F5F5",
            third: "#D711FF",
          },
        }
      : {
          background: {
            default: "#3B3B3B",
            paper: "#F5F5F5",
          },
          text: {
            primary: "#F5F5F5",
            secondary: "#3B3B3B",
            third: "#D711FF",
          },
          icon: {
            primary: "#F5F5F5",
            secondary: "#3B3B3B",
            third: "#D711FF",
          },
        }),
    neutral,
    primary: indigo,
    success,
    text: {
      primary: neutral[900],
      secondary: neutral[500],
      disabled: alpha(neutral[900], 0.38),
    },
    warning,
  };
}
