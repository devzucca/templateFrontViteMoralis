import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import * as copy from "copy-to-clipboard";
import React from "react";

import { NavLink } from "react-router-dom";

const matic =
  "https://ipfs.moralis.io:2053/ipfs/QmfA199t9GRga69GwwAMfNYRUbLVCsjz3ESyiwVULyDV4i/0xE568887Bf75AeA78147730CC4101aDf09626759E/polygon_matic_logo.svg";
const fox =
  "https://ipfs.moralis.io:2053/ipfs/QmSeK9V1uMkqN44AwpJdGQAddnqBQ1Lb7GNqGDtU9XXPU5/0xE568887Bf75AeA78147730CC4101aDf09626759E/metamask.svg";
const token_knrt =
  "https://ipfs.moralis.io:2053/ipfs/QmNx9ZtNnzAoHFWpBVXX7ow2W75Jm5bSNUu1rL67YE222W/0xE568887Bf75AeA78147730CC4101aDf09626759E/token_knrt.svg";

export default function SideBarUser() {
  const ethAddress = "";

  const balanceKNRT = 0;

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  function MenuButtons(props: any) {
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
          }}
        >
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              width: "100%",
              transition: "1s",
              "&:hover": {
                color: "text.primary",
              },
            }}
          >
            {props.title}
          </Typography>
        </NavLink>
      </Box>
    );
  }

  return (
    <Box sx={{ width: 50 }}>
      <IconButton onClick={handleDrawerOpen} color="inherit">
        <CardMedia
          component="img"
          image={
            "https://ipfs.moralis.io:2053/ipfs/QmXJkzfUzaNPWpZn16H8CYbHEiXj2RKxngbfaJmSZdPfmy/0xa136632e5123be81d620ecbdf5669741e32e3d75/unnamed.gif"
          }
          alt="logo-user"
          sx={{
            width: { xs: 35, sm: 45, lg: 55 },
            height: { xs: 35, sm: 45, lg: 55 },
            borderRadius: "12px",
            objectfit: "cover",
            border: "2px solid ",
            borderColor: "common.two",
            boxShadow:
              "0px 1px 1px rgb(0 0 0 / 1%), 0px 1px 33.4221px rgb(0 0 0 / 12%), 0px 21.3363px 17.869px rgb(0 0 0 / 10%), 0px 12.5216px 10.0172px rgb(0 0 0 / 1%), 0px 6.6501px 5.32008px rgb(0 0 0 / 6%), 0px 2.76726px 2.21381px rgb(0 0 0 / 14%)",
          }}
        />
      </IconButton>

      <Drawer
        sx={{
          width: { xs: 230, sm: 290 },
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: { xs: 230, sm: 290, md: 320, lg: 350, xl: 420 },
            height: "fit-content",
            boxShadow:
              "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
            my: 1,
            mx: { xs: 1, sm: 3 },
            borderRadius: 5,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <Stack
          sx={{
            px: 3,
            bgcolor: "background.default",
          }}
        >
          <Stack spacing={2} sx={{ mt: 4, mb: 2 }}>
            <Box
              width="100%"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap={2}
              >
                <CardMedia
                  component="img"
                  image={
                    "https://ipfs.moralis.io:2053/ipfs/QmXJkzfUzaNPWpZn16H8CYbHEiXj2RKxngbfaJmSZdPfmy/0xa136632e5123be81d620ecbdf5669741e32e3d75/unnamed.gif"
                  }
                  alt="Logo"
                  sx={{
                    width: { xs: 35, sm: 45, lg: 55 },
                    height: { xs: 35, sm: 45, lg: 55 },
                    borderRadius: "15px",
                    objectfit: "cover",
                    border: "2px solid ",
                    borderColor: "common.two",
                    boxShadow:
                      "0px 1px 1px rgb(0 0 0 / 1%), 0px 1px 33.4221px rgb(0 0 0 / 12%), 0px 21.3363px 17.869px rgb(0 0 0 / 10%), 0px 12.5216px 10.0172px rgb(0 0 0 / 1%), 0px 6.6501px 5.32008px rgb(0 0 0 / 6%), 0px 2.76726px 2.21381px rgb(0 0 0 / 14%)",
                  }}
                />

                <Typography
                  variant="subtitle2"
                  sx={{
                    color: "text.secondary",
                    textAlign: "center",
                  }}
                >
                  @{"roselily"}
                </Typography>
              </Box>
              <ChevronRightIcon
                sx={{ fontSize: 30, cursor: "pointer" }}
                onClick={handleDrawerClose}
              />
            </Box>

            <Divider
              sx={{
                margin: "auto",
                height: "1px",
                width: "100%",
                backgroundColor: "#C0C0C0",
              }}
            />
          </Stack>

          <Stack
            spacing={1}
            sx={{
              mb: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <MenuButtons title="Link1" to="/" />
            <MenuButtons title="Link2" to="/" />
            <MenuButtons title="Link3" to="/" />
            <MenuButtons
              title="Logout"
              clickOption={console.log("holaMundo")}
              icon={<LogoutIcon sx={{ color: "secondary.icon" }} />}
            />
          </Stack>

          <Stack
            sx={{
              border: "1px solid",
              borderColor: "common.two",
              borderRadius: 3,
              my: 4,
              py: 2,
              px: { xs: 1, sm: 3 },
              alignItems: "center",
            }}
            gap={2}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
              }}
            >
              <CardMedia
                component="img"
                image={fox}
                alt="Logo"
                sx={{
                  width: { xs: 25, sm: 30 },
                  height: 30,
                  objectFit: "contain",
                }}
              />
              <Typography
                variant="subtitle1"
                color="text.secondary"
                sx={{ display: "flex", alignItems: "center" }}
              >
                {ethAddress.slice(0, 6)}...{ethAddress.slice(-4)}
              </Typography>
              <IconButton
                sx={{
                  color: "#C02327",
                }}
                onClick={() =>
                  copy(ethAddress, {
                    debug: true,
                    message: `ethAddress ${ethAddress} copy to clipboard`,
                  })
                }
              >
                <ContentCopyOutlinedIcon fontSize="small" />
              </IconButton>
            </Box>

            <Box
              sx={{
                border: "1px solid",
                borderColor: "common.two",
                borderRadius: 3,
                width: "100%",
                py: 2,
                px: { xs: 1, sm: 2 },
              }}
            >
              <Stack direction="row" gap={1} sx={{ alignItems: "center" }}>
                <AttachMoneyIcon sx={{ color: "secondary.icon" }} />
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  {balanceKNRT} {"USD"}
                </Typography>
              </Stack>

              <Stack direction="row" gap={1} sx={{ alignItems: "center" }}>
                <CardMedia
                  component="img"
                  image={token_knrt}
                  alt="token_knrt"
                  sx={{
                    width: 21,
                    height: 24,
                    objectFit: "contain",
                    px: "3px",
                  }}
                />
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  {balanceKNRT} {"KNRT"}
                </Typography>
              </Stack>

              <Stack direction="row" gap={1} sx={{ alignItems: "center" }}>
                <CardMedia
                  component="img"
                  image={matic}
                  alt="Matic"
                  sx={{
                    width: 21,
                    height: 24,
                    objectFit: "contain",
                    px: "3px",
                  }}
                />
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  {balanceKNRT} {"MATIC"}
                </Typography>
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Drawer>
    </Box>
  );
}
