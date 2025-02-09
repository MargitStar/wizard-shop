import { Box } from "@mui/material";
import styled from "@emotion/styled";

export const ErrorModalBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 500px;
  background-color: #fcebf2;
  border: none;
  border-radius: 16px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
