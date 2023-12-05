import React from "react";
import Moralis from "moralis";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter as Router } from "react-router-dom";
import { useBoundStore } from "@/stores/index";
import { shallow } from "zustand/shallow";
import { MoralisProvider } from "react-moralis";
import { serverUrl, appId, moralisApiKey } from "@/config/moralisConnect";
import { AppContextProvider } from "@/context/AppContextProvider";

import CssBaseline from "@mui/material/CssBaseline";
import MainAppRoutes from "@/routes/routes";
import theme from "@/theme/theme";

export default function App() {
  const { themeModeState } = useBoundStore((state: any) => state, shallow);

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
    <>
      <ThemeProvider theme={getTheme}>
        <CssBaseline />
        <React.StrictMode>
          <MoralisProvider appId={appId} serverUrl={serverUrl}>
            <AppContextProvider>
              <Router>
                <MainAppRoutes />
              </Router>
            </AppContextProvider>
          </MoralisProvider>
        </React.StrictMode>
      </ThemeProvider>
    </>
  );
}
