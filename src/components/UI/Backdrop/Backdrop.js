import React from "react";
import classes from "./Backdrop.css";

export default props =>
  props.show ? (
    <div onClick={props.clicked} className={classes.Backdrop} />
  ) : null;
