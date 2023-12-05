import { Box, CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";

function LogoImage(props: any) {
  let navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          justifyContent: "center",
        }}
      >
        <CardMedia
          component="img"
          image={props.logotipo}
          alt="Logo"
          sx={{
            width: { md: "189px" },
            height: "auto",
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
            width: { xs: "100px" },
            height: "auto",
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
