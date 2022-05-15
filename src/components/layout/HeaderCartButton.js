import { useContext } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../cart/CartIcon";
import MealsContext from "../../store/meals-context";

const HeaderCartButton = ({ showCart }) => {
  const context = useContext(MealsContext);

  const numberOfMeals = context.meals.reduce((currentCount, meal) => {
    return currentCount + meal.count;
  }, 0);

  return (
    <button className={classes.button} onClick={showCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfMeals}</span>
    </button>
  );
};

export default HeaderCartButton;
