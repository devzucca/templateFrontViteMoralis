
const theme = (mode) => ({
  palette: {
    mode,
    primary: mode === 'dark' ? { main: "#EAE8E8" } : { main: "#C02327" },
    background: {
      default: mode === 'dark' ? "#353535" : "#EAE8E8",
      paper: mode === 'dark' ? "#EAE8E8" : "#C02327",
    },
    text: mode === 'dark' ? { primary: "#FFFFFF", secondary: "#EAE8E8" } : { primary: "#000000", secondary: "#000000" },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'button-primary' },
          style: {
            textTransform: 'none',
            border:  mode === 'dark' ? `2px dashed #FFFFFF` : `2px dashed #000`,
            "&:hover": {
              backgroundColor: "common.white",
              border: "2px solid #C02327",
            },
            "&:disabled": {
              backgroundColor: "#595959"
            }
          }
        },
        {
          props: { variant: 'dashed', color: 'secondary' },
          style: {
            border: `4px dashed #C02327`,
          },
        }
      ],
    },
  },
});

export default theme;
