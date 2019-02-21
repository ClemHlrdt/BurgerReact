import React from "react";
import { withRouter } from 'react-router-dom';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import classes from "./Burger.css";
const burger = props => {
  console.log(props);
  //Get the keys of the ingredient object
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      // For each key, loop...
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        // Create a BurgerIngredient component based on the number of element
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  //console.log(transformedIngredients);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      {/* <BurgerIngredient type="cheese" />
      <BurgerIngredient type="meat" /> */}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default withRouter(burger);
