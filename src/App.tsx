import React from "react";
import Moralis from "moralis";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter as Router } from "react-router-dom";

import "@fontsource/poppins";
import CssBaseline from "@mui/material/CssBaseline";
import MainAppRoutes from "@/routes/routes";
import { moralisApiKey } from "@/config/moralis-connect";
import { MoralisProvider } from "react-moralis";
import { serverUrl, appId } from "@/config/moralis-connect";

import { UserProvider } from "@/stores/container";
import theme from "@/theme/Theme";
import themeMode from "@/stores/theme";

export default function App() {
  const { themeModeState } = themeMode();


  if (!Moralis.Core.isStarted) {
    const moralisStart = async () => {
      await Moralis.start({
        apiKey: moralisApiKey,
      });
    };
    moralisStart();
  }

  const getTheme = React.useMemo(
    () => createTheme(theme(themeModeState)),
    [themeModeState]
  );

  return (
    <ThemeProvider theme={getTheme}>
      <CssBaseline />
      <React.StrictMode>
        <MoralisProvider appId={appId} serverUrl={serverUrl}>
          <UserProvider>
            <Router>
              <MainAppRoutes />
            </Router>
          </UserProvider>
        </MoralisProvider>
      </React.StrictMode>
    </ThemeProvider>
  );
}
