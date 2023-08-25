import React, { useState, useEffect } from "react";
import HeaderBar from "./components/header";
import Home from "./components/home";
import Create from "./components/create";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Recipe from "./components/recipe";
import Edit from "./components/edit";
import EditRecipe from "./components/editRecipe";

function App() {
  const [recipe, setRecipe] = useState();
  const [chosenFilter, setChosenFilter] = useState("ShowAll");
  const [recipes, setRecipes] = useState([]);
  const [filter, setFilter] = useState("Catagories");
  const [catagory, setCatagory] = useState("");
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
    "Dairy Free",
    "Freezer Meal",
    "Good For Kids",
    "Holiday",
  ];

  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecipes() {
      const response = await fetch(`https://18.219.181.110/recipes`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const recip = await response.json();

      setRecipes(() => {
        document.querySelector("#loadCircle") &&
          document.querySelector("#loadCircle").classList.add("hidden");
        return recip;
      });
    }

    getRecipes();

    return;
  }, [recipes.length]);

  return (
    <div id="App">
      <HeaderBar
        filter={filter}
        recipes={recipes}
        setRecipe={setRecipe}
        setChosenFilter={setChosenFilter}
        setFilter={setFilter}
      />
      <Routes>
        <Route
          index
          element={
            <Home
              recipes={recipes}
              setRecipes={setRecipes}
              setRecipe={setRecipe}
              catagories={catagories}
              tags={tags}
              chosenFilter={chosenFilter}
              setChosenFilter={setChosenFilter}
              filter={filter}
              setFilter={setFilter}
              catagory={catagory}
              setCatagory={setCatagory}
            />
          }
        />
        <Route
          path="/create"
          element={<Create catagories={catagories} tags={tags} />}
        />
        <Route
          path="/edit"
          element={
            <Edit
              recipes={recipes}
              setRecipes={setRecipes}
              setRecipe={setRecipe}
              catagories={catagories}
              tags={tags}
              chosenFilter={chosenFilter}
              setChosenFilter={setChosenFilter}
              filter={filter}
              setFilter={setFilter}
              catagory={catagory}
              setCatagory={setCatagory}
            />
          }
        />
        <Route
          path="/editrecipe"
          element={
            <EditRecipe catagories={catagories} tags={tags} recipe={recipe} />
          }
        />
        <Route
          path="/recipe"
          element={
            <Recipe
              recipe={recipe}
              chosenFilter={chosenFilter}
              setChosenFilter={setChosenFilter}
              catagory={catagory}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
