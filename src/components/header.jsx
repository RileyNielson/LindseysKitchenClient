import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "./searchBar";

function HeaderBar() {
  return (
    <header id="App-header">
      <NavLink className="linkHome" to="/">
        <div id="logoName" className="font">
          Lindsey's Kitchen
        </div>
      </NavLink>
      <div id="searchContainer">
          <SearchBar />
        </div>
    </header>
  );
}

export default HeaderBar;
