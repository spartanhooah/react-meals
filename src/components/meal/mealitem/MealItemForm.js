import { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [mealCount, setMealCount] = useState(0);
  const [isAmountValid, setIsAmountValid] = useState(true);
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
          min="1"
          max="5"
          placeholder="0"
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
