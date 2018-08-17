import React from "react";
import classes from "./MenuButton.css";

export default props => {
  return (
    <div className={classes.MenuButton} onClick={props.openMenu}>
      <div />
      <div />
      <div />
    </div>
  );
};
