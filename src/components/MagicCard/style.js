import { Box, Card } from "@mui/material";
import styled from "@emotion/styled";

export const MagicCardBox = styled(Box)`
  min-width: 250px;
  max-width: 300px;
  width: 100%;
  height: 200px;
  margin-bottom: 2px;
  white-space: wrap;
`;

export const StyledMagicCard = styled(Card)`
  height: 80%;
  background-color: #d6c0b3;
  border-radius: 16px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const StyledMagicCardAsButton = styled(StyledMagicCard)`
  cursor: pointer;

  &:hover {
    background-color: #fcebf2;
  }

  &.active {
    background-color: #efb6c8;
  }
`;
