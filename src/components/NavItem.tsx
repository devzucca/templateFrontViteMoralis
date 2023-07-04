  
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

  
  function NavItem(props: any) {
    return (
      <Box display="flex" alignItems="center" mx={1.5}>
        <NavLink
          to={props.to}
          style={{
            textDecoration: "none",
          }}
        >
          <Typography
            color="text.secondary"
            variant="body1"
            sx={{
              transition: "1s",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0)",
                color: "text.primary",
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
