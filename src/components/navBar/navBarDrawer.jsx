import * as React from "react";
import { NavLink } from "react-router-dom";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import {
  List,
  ListItemText,
  ListItemIcon,
  ListItem,
  ListItemButton,
  CardMedia,
  IconButton,
  Typography,
  Box,
  CssBaseline,
  Toolbar,
  styled,
  Badge,
  Avatar,
  useTheme,
} from "@mui/material";
import {
  HomeRounded,
  WhatshotRounded,
  WidgetsRounded,
  PeopleRounded,
  SensorsRounded,
  FileDownloadOutlined,
  SettingsRounded,
  Menu,
  MenuOpen,
} from "@mui/icons-material";
const drawerWidth = 180;

const openedMixin = (theme) => ({
  width: drawerWidth,
  backgroundColor: "#6366F1",
  overflowX: "hidden",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
});

const closedMixin = (theme) => ({
  backgroundColor: "#6366F1",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const CustomAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  backgroundColor: "#6366F1",
  // backgroundColor: theme.palette.background.paper,
  backgroundImage: "none",
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  backgroundColor: "#6366F1",
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

export default function NavbarDrawer(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  function ItemNav(props) {
    return (
      <NavLink
        to={props.to}
        style={({ isActive }) => {
          return {
            textDecoration: "none",
            color: isActive
              ? theme.palette.text.secondary
              : theme.palette.text.primary,
          };
        }}
      >
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              {props.children}
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={<Typography variant="body2">{props.title}</Typography>}
              sx={{ opacity: open ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>
      </NavLink>
    );
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <CustomAppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Mini variant drawer
          </Typography>
        </Toolbar>
      </CustomAppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <MenuOpen />
            ) : (
              <MenuOpen sx={{ color: "#FFF" }} />
            )}
          </IconButton>
        </DrawerHeader>
        <List>
          <ItemNav to="" title="Home">
            <HomeRounded sx={{ color: "icon.secondary" }} />
          </ItemNav>
          <ItemNav to="/store" title="Store">
            <WhatshotRounded sx={{ color: "icon.secondary" }} />
          </ItemNav>
          <ItemNav to="/library" title="Library">
            <WidgetsRounded sx={{ color: "icon.secondary" }} />
          </ItemNav>
          <ItemNav to="/friends" title="Friends">
            <PeopleRounded sx={{ color: "icon.secondary" }} />
          </ItemNav>
          <ItemNav to="/live" title="Live">
            <SensorsRounded sx={{ color: "icon.secondary" }} />
          </ItemNav>
        </List>
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "flex-end",
          }}
        >
          <ItemNav to="/downloads" title="Downloads">
            <FileDownloadOutlined sx={{ color: "icon.secondary" }} />
          </ItemNav>

          <ItemNav to="/settings" title="Settings">
            <SettingsRounded sx={{ color: "icon.secondary" }} />
          </ItemNav>

          <ItemNav to="/sign-in" title="User">
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar
                alt="Remy Sharp"
                src=""
                sx={{
                  height: { xs: "30px" },
                  width: { xs: "30px" },
                }}
              />
            </StyledBadge>
          </ItemNav>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {props.children}
      </Box>
    </Box>
  );
}
