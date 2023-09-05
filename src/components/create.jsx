import React, { useState } from "react";
import { useNavigate } from "react-router";
import CatagoryInput from "./catagoryInput";
import stockImage from "./stockImage";
import uploadPhoto from "./uploadPhoto";

function Create(props) {
  const [recipe, setRecipe] = useState({
    title: "",
    catagories: [],
    tags: [],
    source: "",
    servings: "",
    ingredients: "",
    instructions: "",
    notes: "",
    photos: stockImage,
  });
  const [idMessage, setIdMessage] = useState("Click to Upload Image");
  const [photo, setPhoto] = useState(null);

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

    uploadPhoto(photo);
    const photoUrl =
      "https://lindseyskitchenphotos.s3.us-west-1.amazonaws.com/" + photo.name;

    console.log(photoUrl);
    // When a post request is sent to the create url, we'll add a new record to the database.
    const newRecipe = { ...recipe, photos: photoUrl };
    console.log(newRecipe);

    await fetch("https://lindseyskitchenapi.onrender.com/recipes", {
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
      tags: [],
      source: "",
      servings: "",
      ingredients: "",
      instructions: "",
      notes: "",
      photos: "",
    });
    navigate("/");
  }

  // let base64String = "";

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
      setPhoto(blob);
    }
  }

  // Function to handle photo and store it to photo state
  const handlePhotoChange = (e) => {
    // Uploaded Photo
    const photo = e.target.files[0];
    // Changing file state
    setIdMessage(photo.name + " Uploaded");
    setPhoto(photo);
  };

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
            <p className="tag">Category</p>
            <CatagoryInput
              name="catagories"
              catagoryValues={recipe.catagories}
              catagories={props.catagories}
              setRecipe={setRecipe}
            />
          </div>
          <div className="spacer">
            <p className="tag">Tags</p>
            <CatagoryInput
              name="tags"
              catagoryValues={recipe.tags}
              catagories={props.tags}
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
              placeholder="Add Ingredients"
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
              placeholder="Add Instructions"
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
              placeholder="Add Notes"
              value={recipe.notes}
              onChange={updateRecipe}
            />
          </div>
          <div id="addDirections">
            <p style={{ margin: 0, marginTop: 10, marginBottom: 10 }}>Photos</p>
            <div className="createText">
              <label style={{ fontFamily: "arial", fontSize: "18px" }}>
                <input
                  id="fileId"
                  type="file"
                  name="photoUpload"
                  style={{ display: "none" }}
                  onChange={handlePhotoChange}
                />
                {idMessage}
              </label>
              <input
                placeholder="Ctrl+V to paste image"
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
