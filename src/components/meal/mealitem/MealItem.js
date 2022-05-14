import { useContext } from "react";
import MealsContext from "../../../store/meals-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const mealContext = useContext(MealsContext);
  const meal = props.meal;
  const price = `$${meal.price.toFixed(2)}`;

  const addMealHandler = (amount) => {
    mealContext.addMeal(meal, amount);
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div className={classes.description}>{meal.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm meal={meal} onAddMeal={addMealHandler} />
      </div>
    </li>
  );
};

export default MealItem;
