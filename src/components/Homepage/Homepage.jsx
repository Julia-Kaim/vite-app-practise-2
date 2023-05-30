import React from "react";

import PropTypes from "prop-types";

import styles from "./Homepage.module.css";
// import { ReactComponent as Icon } from "../assets/logo.svg";
import reactLogo from "../Homepage/logo.jpg";

// const MyComponent = () => {
//   return (
//     <div>
//       <Icon />
//     </div>
//   );
// };

export const Homepage = ({ reactLogo }) => {
  return (
    <div>
      <h1>Image in project</h1>
      <img src={reactLogo} alt="react logo" className={styles.logo} />
    </div>
  );
};

// function Homepage() {
//   // Import result is the URL of your image
//   return <img src={reactLogo} alt="Logo" />;
// }

// export default Homepage;

// export default MyComponent;
Homepage.propTypes = {
  reactLogo: PropTypes.string.isRequired,
};
