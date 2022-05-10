import classes from "./Header.module.css";
import meals from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes.mainImage}>
        <img src={meals} alt="lots of meals on a table" />
      </div>
    </>
  );
};

export default Header;
