import { useContext, useState } from "react";
import MealsContext from "../../../store/meals-context";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [mealCount, setMealCount] = useState(0);
  const ctx = useContext(MealsContext);

  const mealCountHandler = (event) => {
    setMealCount(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    ctx.addMeal(props.meal, mealCount);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.input}>
        <label htmlFor={'amount'}>Amount</label>
        <input type="number" inputMode="numeric" onChange={mealCountHandler} />
      </div>
      <button type="submit">
        + Add
      </button>
    </form>
  );
};

export default MealItemForm;
