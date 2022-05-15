import { useReducer } from "react";
import MealsContext from "./meals-context";

const defaultMealsState = {
  meals: [],
  totalPrice: 0,
};

const mealsReducer = (state, action) => {
  if (action.type === "ADD_MEAL") {
    const updatedTotalPrice =
      state.totalPrice + action.meal.price * action.meal.count;
    const existingMealIndex = state.meals.findIndex(
      (meal) => meal.id === action.meal.id
    );

    const existingMeal = state.meals[existingMealIndex];
    let updatedMeals;

    if (existingMeal) {
      let updatedMeal;
      updatedMeal = {
        ...existingMeal,
        count: existingMeal.count + action.meal.count,
      };

      updatedMeals = [...state.meals];
      updatedMeals[existingMealIndex] = updatedMeal;
    } else {
      updatedMeals = state.meals.concat(action.meal);
    }

    return {
      meals: updatedMeals,
      totalPrice: updatedTotalPrice,
    };
  } else if (action.type === "REMOVE_MEAL") {
  }

  return defaultMealsState;
};

const MealsProvider = (props) => {
  const [mealsState, dispatchMealsAction] = useReducer(
    mealsReducer,
    defaultMealsState
  );

  const addMealHandler = (meal, count) => {
    dispatchMealsAction({ type: "ADD_MEAL", meal: { ...meal, count: count } });
  };

  const removeMealHandler = (id) => {
    dispatchMealsAction({ type: "REMOVE_MEAL", id: id });
  };

  const mealsContext = {
    meals: mealsState.meals,
    totalPrice: mealsState.totalPrice,
    addMeal: addMealHandler,
    removeItem: removeMealHandler,
  };

  return (
    <MealsContext.Provider value={mealsContext}>
      {props.children}
    </MealsContext.Provider>
  );
};

export default MealsProvider;
