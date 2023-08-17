import React from "react";
import HeaderBar from "./components/header";
import Home from "./components/home";
import Create from "./components/create";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Recipe from "./components/recipe";
import FooterBar from "./components/footer";

function App() {
  return (
    <div id="App">
      <HeaderBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/recipe/:id" element={<Recipe />} />
      </Routes>
    </div>
  );
}

export default App;
