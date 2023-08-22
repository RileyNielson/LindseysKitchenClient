import * as React from "react";
import { useNavigate } from "react-router-dom";

export default function TitlebarImageList(props) {
  const navigate = useNavigate();

  var showingCatagories = props.showCatagories.filter((c) => c.length > 0);

  if (props.chosenFilter !== "ShowAll") {
    showingCatagories = props.showCatagories;
  }

  function handleClick(item) {
    console.log(item);

    if (props.chosenFilter === "ShowAll") {
      props.setChosenFilter(() => {
        // document.querySelector("#cardContainer").scrollTo(0, 0);
        // document.getElementById("cardContainer").style.overflow = "hidden";
        // document.querySelector("#loadCircle").classList.remove("hidden");
        return item.title;
      });
    } else {
      showingCatagories = props.showCatagories;
      props.setRecipe(() => {
        navigate("/recipe");
        return item;
      });
    }
  }

  return (
    <div id="cardContainer" className="cardContainer">
      <div id="topBorder"></div>
      {showingCatagories.map((item) => (
        <div className="card">
          <img
            src={item.photos}
            alt={item.title}
            loading="lazy"
            onClick={() => handleClick(item)}
          />
          <div id="imageLabel">
            <p>{item.title}</p>
            <p>{item.length}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
