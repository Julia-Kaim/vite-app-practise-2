// import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";

import styles from "./Homepage.module.css";

// const buttons = [
//   <Button className={styles.list_element} key="one">
//     I have lost a pet
//   </Button>,
//   <Button className={styles.list_element} key="two">
//     Pets to adopt
//   </Button>,
//   <Button className={styles.list_element} key="three">
//     Animals shelters
//   </Button>,
// ];

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
      {/* <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="contained"
      >
        {buttons}
      </ButtonGroup>
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="text"
      >
        {buttons}
      </ButtonGroup> */}
    </Box>
  );
}
