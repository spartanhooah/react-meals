import classes from "./MealItem.module.css";

const MealItem = (props) => {
  return (
    <li className={classes.meal}>
      <h3>{props.meal.name}</h3>
      <div className={classes.description}>{props.meal.description}</div>
      <div className={classes.price}>{props.meal.price}</div>
    </li>
  );
};

export default MealItem;
