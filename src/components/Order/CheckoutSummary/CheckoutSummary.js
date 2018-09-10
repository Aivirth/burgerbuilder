import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary.css";

export default props => {
  const styles = {
    width: "100%",
    margin: "auto"
  };
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it tastes well!</h1>
      <div style={{ styles }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button clicked={props.checkoutCancelled} btnType="Danger">
        CANCEL
      </Button>
      <Button clicked={props.checkoutContinued} btnType="Success">
        CONTINUE
      </Button>
    </div>
  );
};
