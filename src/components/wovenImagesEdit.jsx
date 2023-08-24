import * as React from "react";
import { useNavigate } from "react-router-dom";

export default function WovenImagesEdit(props) {
  const navigate = useNavigate();

  var showingCatagories = props.showCatagories.filter((c) => c.length > 0);

  if (
    props.chosenFilter !== "ShowAll" &&
    !props.catagories.includes(props.chosenFilter)
  ) {
    showingCatagories = props.showCatagories;
  }

  function handleClick(item) {
    if (props.chosenFilter === "ShowAll") {
      props.setChosenFilter(item.title);
    } else if (props.catagories.includes(props.chosenFilter)) {
      props.setChosenFilter(item.title);
    } else {
      showingCatagories = props.showCatagories;
      props.setRecipe(() => {
        navigate("/editRecipe");
        return item;
      });
    }
  }

  return (
    <div id="cardContainer" className="cardContainer">
      <div id="topBorder"></div>
      {showingCatagories.map((item) => (
        <div className="card" onClick={() => handleClick(item)}>
          <img src={item.photos} alt={item.title} loading="lazy" />
          <div id="imageLabel">
            <p>{item.title}</p>
            <p>{item.length}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
