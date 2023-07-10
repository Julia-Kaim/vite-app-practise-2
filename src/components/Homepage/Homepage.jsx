// import * as React from "react";

import PropTypes from "prop-types";

import styles from "./Homepage.module.css";
import reactLogo from "../Homepage/logo.jpg";
import GroupOrientation from "./Buttons";

import CssBaseline from "@mui/material/CssBaseline";

import Container from "@mui/material/Container";

// export default function SimpleContainer() {
//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <Container maxWidth="sm">
//         <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
//       </Container>
//     </React.Fragment>
//   );
// }

export const Homepage = () => {
  return (
    <div>
      <CssBaseline />
      <Container maxWidth="sm">
        <img src={reactLogo} alt="react logo" className={styles.logo} />

        <h1 className={styles.header}>You are looking for...</h1>
        <GroupOrientation></GroupOrientation>
        {/* <ul className={styles.list}>
          <li className={styles.list_element}>I have lost a pet</li>
          <li className={styles.list_element}>Pets to adopt</li>
          <li className={styles.list_element}>Animals shelters</li>
        </ul> */}
      </Container>
    </div>
  );
};

Homepage.propTypes = {
  reactLogo: PropTypes.string.isRequired,
};
// export default Homepage;
