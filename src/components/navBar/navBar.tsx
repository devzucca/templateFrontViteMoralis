import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useBoundStore } from "@/stores/index";
import { AppBar, Box, Toolbar } from "@mui/material";
import LogoImage from "@/components/navBar/LogoImage";
import NavItem from "@/components/navBar/navItems";
import ButtonPrimary from "@/components/buttons/buttonPrimary";
import SideBarUser from "@/components/navBar/sidebarUser";
import SideBar from "@/components/navBar/sidebar";
import Logo from "@/assets/Img/svg/NGM.svg";

const Navbar = () => {
  let navigate = useNavigate();
  const { Authenticated, themeModeState } = useBoundStore();

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
          justifyContent: "space-between",
          alignItems: "center",
          m: "10px",
        }}
      >
        <Box>
          <LogoImage logotipo={Logo} imagotipo={Logo} />
        </Box>

        <Box sx={{ display: { xs: "none", sm: "flex" } }}>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/store">Store</NavItem>
          <NavItem to="/discover">Discover</NavItem>
        </Box>

        <Box>
          {Authenticated ? (
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

        <Box sx={{ display: { xs: "flex", sm: "none" } }}>
          <SideBar />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
