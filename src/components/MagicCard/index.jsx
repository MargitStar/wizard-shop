import React from "react";

import { CardContent } from "@mui/material";
import {
  MagicCardBox,
  StyledMagicCard,
  StyledMagicCardAsButton,
} from "./style";

export default function MagicCard({
  Content,
  data,
  isClickable = true,
  handleOpenModal,
  selectedCardId,
}) {
  return (
    <>
      <MagicCardBox>
        {isClickable ? (
          <StyledMagicCardAsButton
            variant="outlined"
            onClick={() => handleOpenModal(data?.id)}
            className={selectedCardId === data?.id ? "active" : undefined}
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
    </>
  );
}
