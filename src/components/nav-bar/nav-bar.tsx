import React, { useContext, useEffect } from "react";
import { useStoreInContext } from "@/stores/container/container";
import { useNavigate } from "react-router-dom";

import { AppBar, Box, Toolbar } from "@mui/material";

import LogoImage from "@/components/nav-bar/LogoImage";
import NavItem from "@/components/nav-bar/nav-items";
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
      position="fixed"
      sx={{
        backgroundColor: "background.default",
        backgroundImage: "none",
        widht: "auto",
        boxShadow: "none",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Toolbar
        sx={{
          width: "100%",
          justifyContent: "center",
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
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
