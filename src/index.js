import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { MealsContextProvider } from "./store/meals-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MealsContextProvider>
    <App />
  </MealsContextProvider>
);
