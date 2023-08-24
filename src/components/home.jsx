import React, { useState, useEffect } from "react";
import WovenImageList from "./wovenImages";
import stockImage from "./stockImage";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";

function Home(props) {
  const [showCatagories, setShowCatagories] = useState([]);

  const catagory = props.catagory;
  const setCatagory = props.setCatagory;

  const navigate = useNavigate();

  const recipes = props.recipes;


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
              r.catagories.includes(catagory) &&
              r.tags.includes(props.chosenFilter)
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

    console.log("Catagories Updating");
    return;
  }, [
    props.chosenFilter,
    props.catagories,
    catagory,
    props.filter,
    props.tags,
    recipes,
    setCatagory,
  ]);

  function backFunction() {
    if (
      catagory === "" ||
      props.chosenFilter === catagory ||
      props.filter === "Tags"
    ) {
      props.setChosenFilter("ShowAll");
    } else {
      props.setChosenFilter(catagory);
    }
    navigate("/");
  }

  console.log(props.chosenFilter);
  console.log(props.filter);

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

export default Home;
