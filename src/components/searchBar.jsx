import React, { useState } from "react";
import "./searchBar.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useNavigate } from "react-router-dom";

function SearchBar(props) {
  const [searchVal, setSearchVal] = useState("");
  const [searchRec, setSearchRec] = useState([]);
  const navigate = useNavigate();

  const searchRecipes = JSON.parse(JSON.stringify(props.recipes)).map((sr) => ({
    id: sr._id,
    label: sr.title,
    photo: sr.photos,
  }));

  function changeSearch(e) {
    setSearchVal(e.target.value.toLowerCase());
    if (e.target.value === "") {
      setSearchRec(searchRecipes);
    } else {
      setSearchRec(
        searchRecipes.filter((fr) => {
          return (
            typeof fr.label == "string" &&
            fr.label.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1
          );
        })
      );
    }
  }

  function searchClick(e, id) {
    const item = JSON.parse(JSON.stringify(props.recipes)).filter(
      (r) => r._id === id
    );
    console.log(e.id);
    props.setRecipe(item[0]);
    setSearchRec(searchRecipes);
    document.getElementById("searchContents").classList.add("hidden");
    document.getElementById("searchInput").placeholder = "Search..."
    navigate("/recipe");
  }

  function openSearch(e) {
    e.target.placeholder = ""
    document.getElementById("searchContents").classList.toggle("hidden");
  }

  document.addEventListener("mouseup", function (e) {
    var container = document.getElementById("searchContents");
    if (!container.contains(e.target)) {
      container.classList.add("hidden");
      document.getElementById("searchInput").placeholder = "Search..."
    }
  });

  return (
    <div id="searchBar">
      <input
        type="text"
        placeholder="Search..."
        onChange={changeSearch}
        onClick={openSearch}
        id="searchInput"
      ></input>
      <div id="searchContents" >
        {searchRec.map((r) => (
          <div className="searchItem" onClick={(e) => searchClick(e, r.id)}>
            <img className="searchImg" src={r.photo} />
            <p className="searchLabel">{r.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
