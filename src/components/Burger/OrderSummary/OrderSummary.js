import React from "react";
import Button from "../../UI/Button/Button";

export default props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span> :{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <React.Fragment>
      <h3>
        Your Order : <strong>{props.totalPrice}$</strong>
      </h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checkout ?</p>
      <Button clicked={props.purchaseCancelled} btnType="Danger">
        Cancel
      </Button>
      <Button clicked={props.purchaseContinued} btnType="Success">
        Continue
      </Button>
    </React.Fragment>
  );
};
