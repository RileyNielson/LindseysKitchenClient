import React, { useState, useEffect } from "react";
import WovenImageList from "./wovenImages";
import Chip from "@mui/material/Chip";
import stockImage from "./stockImage";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";

function Home(props) {
  const [filter, setFilter] = useState("Catagories");
  const [showCatagories, setShowCatagories] = useState([]);

  const navigate = useNavigate();

  const recipes = props.recipes;

  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecipes() {
      const response = await fetch(`http://localhost:5050/recipes/`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const recip = await response.json();

      props.setRecipes(() => {
        // document.getElementById("cardContainer") && document.getElementById("cardContainer").style.overflow = "auto";
        document.querySelector("#loadCircle") && document.querySelector("#loadCircle").classList.add("hidden");
        return recip;
      });
    }

    console.log("Getting Recipes");

    getRecipes();

    return;
  }, [recipes.length]);

  useEffect(() => {
    if (props.chosenFilter === "ShowAll") {
      getCatagories(recipes);
      document
        .getElementById("filterButtonContainer")
        .classList.remove("hidden");
      document.getElementById("catagoryTitle").classList.add("hidden");
      document.getElementById("backButton").classList.add("hidden");
    } else {
      document.querySelector("#loadCircle").classList.add("hidden");
      document.getElementById("backButton").classList.remove("hidden");
      document.getElementById("filterButtonContainer").classList.add("hidden");
      document.getElementById("catagoryTitle").classList.remove("hidden");
      setShowCatagories(() => {
        return recipes.filter((r) => r.catagories.includes(props.chosenFilter));
      });
    }

    async function getCatagories(rec) {
      const shownCatagories = props.catagories.map((c) => {
        var newArray = rec.filter((r) => r.catagories.includes(c));
        if (newArray.length > 0) {
          return {
            title: c,
            photos: newArray[0].photos,
            length: newArray.length,
          };
        } else {
          return { title: c, photos: stockImage, length: 0 };
        }
      });

      setShowCatagories(shownCatagories);
    }

    console.log("Showing Recipes");

    return;
  }, [props.chosenFilter, props.catagories]);

  function handleClick(e) {
    setFilter(e.target.innerText);
    e.preventDefault();
  }

  const styleChip = {
    backgroundColor: "lightGrey",
    "&:active": { backgroundColor: "teal", color: "white" },
    fontSize: "16px",
  };

  function backFunction() {
    setFilter("Catagories");
    props.setChosenFilter("ShowAll");
    navigate("/");
  }

  const activefilter = { backgroundColor: "teal", color: "white" };

  const filters = ["Catagories", "Tags", "Recently Added"];

  console.log(recipes);
  console.log(showCatagories);

  return (
    <div id="App-main">
      <div id="searchStrip">
        <div id="catagoryTitle" className="catagoryTitle hidden">
          <div id="catagoryHeader">{props.chosenFilter}</div>
        </div>
        <div id="filterButtonContainer" className="filterButtonContainer">
          {filters.map((f) => {
            return f === filter ? (
              <Chip
                className="filterButton"
                label={f}
                onClick={handleClick}
                size="large"
                style={activefilter}
                sx={{
                  fontSize: "16px",
                }}
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
      <WovenImageList
        recipes={recipes}
        setRecipe={props.setRecipe}
        chosenFilter={props.chosenFilter}
        setChosenFilter={props.setChosenFilter}
        showCatagories={showCatagories}
        setShowCatagories={setShowCatagories}
      />
      <div id="loadCircle" className="loadCircle">
        <CircularProgress sx={{ color: "white" }} />
      </div>
      <div
        id="backButton"
        className="hidden"
        onClick={backFunction}
        style={{ position: "absolute", left: "10px", top: "15px" }}
      >
        <ArrowBackIcon sx={{ padding: "0" }} />
      </div>
    </div>
  );
}

export default Home;
