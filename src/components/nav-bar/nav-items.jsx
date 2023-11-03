import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { NavLink, useLocation } from "react-router-dom";

function NavItem(props) {
  const location = useLocation();

  return (
    <Box display="flex" alignItems="center" mx={1.5}>
      <NavLink
        to={props.to}
        style={{
          textDecoration: "none",
        }}
      >
        <Typography
          color="text.primary"
          variant="h4"
          sx={{
            transition: "1s",
            color: location.pathname === props.to ? "#D711FF" : "text.primary",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0)",
              color: "#D711FF",
            },
          }}
        >
          {props.children}
        </Typography>
      </NavLink>
    </Box>
  );
}

export default NavItem;
