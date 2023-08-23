import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "./searchBar";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router";
import "./filterTabs.css";

function HeaderBar(props) {
  const navigate = useNavigate();
  const filter = props.filter;

  useEffect(() => {
    document.getElementById( filter + "Filter").classList.add("activeFilterButton")
  })

  function clickFilter(e) {
    e.target.classList.add("activeFilterButton");
    props.setChosenFilter("ShowAll")
    if (e.target.innerText === "Tags") {
      props.setFilter("Tags")
      document.getElementById("CatagoriesFilter").classList.remove("activeFilterButton")
    } else if( e.target.innerText === "Catagories"){
      props.setFilter("Catagories")
      document.getElementById("TagsFilter").classList.remove("activeFilterButton")
    }
    navigate("/");
  }

  return (
    <header id="App-header">
      <NavLink className="linkHome" to="/">
        <img src="./logo.png" alt="logo" id="logoImg" />
        {/* <div id="logoName" className="font" onClick={handleClick}>
          Lindsey's Kitchen
        </div> */}
      </NavLink>
      <div id="catagoryHeader">
        <div id="catagoryTitle" className="catagoryTitle hidden">
          <div id="catagoryHeader">{props.chosenFilter}</div>
        </div>
        <div id="filterButtonContainer" className="filterButtonContainer">
          <div id="CatagoriesFilter" className="filterButton" onClick={clickFilter}> Catagories </div>
          <div id="TagsFilter" className="filterButton" onClick={clickFilter}> Tags </div>
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
