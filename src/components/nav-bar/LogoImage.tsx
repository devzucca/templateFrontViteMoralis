  import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import { useNavigate } from "react-router-dom";

function LogoImage(props: any) {

      let navigate = useNavigate();

    return (
      <>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            gap: 1,
            justifyContent: "center",
          }}
        >
          <CardMedia
            component="img"
            image={props.logotipo}
            alt="Logo"
            sx={{
              width: { xs: "120px", md: "189px" },
              height: "55px",
              margin: "auto",
              objectFit: "contain",
            }}
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate(`/`);
            }}
          />
        </Box>

        <Box
          sx={{
            display: { xs: "flex", sm: "none" },
            gap: 1,
            justifyContent: "center",
          }}
        >
          <CardMedia
            component="img"
            image={props.imagotipo}
            alt="Logo"
            sx={{
              width: { xs: "40px", md: "189px" },
              height: "30px",
              margin: "auto",
              objectFit: "contain",
            }}
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate(`/`);
            }}
          />
        </Box>
      </>
    );
}

export default LogoImage;