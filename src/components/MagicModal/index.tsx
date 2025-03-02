import React from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { CircularProgress } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { MagicModalBox, MagicModalBoxButton } from "./style";
import ErrorModal from "../ErrorModal";
import MagicCardData from "../shared/types/MagicCardData";
import ErrorProp from "../shared/types/Error";

type MagicModalProps = {
  open: boolean;
  handleClose: () => void;
  id: string;
  useModalDataQuery: (id: string) => {
    data: MagicCardData;
    isLoading: boolean;
    error?: ErrorProp;
  };
  ModalContent: React.FC<{ data: MagicCardData }>;
};

export default function MagicModal({
  open,
  id,
  ModalContent,
  useModalDataQuery,
  handleClose,
}: MagicModalProps) {
  const { data, isLoading, error } = useModalDataQuery(id);

  if (error) {
    console.error("Error in Magic Modal >>>", error);
    return (
      <ErrorModal openModal={true} error={error} handleClose={handleClose} />
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
