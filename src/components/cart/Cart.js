import { useContext } from "react";

import classes from "./Cart.module.css";
import Modal from "../ui/modal/Modal";
import MealsContext from "../../store/meals-context";
import CartItem from "./CartItem";

const Cart = ({ onHideCart }) => {
  const cartContext = useContext(MealsContext);

  const totalPrice = `$${cartContext.totalPrice.toFixed(2)}`;
  const hasItems = cartContext.meals.length > 0;

  const removeMealHandler = (meal) => {
    cartContext.removeMeal(meal);
  };

  const addMealHandler = (meal) => {
    cartContext.addMeal(meal, 1);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartContext.meals.map((meal) => (
        <CartItem
          key={meal.id}
          name={meal.name}
          count={meal.count}
          price={meal.price}
          onAdd={() => addMealHandler(meal)}
          onRemove={() => removeMealHandler(meal)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onHideCart={onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalPrice}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onHideCart}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
