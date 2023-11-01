const theme = (themeModeState) => ({
  palette: {
    action: {
      disabled: "#FFFFFF",
    },
    mode: themeModeState,
    ...(themeModeState == "light"
      ? {
          background: {
            default: "#797a7a",
            paper: "#797a7a",
          },
          text: {
            primary: "#141414",
            secondary: "#141414",
          },
        }
      : {
          background: {
            default: "#141414",
            paper: "#141414",
          },
          text: {
            primary: "#696969",
            secondary: "#696969",
          },
        }),
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "button-primary" },
          style: {
            textTransform: "none",
            border:
              themeModeState === "dark"
                ? `2px dashed #FFFFFF`
                : `2px dashed #000`,
            "&:hover": {
              backgroundColor: "common.white",
              border: "2px solid #C02327",
            },
            "&:disabled": {
              backgroundColor: "#595959",
            },
          },
        },
        {
          props: { variant: "dashed", color: "secondary" },
          style: {
            border: `4px dashed #C02327`,
          },
        },
      ],
    },
  },
});

export default theme;
