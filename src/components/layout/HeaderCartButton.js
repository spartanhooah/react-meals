import classes from "./HeaderCartButton.module.css";
import CartIcon from "../cart/CartIcon";

const HeaderCartButton = ({showCart}) => {
  return (
    <button className={classes.button} onClick={showCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
