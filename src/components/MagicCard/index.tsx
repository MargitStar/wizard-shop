import React from "react";

import { CardContent } from "@mui/material";
import {
  MagicCardBox,
  StyledMagicCard,
  StyledMagicCardAsButton,
} from "./style";
import MagicCardData from "../shared/types/MagicCardData";

type MagicCardProps = {
  data: MagicCardData;
  isClickable?: boolean;
  selectedCardId: string | null;
  Content: React.FC<{ data: MagicCardData }>;
  handleOpenModal?: (id: string | undefined) => void;
};

const MagicCard = ({
  Content,
  data,
  isClickable = true,
  handleOpenModal,
  selectedCardId,
}: MagicCardProps) => {
  return (
    <>
      <MagicCardBox>
        {isClickable ? (
          <StyledMagicCardAsButton
            variant="outlined"
            onClick={() => handleOpenModal && handleOpenModal(data?.id)}
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
};

export default MagicCard;
