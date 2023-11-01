import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

import LogoImage from "@/components/LogoImage";
import NavItem from "@/components/NavItem";

import { useStoreInContext } from "@/stores/container";

import ButtonPrimary from "@/components/buttons/button-primary";

import Sidebar from "@/components/sidebar-user";

import { useNavigate } from "react-router-dom";

const logotipo_nameproject_v1 =
  "https://macsnh.org/wp-content/uploads/2019/08/demo-logo-black.png";
const imagotipo_nameproject_v1 =
  "https://ipfs.moralis.io:2053/ipfs/QmcJDXFQp97Pq88ApEaKhLVMVHqKGfMgEHuX4J3xP6J7R3/0xE568887Bf75AeA78147730CC4101aDf09626759E/imagotipo_nameproject_v1.svg";

const Navbar = () => {
  let navigate = useNavigate();

  const authenticated = useStoreInContext(
    (state: { authenticated: any }) => state.authenticated
  );
  const Login = useStoreInContext((state: { Login: any }) => state.Login);
  const userRender = useStoreInContext(
    (state: { userRender: any }) => state.userRender
  );
  const AmountKnrtUser = useStoreInContext(
    (state: { AmountKnrtUser: any }) => state.AmountKnrtUser
  );
  const MaticBalance = useStoreInContext(
    (state: { MaticBalance: any }) => state.MaticBalance
  );
  console.log(`userRender ${userRender}`);
  console.log(`AmountKnrtUser ${AmountKnrtUser}`);
  console.log(`MaticBalance ${MaticBalance}`);

  function Into() {
    Login();
    // navigate(`/`);
  }
  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: "background.default",
        widht: "auto",
      }}
    >
      <Stack
        direction="row"
        height="86px"
        sx={{ mx: { xs: 2, sm: 6, md: 9, lg: 10 } }}
      >
        <Grid
          container
          alignItems="center"
          justifyContent={{ xs: "space-between", sm: "normal" }}
          gap={{ xs: 1, sm: 10 }}
        >
          <Grid item xs={12} sm={12} md={12} lg={12} xl={1}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginRight: "12px",
              }}
            >
              <LogoImage
                logotipo={logotipo_nameproject_v1}
                imagotipo={imagotipo_nameproject_v1}
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} xl={4}>
            <Box
              sx={{
                display: { xs: "none", lg: "flex" },
              }}
            >
              <NavItem to="/">Link1</NavItem>
              <NavItem to="/">Link2</NavItem>
              <NavItem to="/">Link3</NavItem>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} xl={3}>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box>
                <ButtonPrimary
                  onClick={() => {
                    Into();
                  }}
                  width="auto"
                >
                  Authenticate
                </ButtonPrimary>
              </Box>

              <Box>
                <Sidebar />
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </AppBar>
  );
};
export default Navbar;
