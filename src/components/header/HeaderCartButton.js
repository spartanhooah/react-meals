import Card from "../ui/card/Card";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <Card className={classes.button}>
      <img className={classes.icon} alt="shopping cart icon" />
      <div>Your Cart</div>
    </Card>
  );
};

export default HeaderCartButton;
