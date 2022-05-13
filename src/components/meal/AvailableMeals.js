import React, { Fragment } from "react";
import Card from "../ui/card/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./mealitem/MealItem";
import MealItemForm from "./mealitem/MealItemForm";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A German specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  return (
    <Card className={classes.meals}>
      <ul>
        {DUMMY_MEALS.map((meal) => (
          <Fragment key={meal.id}>
            <MealItem meal={meal} />
            <MealItemForm meal={meal} />
          </Fragment>
        ))}
      </ul>
    </Card>
  );
};

export default AvailableMeals;
