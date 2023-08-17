import React, { useState } from "react";
import WovenImageList from "./wovenImages";
import Chip from "@mui/material/Chip";

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [filter, setFilter] = useState("Catagories");

  function handleClick(e) {
    console.info(e.target.innerText);
    setFilter(e.target.innerText);
    e.preventDefault();
  }

  const styleChip = {
    backgroundColor: "lightGrey",
    "&:active": { backgroundColor: "teal", color: "white" },
  };

  const activefilter = { backgroundColor: "teal", color: "white" };

  const filters = ["Catagories", "Tags", "Recently Added"];

  return (
    <div id="App-main">
      <div id="searchStrip">
        <div id="filterButtonContainer">
          {filters.map((f) => {
            console.log(f, filter);
            return f == filter ? (
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

      <div id="cardContainer">
        <WovenImageList />
      </div>
    </div>
  );
}

export default Home;
