import { createTheme as createMuiTheme } from "@mui/material";
import { createPalette } from "./createPalette";
import { createComponents } from "./createComponents";
import { createShadows } from "./createShadows";
import { createTypography } from "./createTypography";

export default function theme(themeModeState) {
  const palette = createPalette(themeModeState);
  const components = createComponents({ palette });
  const shadows = createShadows();
  const typography = createTypography();
  return {
    breakpoints: {
      values: {
        xs: 320,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1800,
      },
    },
    typography,
    components,
    shadows,
    palette,
  };
}
