import React from "react";

function Recipe(props) {
  const recipe = props.recipe;
  const ingredients = recipe.ingredients.split(/\r?\n|\r|\n/g);
  const instructions = recipe.instructions.split(/\r?\n|\r|\n/g);
  const notes = recipe.notes.split(/\r?\n|\r|\n/g);

  return (
    <div id="recipeContainer">
      <img src={"data:image/png;base64," + recipe.photos} alt={recipe.title} />
      <h2>{recipe.title}</h2>
      <h3>Source: {recipe.source}</h3>
      <h3>Servings: {recipe.servings}</h3>
      <div>
        <h3>Ingredients</h3>
        <ul>
          {ingredients.map((i) => (
            <li>{i}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Instructions</h3>
        <ol>
          {instructions.map((i) => (
            <li>{i}</li>
          ))}
        </ol>
      </div>
      <div>
        <h3>Notes</h3>
        <ul>
          {notes.map((i) => (
            <li>{i}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Recipe;
