import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  salad: 0,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};
export default class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 2,
      bacon: 1,
      cheese: 3,
      meat: 1
    },
    totalPrice: 4
  };

  addIngredient = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;

    const priceAddition = INGREDIENT_PRICES[type];

    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    });
  };

  removeIngredient = type => {};

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls ingredientAdded={this.addIngredient} />
      </Aux>
    );
  }
}
