import IconButton from "@mui/material/IconButton";

import paw from "./paw.svg";

export default function IconPaw() {
  return (
    <IconButton aria-label="go" href="/Puppy">
      <img src={paw} alt="paw" width="50" height="50" />
    </IconButton>
  );
}
