import React, { useState } from "react";

const MealsContext = React.createContext({
  meals: [],
  addMeal: (meal, count) => {},
});

export const MealsContextProvider = (props) => {
  let [meals, setMeals] = useState([]);

  const addMeal = (meal, count) => {
    setMeals([...meals, {meal: meal, count: count}]);
  };

  return (
    <MealsContext.Provider value={{ meals: meals, addMeal: addMeal }}>
      {props.children}
    </MealsContext.Provider>
  );
};

export default MealsContext;
