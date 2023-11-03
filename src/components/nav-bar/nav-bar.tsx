import React, { useContext, useEffect } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

import LogoImage from "@/components/nav-bar/LogoImage";
import NavItem from "@/components/nav-bar/nav-items";

import { useStoreInContext } from "@/stores/container/container";
import { useNavigate } from "react-router-dom";

import ButtonPrimary from "@/components/buttons/button-primary";
import SideBarUser from "@/components/nav-bar/sidebar-user";
import SideBar from "@/components/nav-bar/sidebar";
import Logo from "@/assets/Img/svg/NGM.svg";

const Navbar = () => {
  let navigate = useNavigate();
  const authenticated = useStoreInContext(
    (state: { authenticated: any }) => state.authenticated
  );

  return (
    <AppBar
      position="sticky"
      sx={{
        my: 1,
        backgroundColor: "background.default",

        boxShadow: "none",
        backgroundImage: "none",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <LogoImage logotipo={Logo} imagotipo={Logo} />
        </Box>
        <Box sx={{ display: { xs: "none", sm: "flex" } }}>
          <NavItem to="/home">Home</NavItem>
          <NavItem to="/store">Store</NavItem>
          <NavItem to="/discover">Discover</NavItem>
        </Box>
        <Box sx={{ display: { xs: "flex", sm: "none" } }}>
          <SideBar />
        </Box>
        <Box>
          {authenticated ? (
            <SideBarUser />
          ) : (
            <ButtonPrimary
              onClick={() => {
                navigate(`/`);
              }}
              width="auto"
            >
              Authenticate
            </ButtonPrimary>
          )}
        </Box>
      </Box>
    </AppBar>
  );
};
export default Navbar;
