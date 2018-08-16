import React from "react";
import classes from "./Toolbar.css";

export default props => {
  return (
    <header className={classes.Toolbar}>
      <div>Menu</div>
      <div>LOGO</div>
      <nav>Navigation</nav>
    </header>
  );
};
