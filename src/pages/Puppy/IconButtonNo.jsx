import IconButton from "@mui/material/IconButton";

import styles from "./Puppy.module.css";
import paw from "./pawTeal.svg";
import heart from "./BrokenHeart.svg";

export default function IconPawNo() {
  return (
    <IconButton aria-label="go" href="/Puppy">
      <img src={paw} alt="paw" width="50" height="50" />
      <img
        className={styles.Option}
        src={heart}
        alt="broken heart"
        width="30"
        height="30"
      ></img>
    </IconButton>
  );
}
