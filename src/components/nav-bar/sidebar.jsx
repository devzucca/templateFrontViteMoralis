import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";
import { Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import * as React from "react";
import Drawer from "@mui/material/Drawer";

import { NavLink } from "react-router-dom";

export default function SideBar() {
  const drawerWidth = 180;

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  function MenuButtons(props) {
    return (
      <Box
        onClick={props.clickOption}
        sx={{
          display: "flex",
          gap: 1,
          width: "100%",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0)",
          },
        }}
      >
        <NavLink
          to={props.to}
          style={{
            width: "100%",
            textDecoration: "none",
            textTransform: "capitalize",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4" color="text.primary" textAlign="center">
            {props.title}
          </Typography>
        </NavLink>
      </Box>
    );
  }

  return (
    <>
      <IconButton
        onClick={handleDrawerOpen}
        color="inherit"
        sx={{ padding: 0 }}
      >
        <MenuIcon
          sx={{
            color: "#D711FF",
          }}
        />
      </IconButton>
      <Drawer
        sx={{
          width: 0,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            height: "fit-content",
            backgroundColor: "background.default",
            borderRadius: "10px",
            my: "45px",
            mx: "25px",
            py: "10px",
            boxShadow: "0px 4px 4px 2px rgba(215, 17, 255)",
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <Box
          sx={{
            height: "100%",
            border: "none",
            backgroundColor: "background.default",
          }}
        >
          <Stack>
            <Stack spacing={1}>
              <Box
                width="100%"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box width="100%">
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      textAlign: "center",
                      color: "#D711FF",
                      fontStyle: "normal",
                      fontSize: "25px",
                      fontWeight: "800",
                    }}
                  >
                    Menu
                  </Typography>
                </Box>
                <ArrowRightRoundedIcon
                  sx={{ fontSize: "35px", cursor: "pointer", color: "#D711FF" }}
                  onClick={handleDrawerClose}
                />
              </Box>
            </Stack>

            <Stack
              spacing={1}
              sx={{
                display: {
                  xs: "flex",
                  lg: "none",
                  flexDirection: "column",
                  width: " calc(100% - 35px)",
                },
                alignItems: "center",
              }}
            >
              <MenuButtons title="Home" to="/home" />
              <MenuButtons title="Store" to="/store" />
              <MenuButtons title="Discover" to="/discover" />
            </Stack>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
}
