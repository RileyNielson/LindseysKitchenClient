import React, { useState, useEffect } from "react";
import WovenImageList from "./wovenImages";
import Chip from "@mui/material/Chip";

function Home(props) {
  const [recipes, setRecipes] = useState([]);
  const [filter, setFilter] = useState("Catagories");

  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecipe() {
      const response = await fetch(`http://localhost:5050/recipes/`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const recipes = await response.json();
      setRecipes(recipes);
    }

    getRecipe();

    return;
  }, [recipes.length]);

  function handleClick(e) {
    setFilter(e.target.innerText);
    e.preventDefault();
  }

  const styleChip = {
    backgroundColor: "lightGrey",
    "&:active": { backgroundColor: "teal", color: "white" },
  };

  const activefilter = { backgroundColor: "teal", color: "white" };

  const filters = ["Catagories", "Tags", "Recently Added"];

  console.log(recipes);

  return (
    <div id="App-main">
      <div id="searchStrip">
        <div id="filterButtonContainer">
          {filters.map((f) => {
            return f === filter ? (
              <Chip
                className="filterButton"
                label={f}
                onClick={handleClick}
                size="large"
                style={activefilter}
              />
            ) : (
              <Chip
                className="filterButton"
                label={f}
                name={f}
                size="large"
                onClick={handleClick}
                sx={styleChip}
              />
            );
          })}
        </div>
      </div>

      <WovenImageList recipes={recipes} setRecipe={props.setRecipe} />
    </div>
  );
}

export default Home;
