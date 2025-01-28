import React, { useState } from "react";

import { CardContent } from "@mui/material";
import { MagicCardBox, StyledMagicCard } from "./style";
import WizardModal from "../WizardModal";

export default function MagicCard({
  Content,
  data,
  useModalDataQuery,
  ModalContent,
}) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(false);

  const handleCloseModal = () => setOpenModal(false);
  const handleOpenModal = () => {
    setOpenModal(true);
    setSelectedCardId(data?.id);
  };
  return (
    <>
      <MagicCardBox>
        <StyledMagicCard variant="outlined" onClick={handleOpenModal}>
          <CardContent>
            <Content data={data} />
          </CardContent>
        </StyledMagicCard>
      </MagicCardBox>
      {openModal && (
        <WizardModal
          open={openModal}
          handleClose={handleCloseModal}
          id={selectedCardId}
          useModalDataQuery={useModalDataQuery}
          ModalContent={ModalContent}
        />
      )}
    </>
  );
}
