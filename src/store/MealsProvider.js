import { useReducer } from "react";
import MealsContext from "./meals-context";

const defaultMealsState = {
  meals: [],
  totalPrice: 0,
};

const mealsReducer = (state, action) => {
  const existingMealIndex = state.meals.findIndex(
    (meal) => meal.id === action.meal.id
  );
  const existingMeal = state.meals[existingMealIndex];

  if (action.type === "ADD_MEAL") {
    const updatedTotalPrice =
      state.totalPrice + action.meal.price * action.meal.count;

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
  }

  if (action.type === "REMOVE_MEAL") {
    const updatedTotalPrice = state.totalPrice - existingMeal.price;

    let updatedMeals;

    if (existingMeal.count === 1) {
      updatedMeals = state.meals.filter((meal) => meal.id !== action.meal.id);
    } else {
      const updatedMeal = {...existingMeal, count: existingMeal.count - 1}
      updatedMeals = [...state.meals];
      updatedMeals[existingMealIndex] = updatedMeal;
    }

    return {
      meals: updatedMeals,
      totalPrice: updatedTotalPrice,
    };
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

  const removeMealHandler = (meal) => {
    dispatchMealsAction({ type: "REMOVE_MEAL", meal: meal });
  };

  const mealsContext = {
    meals: mealsState.meals,
    totalPrice: mealsState.totalPrice,
    addMeal: addMealHandler,
    removeMeal: removeMealHandler,
  };

  return (
    <MealsContext.Provider value={mealsContext}>
      {props.children}
    </MealsContext.Provider>
  );
};

export default MealsProvider;
