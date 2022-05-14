import { useContext, useRef, useState } from "react";
import MealsContext from "../../../store/meals-context";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [mealCount, setMealCount] = useState(0);
  const [isAmountValid, setIsAmountValid] = useState(true);
  const ctx = useContext(MealsContext);
  const amountInputRef = useRef();

  const mealCountHandler = (event) => {
    setMealCount(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = +amountInputRef.current.value;

    if (enteredAmount < 0 || enteredAmount > 5) {
      setIsAmountValid(false);

      return;
    }

    props.onAddMeal(enteredAmount);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.input}>
        <label htmlFor={"amount"}>Amount</label>
        <input
          ref={amountInputRef}
          type="number"
          inputMode="numeric"
          onChange={mealCountHandler}
        />
      </div>
      <button type="submit">+ Add</button>
      {!isAmountValid && (
        <p>Please enter a valid amount for this meal (1-5).</p>
      )}
    </form>
  );
};

export default MealItemForm;
