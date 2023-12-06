import { useBoundStore } from "@/stores/index";
import { shallow } from "zustand/shallow";
import { useTheme, Box, IconButton, Button } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

function MyApp() {
  const {
    themeModeState,
    ChangeMode,
    ChangeStateAlert,
    stateAlert,
    ChangeStateModal,
  } = useBoundStore((state) => state, shallow);

  const theme = useTheme();

  const handleOpenAlert = () => {
    ChangeStateAlert(true);
  };
  const handleOpenModal = () => {
    ChangeStateModal(true);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        // width: "100%",
        // alignItems: "center",
        // justifyContent: "center",
        bgcolor: "background.default",
        color: "text.primary",
        borderRadius: 1,
        // p: 3,
        gap: "20px",
      }}
    >
      <IconButton
        sx={{ ml: 1, color: "text.third" }}
        onClick={() => ChangeMode(themeModeState)}
      >
        {theme.palette.mode} mode
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon sx={{ color: "icon.third" }} />
        ) : (
          <Brightness4Icon sx={{ color: "icon.third" }} />
        )}
      </IconButton>
      <Button
        onClick={() => handleOpenAlert()}
        sx={{ backgroundColor: "background.paper", color: "text.third" }}
      >
        Alert
      </Button>
      <Button
        onClick={() => handleOpenModal()}
        sx={{ backgroundColor: "background.paper", color: "text.third" }}
      >
        Modal
      </Button>
    </Box>
  );
}

export default function Home() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <MyApp />
    </Box>
  );
}
