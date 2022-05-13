import { useState } from "react";
import MealsContext from "./meals-context";

const MealsProvider = (props) => {
  let [meals, setMeals] = useState([]);
  const addMealHandler = (meal, count) => {
    setMeals([...meals, { meal: meal, count: count }]);
  };

  const removeMealHandler = (id) => {};

  const mealsContext = {
    meals: [],
    totalAmount: 0,
    addItem: addMealHandler,
    removeItem: removeMealHandler,
  };

  return <MealsContext.Provider value={mealsContext}>{props.children}</MealsContext.Provider>;
};

export default MealsProvider;
