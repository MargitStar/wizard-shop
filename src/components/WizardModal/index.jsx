import React from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { CircularProgress } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { MagicModalBox, MagicModalBoxButton } from "./style";

export default function WizardModal({
  open,
  handleClose,
  id,
  useModalDataQuery,
  ModalContent,
}) {
  const { data, isLoading, error } = useModalDataQuery(id);
  if (error) {
    console.error("An error occured:", error);
    return (
      <Modal open={open} onClose={handleClose}>
        <MagicModalBox>{error}</MagicModalBox>
      </Modal>
    );
  }

  return (
    <Modal open={open} onClose={handleClose}>
      <MagicModalBox>
        <MagicModalBoxButton onClick={handleClose}>
          <CloseIcon />
        </MagicModalBoxButton>
        {isLoading ? (
          <>
            <CircularProgress />
            <Typography sx={{ mt: 2 }}>Loading...</Typography>
          </>
        ) : (
          <ModalContent data={data} />
        )}
      </MagicModalBox>
    </Modal>
  );
}
