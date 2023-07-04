import React from "react";
import Moralis from "moralis";
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';

import { BrowserRouter as Router } from "react-router-dom";
import "@fontsource/poppins";

import MainAppRoutes from "@/routes/routes";
import { moralisApiKey } from "@/config/moralis-connect";
import CssBaseline from "@mui/material/CssBaseline";

import { MoralisProvider } from "react-moralis";
import { serverUrl, appId } from "@/config/moralis-connect";
import theme  from "@/theme/Theme";

import { useCounterStore } from '@/context/counter';
import { useUserStore } from '@/context/user';

import { useColorModeStore } from '@/context/colorMode';

export default function App() {

  const colorMode = useColorModeStore((state) => state.colorMode);

  if (!Moralis.Core.isStarted){
    const moralisStart = async () => {
      await Moralis.start({
        apiKey: moralisApiKey,
      });
    }
    moralisStart();
  }

  const getTheme = React.useMemo(
    () => createTheme(theme(colorMode)),
    [colorMode]
  );

  return (
      <ThemeProvider theme={getTheme}>
        <CssBaseline />
        <React.StrictMode>
          <MoralisProvider appId={appId} serverUrl={serverUrl}>
              <Router>
                <MainAppRoutes />
              </Router>
          </MoralisProvider>
        </React.StrictMode>
      </ThemeProvider>
);
}
