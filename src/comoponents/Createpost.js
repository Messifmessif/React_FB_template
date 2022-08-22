import { Fab, Modal, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/system";

const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#fff",
    boxShadow: 24,
    p: 4,
  };

const CreatePost = ({open,setOpen,handleOpen}) => {
    
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
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default CreatePost;
