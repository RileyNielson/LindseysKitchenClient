import React, { useState } from "react";
import { useNavigate } from "react-router";
import CatagoryInput from "./catagoryInput";
import stockImage from "./stockImage";

function Create(props) {
  const [recipe, setRecipe] = useState({
    title: "",
    catagories: [],
    source: "",
    servings: "",
    ingredients: "",
    instructions: "",
    notes: "",
    photos: stockImage,
  });
  const [idMessage, setIdMessage] = useState("Click Me To Upload Image");

  const navigate = useNavigate();

  // These methods will update the state properties.
  function updateRecipe(e) {
    console.log(e.target.name);
    return setRecipe((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newRecipe = { ...recipe };
    console.log(newRecipe);

    await fetch("http://localhost:5050/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setRecipe({
      title: "",
      catagories: [],
      source: "",
      servings: "",
      ingredients: "",
      instructions: "",
      notes: "",
      photos: "",
    });
    navigate("/");
  }

  let base64String = "";

  function handlePaste(event) {
    const clipboardItems = event.clipboardData.items;
    const items = [].slice.call(clipboardItems).filter(function (item) {
      // Filter the image items only
      return /^image\//.test(item.type);
    });
    if (items.length === 0) {
      event.target.value = "";
      return;
    }
    const item = items[0];
    if (item.kind === "file") {
      var blob = item.getAsFile();
      var reader = new FileReader();
      reader.onload = function (event) {
        console.log(event.target.result);
        base64String = reader.result.replace("data:", "").replace(/^.+,/, "");

        //imageBase64Stringsep = base64String;

        // alert(imageBase64Stringsep);
        console.log(base64String);

        return setRecipe((prev) => {
          return { ...prev, photos: "data:image/png;base64," +base64String };
        });
      };
      // data url!
      reader.readAsDataURL(blob);
      event.target.value = "Image Added";
      setIdMessage("Image Added");
    }
    
  }

  function imageUploaded(e) {
    let file = document.querySelector("input[type=file]")["files"][0];

    let reader = new FileReader();
    console.log(file.name);
    setIdMessage("Image " + file.name + " Added");

    reader.onload = function () {
      base64String = reader.result.replace("data:", "").replace(/^.+,/, "");

      //imageBase64Stringsep = base64String;

      // alert(imageBase64Stringsep);
      console.log(base64String);
      return setRecipe((prev) => {
        return { ...prev, photos: "data:image/png;base64," + base64String };
      });
    };
    reader.readAsDataURL(file);

    console.log(base64String);
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
              value={recipe.title}
              onChange={updateRecipe}
            />
          </div>
          <div className="spacer">
            <p className="tag">Categories</p>
            <CatagoryInput
              catagoryValues={recipe.catagories}
              catagories={props.catagories}
              setRecipe={setRecipe}
            />
          </div>
          <div className="spacer">
            <p className="tag">Source</p>
            <input
              type="text"
              name="source"
              className="recipeInfo"
              placeholder="Source"
              value={recipe.source}
              onChange={updateRecipe}
            />
          </div>
          <div className="spacer">
            <p className="tag">Servings</p>
            <input
              type="text"
              name="servings"
              className="recipeInfo"
              placeholder="# of Servings"
              value={recipe.servings}
              onChange={updateRecipe}
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
              className="createText"
              placeholder="Add Ingredients Here"
              value={recipe.ingredients}
              onChange={updateRecipe}
            />
          </div>
          <div id="addDirections">
            <p style={{ margin: 0, marginTop: 10, marginBottom: 10 }}>
              Instructions
            </p>
            <textarea
              name="instructions"
              id="instructions"
              className="createText"
              placeholder="Add Instructions Here"
              value={recipe.instructions}
              onChange={updateRecipe}
            />
          </div>
          <div id="addDirections">
            <p style={{ margin: 0, marginTop: 10, marginBottom: 10 }}>Notes</p>
            <textarea
              name="notes"
              id="notes"
              className="createText"
              placeholder="Add Notes Here"
              value={recipe.notes}
              onChange={updateRecipe}
            />
          </div>
          <div id="addDirections">
            <p style={{ margin: 0, marginTop: 10, marginBottom: 10 }}>Photos</p>
            <div className="createText">
              <input
                id="fileId"
                type="file"
                name="photos"
                style={{ display: "none" }}
                onChange={(event) => imageUploaded(event)}
              />
              <label for="fileId">{idMessage}</label>
              <input
                placeholder="ctrl + v to paste image"
                type="text"
                id="pasteImage"
                onPaste={handlePaste}
              ></input>
            </div>
          </div>
        </div>
        <div id="buttonDiv">
          <button id="submitButton" type="submit" onClick={onSubmit}>
            Submit
          </button>
        </div>
      </div>
      <div className="foot">_</div>
    </div>
  );
}

export default Create;
