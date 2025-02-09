import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ErrorModalBox } from "./style";
import { Box } from "@mui/material";

export default function ErrorModal({ openModal, handleClose, error }) {
  console.log("Open MOdal", openModal);
  return (
    <Modal open={openModal} onClose={handleClose}>
      <ErrorModalBox>
        <Box>
          <Typography variant="h6" component="div">
            Error Occured
          </Typography>
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 14 }}
          >
            {error?.data?.title}
          </Typography>
        </Box>
      </ErrorModalBox>
    </Modal>
  );
}
