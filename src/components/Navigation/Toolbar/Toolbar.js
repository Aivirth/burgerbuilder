import React from "react";
import classes from "./Toolbar.css";
import Logo from "../../Logo/Logo";

export default props => {
  return (
    <header className={classes.Toolbar}>
      <div>Menu</div>
      <Logo />
      <nav>Navigation</nav>
    </header>
  );
};
