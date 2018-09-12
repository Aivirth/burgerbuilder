import React from "react";
import classes from "./NavigationItem.css";
import { NavLink } from "react-router-dom";

export default props => {
  return (
    <li className={classes.NavigationItem}>
      <NavLink
        activeClassName={classes.active}
        to={props.link}
        exact={props.exact}
      >
        {props.children}
      </NavLink>
    </li>
  );
};
