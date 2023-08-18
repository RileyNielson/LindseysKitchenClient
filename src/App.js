import React, {useState} from "react";
import HeaderBar from "./components/header";
import Home from "./components/home";
import Create from "./components/create";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Recipe from "./components/recipe";

function App() {
  const [recipe, setRecipe] = useState()
  const catagories = [
    "Appetizers",
    "Bars & Brownies",
    "Beef",
    "Beverages",
    "Bread",
    "Breakfast",
    "Cake",
    "Canning & Leather",
    "Cheesecake",
    "Cookies",
    "Fish",
    "Frosting",
    "Ice Cream",
    "Other Desserts",
    "Other Main Dishes",
    "Pasta",
    "Pastry",
    "Pie",
    "Pork",
    "Poultry",
    "Salad",
    "Sauces & Marinades",
    "Sides & Veggies",
    "Snacks",
    "Soup",
  ];


  return (
    <div id="App">
      <HeaderBar />
      <Routes>
        <Route index element={<Home setRecipe={setRecipe} catagories={catagories}/>} />
        <Route path="/create" element={<Create catagories={catagories}/>} />
        <Route path="/recipe" element={<Recipe recipe={recipe}/>} />
      </Routes>
    </div>
  );
}

export default App;
