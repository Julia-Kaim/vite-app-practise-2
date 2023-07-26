// import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";

import styles from "./Homepage.module.css";

export default function GroupOrientation() {
  return (
    <Box
      className={styles.list}
      sx={{
        display: "flex",
        "& > *": {
          m: 1,
        },
      }}
    >
      <ButtonGroup
        className={styles.list}
        orientation="vertical"
        aria-label="vertical outlined button group"
      >
        <Button className={styles.list_element} key="one" href="/Lost">
          I have lost a pet
        </Button>

        <Button className={styles.list_element} key="two">
          Pets to adopt
        </Button>

        <Button className={styles.list_element} key="three">
          Animals shelters
        </Button>
      </ButtonGroup>
    </Box>
  );
}
