import { Fab, Modal, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import { PersonAddAlt1Outlined, VideocamOutlined } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
const modalStyle = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", sm: "40%" },
  boxShadow: 24,
  p: 4,
  borderRadius: 4,
  bgcolor: "#000",
};

const CreatePost = ({ open, handleOpen, handleClose, mode }) => {
  return (
    <>
      <Fab
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
        {/* {...obj1, ...obj2} */}
        <Box
          sx={{
            ...modalStyle,
            bgcolor: mode === "light" ? "#fff" : "#000",
            color: mode === "light" ? "#000" : "#fff",
          }}
        >
          <Stack direction="row" alignItems="center" spacing={2} mb={2}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Typography>jhon doe</Typography>
          </Stack>
          <div className="body_form">
            <TextField
              sx={{ width: "100%" }}
              id="standard-multiline-static"
              multiline
              label={`whats on your mind user`}
              rows={3}
              defaultValue=""
              variant="standard"
            />
            <Stack direction="row" flex="1" mt={2} mb={3} spacing={2}>
              <EmojiEmotionsOutlinedIcon />
              <ImageOutlinedIcon />
              <VideocamOutlined />
              <PersonAddAlt1Outlined />
            </Stack>
            <Button variant="contained">
              post
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default CreatePost;
