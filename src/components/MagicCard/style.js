import { Box, Card } from "@mui/material";
import styled from "@emotion/styled";

export const MagicCardBox = styled(Box)`
  min-width: 275px;
  max-width: 345px;
  height: 200px;
  flex: 1 1 calc(33.33% - 16px);
  margin-bottom: 2px;
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
  cursor: pointer;

  &:hover {
    background-color: #fcebf2;
  }
`;
