import { useContext, useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../cart/CartIcon";
import MealsContext from "../../store/meals-context";

const HeaderCartButton = ({ showCart }) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const context = useContext(MealsContext);

  const meals = context.meals;

  const numberOfMeals = meals.reduce((currentCount, meal) => {
    return currentCount + meal.count;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (meals.length === 0) {
      return;
    }

    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [meals]);

  return (
    <button className={btnClasses} onClick={showCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfMeals}</span>
    </button>
  );
};

export default HeaderCartButton;
