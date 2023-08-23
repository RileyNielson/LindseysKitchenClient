import React from "react";

function Pinstripes() {
  var pinstripes = [];
  var color;

  for (let i = 0; i < 1000; i++) {
    color === "rgba(227, 165, 140, 0.2)"
      ? (color = "rgba(0, 195, 195, 0.2)")
      : (color = "rgba(227, 165, 140, 0.2)");

    pinstripes[i] = (
      <div
        className="pinStripe"
        style={{ top: i * 6 + "px", backgroundColor: color }}
      ></div>
    );
  }

  return <div id="backgroundSprinkles">{pinstripes}</div>;
}

export default Pinstripes;
