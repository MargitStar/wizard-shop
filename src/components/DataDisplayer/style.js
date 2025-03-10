import { Box, LinearProgress, Typography } from "@mui/material";
import styled from "@emotion/styled";

export const FetcherTypography = styled(Typography)`
  text-align: center;
  font-family: Arial, sans-serif;
  font-size: 32px;
  margin: 32px;
  color: #4b5945;
`;

export const StyledLinearProgress = styled(LinearProgress)`
  height: 6px;
  background-color: #a8b5a3;
  & .MuiLinearProgress-bar {
    background-color: #4b5945;
  }
`;

export const PaginationBox = styled(Box)`
  display: flex;
  justify-content: center;
  margin: 16px;
`;

export const MagicCardBox = styled(Box)`
  margin-top: 32px;
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
`;
