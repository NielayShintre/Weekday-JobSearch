import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: "400px",
  maxWidth: "80%",
  maxHeight: "80vh",
  overflowY: "auto",
  backgroundColor: "rgb(255, 255, 255)",
  outline: "solid 0px",
  boxShadow: 24,
  p: "16px",
  borderRadius: "10px",
  
  boxShadow: [
    "rgba(0, 0, 0, 0.2) 0px 11px 15px -7px",
    "rgba(0, 0, 0, 0.14) 0px 24px 38px 3px",
    "rgba(0, 0, 0, 0.12) 0px 9px 46px 8px",
  ].join(","),
};

const TransitionsModal = ({ isOpen, onClose, jobDetailsFromCompany }) => {
  console.log(jobDetailsFromCompany);
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isOpen}
      onClose={onClose}
      closeAfterTransition
    >
      <Fade in={isOpen}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            <h3>Company Details</h3>
          </Typography>
          <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            {jobDetailsFromCompany}
          </Typography>
        </Box>
      </Fade>
    </Modal>
  );
};

export default TransitionsModal;