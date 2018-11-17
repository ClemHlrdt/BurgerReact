import React from "react";
import Aux from "../../hoc/Aux";
import classes from "./Layout.css";
// Wrapper component
const layout = props => (
  <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div> {/* NavBar*/}
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default layout;
