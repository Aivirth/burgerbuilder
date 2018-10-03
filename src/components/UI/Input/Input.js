import React from "react";
import classes from "./Input.css";

export default props => {
  const { elementType, elementConfig, value, changed } = props;

  let inputElement = null;
  switch (elementType) {
    case "input":
      inputElement = (
        <input
          className={classes.InputElement}
          {...elementConfig}
          value={value}
          onChange={changed}
        />
      );
      break;

    case "textarea":
      inputElement = (
        <textarea
          className={classes.InputElement}
          {...elementConfig}
          value={value}
          onChange={changed}
        />
      );
      break;

    case "select":
      inputElement = (
        <select
          className={classes.InputElement}
          value={props.value}
          onChange={changed}
        >
          {elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;

    default:
      inputElement = (
        <input
          className={classes.InputElement}
          {...props.elementConfig}
          value={props.value}
          onChange={changed}
        />
      );
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};
