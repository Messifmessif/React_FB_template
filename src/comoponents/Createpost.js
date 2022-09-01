import { Fab, Modal, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/system";

const modalStyle = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "#fff",
  boxShadow: 24,
  p: 4,
  borderRadius: 3,
  ["@media (max-width:400px)"]: {
    width: "90%",
  },
};

const CreatePost = ({ open, handleOpen, handleClose }) => {
  return (
    <>
      <Fab
        color="secondary"
        aria-label="add"
        sx={{ position: "fixed", bottom: "5%", left: { xs: "42%", sm: 70 } }}
        onClick={handleOpen}
      >
        <AddIcon />
      </Fab>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            color="gray"
          >
            creat a post
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default CreatePost;
