import React from "react";
import classes from "./Input.css";

export default props => {
  const { elementType, elementConfig, value, changed } = props;
  const inputClasses = [classes.inputElement];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.Invalid);
  }

  const inputClassesAfterCheck = inputClasses.join(" ");

  let inputElement = null;
  switch (elementType) {
    case "input":
      inputElement = (
        <input
          className={inputClassesAfterCheck}
          {...elementConfig}
          value={value}
          onChange={changed}
        />
      );
      break;

    case "textarea":
      inputElement = (
        <textarea
          className={inputClassesAfterCheck}
          {...elementConfig}
          value={value}
          onChange={changed}
        />
      );
      break;

    case "select":
      inputElement = (
        <select
          className={inputClassesAfterCheck}
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
          className={inputClassesAfterCheck}
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
