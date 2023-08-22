import React, { useState } from "react";
import HeaderBar from "./components/header";
import Home from "./components/home";
import Create from "./components/create";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Recipe from "./components/recipe";

function App() {
  const [recipe, setRecipe] = useState();
  const [chosenFilter, setChosenFilter] = useState("ShowAll");
  const [recipes, setRecipes] = useState([]);
  const catagories = [
    "Appetizers",
    "Beverages",
    "Bread",
    "Breakfast",
    "Poultry",
    "Beef",
    "Pork",
    "Fish",
    "Pasta",
    "Other Main Dishes",
    "Soup",
    "Salad",
    "Sides & Veggies",
    "Sauces & Marinades",
    "Cookies",
    "Bars & Brownies",
    "Cake",
    "Frosting",
    "Cheesecake",
    "Pie",
    "Pastry",
    "Ice Cream",
    "Other Desserts",
    "Snacks",
    "Canning & Leather",
    "All",
  ];

  const tags = [
    "Sweet",
    "Savory",
  ]

  return (
    <div id="App">
      <HeaderBar recipes={recipes} setRecipe={setRecipe} setChosenFilter={setChosenFilter} />
      <Routes>
        <Route
          index
          element={
            <Home
              recipes={recipes}
              setRecipes={setRecipes}
              setRecipe={setRecipe}
              catagories={catagories}
              chosenFilter={chosenFilter}
              setChosenFilter={setChosenFilter}
            />
          }
        />
        <Route path="/create" element={<Create catagories={catagories} />} />
        <Route path="/recipe" element={<Recipe recipe={recipe} />} />
      </Routes>
    </div>
  );
}

export default App;
