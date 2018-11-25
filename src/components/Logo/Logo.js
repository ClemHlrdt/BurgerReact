import React from "react";

// import to get the path of the image
import burgerLogo from "../../assets/images/burger-logo.png";

import classes from "./Logo.css";
const logo = props => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="MyBurger" />
  </div>
);

export default logo;
