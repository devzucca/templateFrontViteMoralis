import * as React from "react";
import { NavLink } from "react-router-dom";
import { Typography, Box, IconButton, Stack, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";

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
      <IconButton onClick={handleDrawerOpen}>
        <MenuIcon
          sx={{
            color: "icon.third",
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
            right: "10px",
            top: "50px",
            p: "10px",
            boxShadow: "0px 4px 4px 2px rgba(215, 17, 255)",
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <Stack>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Typography variant="h3" width="100%" textAlign="center">
              Menu
            </Typography>
            <ArrowRightRoundedIcon
              sx={{ fontSize: "35px", cursor: "pointer", color: "#D711FF" }}
              onClick={handleDrawerClose}
            />
          </Stack>
          <Stack
            spacing={1}
            sx={{
              display: "flex",
              alignItems: "center",
              width: " calc(100% - 35px)",
            }}
          >
            <MenuButtons title="Home" to="/home" />
            <MenuButtons title="Store" to="/store" />
            <MenuButtons title="Discover" to="/discover" />
          </Stack>
        </Stack>
      </Drawer>
    </>
  );
}
