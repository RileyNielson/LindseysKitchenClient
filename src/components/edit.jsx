import React, { useState, useEffect } from "react";
import WovenImageList from "./wovenImagesEdit";
import stockImage from "./stockImage";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";

function Edit(props) {
  const setFilter = props.setFilter;
  const [showCatagories, setShowCatagories] = useState([]);
  const catagory = props.catagory;
  const setCatagory = props.setCatagory;

  const navigate = useNavigate();

  const recipes = props.recipes;

  // This method fetches the records from the database.
  useEffect(() => {
    
    async function getRecipes() {
      const response = await fetch(`https://lindseyskitchenapi.onrender.com/recipes`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const recip = await response.json();

      props.setRecipes(() => {
        document.querySelector("#loadCircle") &&
          document.querySelector("#loadCircle").classList.add("hidden");
        return recip;
      });
    }

    getRecipes();

    return;
  }, [recipes, props]);

  useEffect(() => {
    if (props.filter === "Catagories") {
      if (props.chosenFilter === "ShowAll") {
        getCatagories(recipes);
        document.getElementById("catagoryTitle").classList.add("hidden");
        document.getElementById("backButton").classList.add("hidden");
      } else if (props.catagories.includes(props.chosenFilter)) {
        setCatagory(props.chosenFilter);
        getTags(
          recipes.filter((r) => r.catagories.includes(props.chosenFilter))
        );
        document.querySelector("#loadCircle").classList.add("hidden");
        document.getElementById("backButton").classList.remove("hidden");
        document.getElementById("catagoryTitle").classList.remove("hidden");
      } else {
        document.querySelector("#loadCircle").classList.add("hidden");
        document.getElementById("backButton").classList.remove("hidden");
        document.getElementById("catagoryTitle").classList.remove("hidden");
        setShowCatagories(() => {
          return recipes.filter(
            (r) =>
              r.tags.includes(props.chosenFilter) &&
              r.catagories.includes(catagory)
          );
        });
      }
    } else if (props.filter === "Tags") {
      if (props.chosenFilter === "ShowAll") {
        getTags(recipes);
        document.getElementById("catagoryTitle").classList.add("hidden");
        document.getElementById("backButton").classList.add("hidden");
      } else {
        document.querySelector("#loadCircle").classList.add("hidden");
        document.getElementById("backButton").classList.remove("hidden");
        document.getElementById("catagoryTitle").classList.remove("hidden");
        setShowCatagories(() => {
          return recipes.filter((r) => r.tags.includes(props.chosenFilter));
        });
      }
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

    async function getTags(rec) {
      const shownTags = props.tags.map((c) => {
        var newArray = rec.filter((r) => r.tags.includes(c));
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

      setShowCatagories(shownTags);
    }

    return;
  }, [props.chosenFilter, props.catagories, catagory, props.filter, props.tags, recipes, setCatagory]);

  function backFunction() {
    setFilter("Catagories");
    props.setChosenFilter("ShowAll");
    navigate("/");
  }

  console.log(recipes);
  console.log(showCatagories);

  return (
    <div id="App-main">
      <div id="backgroundStripes">
        <div className="stripe teal"></div>
        <div className="stripe grey"></div>
        <div className="stripe teal"></div>
        <div className="stripe grey"></div>
        <div className="stripe teal"></div>
      </div>
      {props.chosenFilter !== "ShowAll" && (
        <div id="catagoryTitle">{props.chosenFilter}</div>
      )}
      <WovenImageList
        recipes={recipes}
        setRecipe={props.setRecipe}
        chosenFilter={props.chosenFilter}
        setChosenFilter={props.setChosenFilter}
        showCatagories={showCatagories}
        setShowCatagories={setShowCatagories}
        catagories={props.catagories}
      />
      <div id="loadCircle" className="loadCircle">
        <CircularProgress sx={{ position:"absolute", top:"35%", color: "grey" }} />
      </div>
      <div
        id="backButton"
        className="hidden"
        onClick={backFunction}
        style={{ top: "150px" }}
      >
        <ArrowBackIcon sx={{ padding: "0" }} />
      </div>
    </div>
  );
}

export default Edit;
