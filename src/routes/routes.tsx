import { Grid } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CircularProgress from "@mui/material/CircularProgress";
import * as React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "@/components/nav-bar/nav-bar";

const Home = React.lazy(() => import("@/screens/home"));

export default function Navigator() {
  let logotipo_koolinart_v1 =
    "https://ipfs.moralis.io:2053/ipfs/QmciCp2vBFZz3Hh9GuKBQdWdgvsS3DMUNMdMdsVzZ6r2US/0xE568887Bf75AeA78147730CC4101aDf09626759E/logotipo_koolinart_v1.svg";

  return (
    <React.Suspense
      fallback={
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{
            backgroundColor: "common.tree",
            width: "100%",
            height: "100vh",
          }}
        >
          <CardMedia
            component="img"
            image={logotipo_koolinart_v1}
            alt="Koolinart Logo"
            sx={{
              width: { xs: 150, sm: 150, md: 200, lg: "497px", xl: 300 },
              objectFit: "cover",
            }}
          />
          <CircularProgress
            style={{ color: "#C02327" }}
            sx={{ m: 2 }}
            size="68px"
          />
        </Grid>
      }
    >
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </React.Suspense>
  );
}
