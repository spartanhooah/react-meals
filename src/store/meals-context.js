import React, { useState } from "react";

const MealsContext = React.createContext({
  meals: [],
  totalPrice: 0,
  addMeal: (meal, count) => {},
  removeMeal: (id) => {}
});

export default MealsContext;
