import React from "react";

import PropTypes from "prop-types";

import styles from "./Homepage.module.css";
import reactLogo from "../Homepage/logo.jpg";

const Homepage = () => {
  return (
    <div>
      <img src={reactLogo} alt="react logo" className={styles.logo} />

      <h1 className={styles.header}>You are looking for...</h1>
      <ul className={styles.list}>
        <li className={styles.list_element}>I have lost a pet</li>
        <li className={styles.list_element}>Pets to adopt</li>
        <li className={styles.list_element}>Animals shelters</li>
      </ul>
    </div>
  );
};

Homepage.propTypes = {
  reactLogo: PropTypes.string.isRequired,
};
export default Homepage;
