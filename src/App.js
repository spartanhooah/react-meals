import { useContext } from "react";
import "./App.css";
import Cart from "./components/cart/Cart";
import Header from "./components/layout/Header";
import AvailableMeals from "./components/meal/AvailableMeals";
import MealsSummary from "./components/ui/MealsSummary";
import MealsContext from "./store/meals-context";

function App() {
  const ctx = useContext(MealsContext);

  return (
    <>
      <Cart />
      <Header />
      <MealsSummary />
      <AvailableMeals meals={ctx.meals} />
    </>
  );
}

export default App;
