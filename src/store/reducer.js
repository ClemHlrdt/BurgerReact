import * as actionTypes from './actions';

const initialState = {
  ingredients: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0
  },
  totalPrice: 4,
};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state, // copy state /!\ it doesn't create a deep clone
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName]+1 // Add a new ingredient
        }
      };
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName]-1  // Add a new ingredient
        }
      };
    default: 
      return state;
  }
};

export default reducer;