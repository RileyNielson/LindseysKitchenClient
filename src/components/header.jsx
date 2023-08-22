import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "./searchBar";

function HeaderBar(props) {

  function handleClick(){
    props.setChosenFilter("ShowAll")
    // document.querySelector(".loadCircle") && document.querySelector(".loadCircle").classList.remove("hidden");
    document.getElementById("catagoryTitle") && document.getElementById("catagoryTitle").classList.add("hidden")
  }

  return (
    <header id="App-header">
      <NavLink className="linkHome" to="/">
        <div id="logoName" className="font" onClick={handleClick}>
          Lindsey's Kitchen
        </div>
      </NavLink>
      <div id="searchContainer">
          <SearchBar recipes={props.recipes} setRecipe={props.setRecipe}/>
        </div>
    </header>
  );
}

export default HeaderBar;
