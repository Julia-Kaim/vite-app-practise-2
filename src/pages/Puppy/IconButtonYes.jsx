import IconButton from "@mui/material/IconButton";

import styles from "./Puppy.module.css";
import paw from "./pawTeal.svg";
import heart from "./Heart.svg";

export default function IconPawYes() {
  return (
    <IconButton aria-label="go" >
      <img src={paw} alt="paw" width="50" height="50" />
      <img
        className={styles.Option}
        src={heart}
        alt="heart"
        width="30"
        height="30"
      ></img>
    </IconButton>
  );
}
