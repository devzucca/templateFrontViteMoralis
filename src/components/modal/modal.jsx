import React, { useContext } from "react";
import { Box, Modal, Typography } from "@mui/material";
import { useBoundStore } from "@/stores/index";
import { shallow } from "zustand/shallow";
import ButtonSecondary from "@/components/buttons/buttonSecondary";

const style = {
  backdropFilter: "blur(4px)",
  backgroundColor: "background.paper",
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", sm: 450, md: 480, lg: 500 },
  p: "20px",
  borderRadius: "40px",
  display: "flex",
  justifyContent: "center",
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
      onClose={handleClose}
      SX={{
        backgroundColor: "rgba(49,49,49)",
        backdropFilter: "blur(15px)",
      }}
    >
      <Box sx={style}>
        <ButtonSecondary onClick={handleClose}>Close</ButtonSecondary>
      </Box>
    </Modal>
  );
}
