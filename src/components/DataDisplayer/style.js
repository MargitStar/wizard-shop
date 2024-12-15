import { LinearProgress, Typography } from "@mui/material";
import styled from "@emotion/styled";

export const FetcherTypography = styled(Typography)`
  text-align: center;
  font-family: Arial, sans-serif;
  font-size: 2rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
  color: #4b5945;
`;

export const StyledLinearProgress = styled(LinearProgress)`
  height: 6px;
  background-color: #a8b5a3;
  & .MuiLinearProgress-bar {
    background-color: #4b5945;
  }
`;
