import classes from "./Header.module.css";
import meals from "../../meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

export default function Header() {
  return (
    <>
      <header className={classes.header}>
        ReactMeals
        <HeaderCartButton />
      </header>
      <div className={classes.mainImage}>
        <img src={meals} alt="lots of meals on a table" />
      </div>
    </>
  );
}
