import { Box, Typography } from "@mui/material";
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
            color:
              location.pathname === props.to ? "text.third" : "text.primary",
            "&:hover": {
              color: "text.third",
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
