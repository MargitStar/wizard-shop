import React, { useState, useEffect } from "react";

import { CardContent } from "@mui/material";
import {
  MagicCardBox,
  StyledMagicCard,
  StyledMagicCardAsButton,
} from "./style";
import MagicModal from "../MagicModal";
import { useNavigate } from "react-router";

export default function MagicCard({
  Content,
  data,
  useModalDataQuery,
  ModalContent,
  showModal,
  homeModal,
  handleOpenHomeModal,
  setSelectedCardId,
  selectedCardId,
}) {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedCardId === data?.id) setOpenModal(true);
  }, [selectedCardId, data?.id]);

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedCardId("");
    navigate(``, { replace: true });
  };

  const handleOpenModal = () => {
    window.history.pushState(
      "",
      "",
      window.location.href + `?modal=${data?.id}`
    );
    setSelectedCardId(data?.id);
    setOpenModal(true);
  };
  return (
    <>
      <MagicCardBox>
        {showModal ? (
          <StyledMagicCardAsButton
            variant="outlined"
            onClick={handleOpenModal}
            className={selectedCardId === data?.id ? "active" : undefined}
          >
            <CardContent>
              <Content data={data} />
            </CardContent>
          </StyledMagicCardAsButton>
        ) : homeModal ? (
          <StyledMagicCardAsButton
            variant="outlined"
            onClick={() => {
              handleOpenHomeModal(data?.id);
            }}
          >
            <CardContent>
              <Content data={data} />
            </CardContent>
          </StyledMagicCardAsButton>
        ) : (
          <StyledMagicCard variant="outlined">
            <CardContent>
              <Content data={data} />
            </CardContent>
          </StyledMagicCard>
        )}
      </MagicCardBox>
      {openModal && showModal && (
        <MagicModal
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
