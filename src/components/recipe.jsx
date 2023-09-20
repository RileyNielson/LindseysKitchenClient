import React, { useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PrintIcon from "@mui/icons-material/Print";
import { useNavigate } from "react-router";

function Recipe(props) {
  const navigate = useNavigate();

  useEffect(() => {
    if (props.recipe === undefined) {
      navigate("/");
    }
  });

  console.log(props.recipe);

  if (props.recipe !== undefined) {
    const recipe = props.recipe;
    const ingredients = recipe.ingredients.split(/\r?\n|\r|\n/g);
    const instructions = recipe.instructions.split(/\r?\n|\r|\n/g);
    const notes = recipe.notes.split(/\r?\n|\r|\n/g);

    var source = recipe.source;

    var inputElement = document.createElement("input");
    inputElement.type = "url";
    inputElement.value = source;

    if (inputElement.checkValidity()) {
      source = (
        <a href={source} rel="noreferrer" target="_blank">
          {source}
        </a>
      );
    }

    console.log(props.chosenFilter);
    console.log(props.catagory);

    function backFunction() {
      if (props.catagory === "") {
        props.setChosenFilter("ShowAll");
      } 
      navigate("/");
    }

    function printFunction() {
      window.print();
    }

    return (
      <div id="recipeDisplay">
        <div id="backgroundStripes">
        <div className="stripe teal"></div>
        <div className="stripe teal"></div>
        <div className="stripe grey"></div>
        <div className="stripe teal"></div>
        <div className="stripe grey"></div>
        <div className="stripe teal"></div>
        </div>
        <div id="recipeContainer" style={{ backgroundColor: "white" }}>
          <img id="recipeImg" src={recipe.photos} alt={recipe.title} />
          <h2>{recipe.title}</h2>
          <h3>Source: {source}</h3>
          <h3>Servings: {recipe.servings}</h3>
          <div>
            <h3>Ingredients</h3>
            <ul
              id="ingredients"
              style={{ listStyleType:"none", columns: ingredients.length > 7 && window.innerWidth > 660 ? 2 : 1  }}
            >
              {ingredients.map((i) => (
                <li>{i}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Instructions</h3>
            <ol style={{ listStyleType:"none" }}>
              {instructions.map((i) => (
                <li>{i}</li>
              ))}
            </ol>
          </div>
          {notes.length > 0 && (
            <div>
              <h3>Notes</h3>
              <ul>
                {notes.map((i) => (
                  <li>{i}</li>
                ))}
              </ul>
            </div>
          )}
          <img id="footerImg" alt="logo" src="./logoImg.png" />
          <div className="foot"></div>
          <div
            id="printButton"
            style={{ width: "40px" }}
            onClick={printFunction}
          >
            <PrintIcon />
          </div>
        </div>
        <div id="backButton" onClick={backFunction}>
          <ArrowBackIcon sx={{ padding: "0" }} />
        </div>
      </div>
    );
  }
}

export default Recipe;
