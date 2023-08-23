import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "./searchBar";
import SearchIcon from "@mui/icons-material/Search";
import "./filterTabs.css";

function HeaderBar(props) {
  const filter = props.filter;

  function handleClick() {
    props.setChosenFilter("ShowAll");
    // document.querySelector(".loadCircle") && document.querySelector(".loadCircle").classList.remove("hidden");
    document.getElementById("catagoryTitle") &&
      document.getElementById("catagoryTitle").classList.add("hidden");
  }

  const styleChip = {
    backgroundColor: "lightGrey",
    "&:active": { backgroundColor: "teal", color: "white" },
    fontSize: "16px",
  };

  const activefilter = { backgroundColor: "teal", color: "white" };

  const filters = ["Catagories", "Tags"];

  return (
    <header id="App-header">
      <NavLink className="linkHome" to="/">
        <img src="./logo.png" id="logoImg" />
        {/* <div id="logoName" className="font" onClick={handleClick}>
          Lindsey's Kitchen
        </div> */}
      </NavLink>
      <div id="catagoryHeader">
        <div id="catagoryTitle" className="catagoryTitle hidden">
          <div id="catagoryHeader">{props.chosenFilter}</div>
        </div>
        <div id="filterButtonContainer" className="filterButtonContainer">
          <ul class="tabs group">
            <li class="active">
              <a>Catagories</a>
            </li>
            <li>
              <a>Tags</a>
            </li>
          </ul>
          {/* {filters.map((f) => {
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
          })} */}
        </div>
      </div>
      <div id="searchContainer">
        <SearchBar recipes={props.recipes} setRecipe={props.setRecipe} />
        <div id="searchIcon">
          <SearchIcon />
        </div>
      </div>
    </header>
  );
}

export default HeaderBar;
