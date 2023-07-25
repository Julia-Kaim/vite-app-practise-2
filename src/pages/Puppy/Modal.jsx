import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
// import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import HappyDog from "./HappyDog.svg";
// import IconPawYes from "./IconButtonYes";
import styles from "./Puppy.module.css";

import paw from "./pawTeal.svg";
import heart from "./Heart.svg";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <IconPawYes onClick={handleOpen}></IconPawYes> */}
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <IconButton aria-label="go" onClick={handleOpen}>
        <img src={paw} alt="paw" width="50" height="50" />
        <img
          className={styles.Option}
          src={heart}
          alt="heart"
          width="30"
          height="30"
        ></img>
      </IconButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box>
            <img
              className={styles.Modal}
              src={HappyDog}
              alt="paw"
              width="450"
              height="450"
            />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
