import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import { useNavigate } from "react-router";

function Create(props) {
  const [recipe, setRecipe] = useState({
    name: "",
    source: "",
    servings: "",
    ingredients: "",
    directions: "",
    notes: "",
    photos: "",
  });

  const navigate = useNavigate();

  // These methods will update the state properties.
  function updateRecipe(value) {
    return setRecipe((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPerson = { ...recipe };

    await fetch("http://localhost:5050/recipe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setRecipe({
      name: "",
      source: "",
      servings: "",
      ingredients: "",
      directions: "",
      notes: "",
      photos: "",
    });
    navigate("/");
  }

  return (
    <div id="App-main">
      <div id="create-main">
        <div id="recipeInfo">
          <h1>New Recipe</h1>
          <div className="spacer">
            <p className="tag">Title</p>
            <input
              type="text"
              name="title"
              className="recipeInfo"
              placeholder="Recipe Title"
            />
          </div>
          <div className="spacer">
            <p className="tag">Source</p>
            <input
              type="text"
              name="Source"
              className="recipeInfo"
              placeholder="Source"
            />
          </div>
          <div className="spacer">
            <p className="tag">Servings</p>
            <input
              type="text"
              name="servings"
              className="recipeInfo"
              placeholder="# of Servings"
            />
          </div>
        </div>
        <div id="createContainer">
          <div id="addIngredients">
            <p style={{ margin: 0, marginTop: 10, marginBottom: 10 }}>
              Ingredients
            </p>
            <textarea
              name="ingredients"
              id="ingredients"
              placeholder="Add Ingredients Here"
            />
          </div>
          <div id="addDirections">
            <p style={{ margin: 0, marginTop: 10, marginBottom: 10 }}>
              Instructions
            </p>
            <textarea
              name="ingredients"
              id="ingredients"
              placeholder="Add Instructions Here"
            />
          </div>
          <div id="addDirections">
            <p style={{ margin: 0, marginTop: 10, marginBottom: 10 }}>Notes</p>
            <textarea
              name="ingredients"
              id="ingredients"
              placeholder="Add Notes Here"
            />
          </div>
          <div id="addDirections">
            <p style={{ margin: 0, marginTop: 10, marginBottom: 10 }}>Photos</p>
            <input id="ingredients" type="image" src="" alt="" />
          </div>
        </div>
        <div id="buttonDiv">
          <button id="submitButton" type="submit">
            Submit
          </button>
        </div>
      </div>
      <div className="foot">_</div>
    </div>
  );
}

export default Create;
