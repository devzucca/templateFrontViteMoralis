import React, { useContext } from "react";
import { Box, Modal, Typography } from "@mui/material";
import { useBoundStore } from "@/stores/index";
import { shallow } from "zustand/shallow";
import ButtonSecondary from "@/components/buttons/buttonSecondary";

const style = {
  backgroundColor: "background.paper",
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", sm: "350px  ", md: "450px", lg: "500px" },
  p: "20px",
  borderRadius: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

export default function ModalGlobal() {
  const { stateModal, titleModal, ChangeStateModal } = useBoundStore(
    (state) => state,
    shallow
  );
  const handleClose = () => {
    ChangeStateModal(false);
  };

  return (
    <Modal
      open={stateModal}
      disableEnforceFocus
      sx={{
        ".css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop": {
          backgroundColor: "transparent",
          backdropFilter: "blur(1px)",
        },
      }}
    >
      <Box sx={style}>
        <Typography
          variant="body1"
          sx={{
            color: "text.third",
          }}
        >
          {titleModal}
        </Typography>
        <ButtonSecondary onClick={handleClose}>Close</ButtonSecondary>
      </Box>
    </Modal>
  );
}
