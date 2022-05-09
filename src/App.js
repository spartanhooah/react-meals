import { useContext } from "react";
import "./App.css";
import Header from "./components/header/Header";
import AvailableMeals from "./components/meal/AvailableMeals";
import MealsSummary from "./components/MealsSummary";
// import CartIcon from "./components/ui/cart/CartIcon";
import MealsContext from "./store/meals-context";

function App() {
  const ctx = useContext(MealsContext);

  return (
    <>
      <Header />
      {/* <CartIcon /> */}
      <MealsSummary />
      <AvailableMeals meals={ctx.meals} />
    </>
  );
}

export default App;
