import { useContext, useState } from "react";
import "./App.css";
import Cart from "./components/cart/Cart";
import Header from "./components/layout/Header";
import AvailableMeals from "./components/meal/AvailableMeals";
import MealsSummary from "./components/ui/MealsSummary";
import MealsContext from "./store/meals-context";
import MealsProvider from "./store/MealsProvider";

function App() {
  const [showCart, setShowCart] = useState(false);
  const ctx = useContext(MealsContext);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <MealsProvider>
      {showCart && (
        <Cart onHideCart={hideCartHandler} />
      )}
      <Header onShowCart={showCartHandler} />
      <MealsSummary />
      <AvailableMeals meals={ctx.meals} />
    </MealsProvider>
  );
}

export default App;
