import React from "react";

const sprinkles = [
  {
    top: "1vh",
    left: "1vw",
    rotation: "35deg",
    color: "rgba(0, 195, 195, 0.5)",
  },
  {
    top: "20vh",
    left: "10vw",
    rotation: "5deg",
    color: "rgba(0, 195, 195, 0.5)",
  },
  {
    top: "18vh",
    left: "5vw",
    rotation: "135deg",
    color: "rgba(0, 195, 195, 0.5)",
  },
  {
    top: "47vh",
    left: "5vw",
    rotation: "65deg",
    color: "rgba(0, 195, 195, 0.5)",
  },
  {
    top: "63vh",
    left: "8vw",
    rotation: "35deg",
    color: "rgba(0, 195, 195, 0.5)",
  },
  {
    top: "15vh",
    left: "3vw",
    rotation: "5deg",
    color: "rgba(0, 195, 195, 0.5)",
  },
  {
    top: "85vh",
    left: "5vw",
    rotation: "135deg",
    color: "rgba(0, 195, 195, 0.5)",
  },
  {
    top: "92vh",
    left: "5vw",
    rotation: "65deg",
    color: "rgba(0, 195, 195, 0.5)",
  },
  {
    top: "48vh",
    left: "1vw",
    rotation: "35deg",
    color: "rgba(227, 165, 140, 0.5)",
  },
  {
    top: "5vh",
    left: "8vw",
    rotation: "5deg",
    color: "rgba(227, 165, 140, 0.5)",
  },
  {
    top: "37vh",
    left: "4vw",
    rotation: "127deg",
    color: "rgba(227, 165, 140, 0.5)",
  },
  {
    top: "70vh",
    left: "2vw",
    rotation: "65deg",
    color: "rgba(227, 165, 140, 0.5)",
  },
  {
    top: "14vh",
    left: "8vw",
    rotation: "35deg",
    color: "rgba(227, 165, 140, 0.5)",
  },
  {
    top: "95vh",
    left: "3vw",
    rotation: "5deg",
    color: "rgba(227, 165, 140, 0.5)",
  },
  {
    top: "42vh",
    left: "5vw",
    rotation: "135deg",
    color: "rgba(227, 165, 140, 0.5)",
  },
  {
    top: "27vh",
    left: "5vw",
    rotation: "65deg",
    color: "rgba(227, 165, 140, 0.5)",
  },
  //Right Side
  {
    top: "3vh",
    left: "95vw",
    rotation: "5deg",
    color: "rgba(0, 195, 195, 0.5)",
  },
  {
    top: "20vh",
    left: "90vw",
    rotation: "45deg",
    color: "rgba(0, 195, 195, 0.5)",
  },
  {
    top: "13vh",
    left: "95vw",
    rotation: "100deg",
    color: "rgba(0, 195, 195, 0.5)",
  },
  {
    top: "38vh",
    left: "95vw",
    rotation: "-30deg",
    color: "rgba(0, 195, 195, 0.5)",
  },
  {
    top: "63vh",
    left: "92vw",
    rotation: "5deg",
    color: "rgba(0, 195, 195, 0.5)",
  },
  {
    top: "25vh",
    left: "97vw",
    rotation: "65deg",
    color: "rgba(0, 195, 195, 0.5)",
  },
  {
    top: "85vh",
    left: "95vw",
    rotation: "40deg",
    color: "rgba(0, 195, 195, 0.5)",
  },
  {
    top: "92vh",
    left: "90vw",
    rotation: "-25deg",
    color: "rgba(0, 195, 195, 0.5)",
  },
  {
    top: "48vh",
    left: "96vw",
    rotation: "35deg",
    color: "rgba(227, 165, 140, 0.5)",
  },
  {
    top: "5vh",
    left: "90vw",
    rotation: "35deg",
    color: "rgba(227, 165, 140, 0.5)",
  },
  {
    top: "30vh",
    left: "92vw",
    rotation: "127deg",
    color: "rgba(227, 165, 140, 0.5)",
  },
  {
    top: "70vh",
    left: "96vw",
    rotation: "105deg",
    color: "rgba(227, 165, 140, 0.5)",
  },
  {
    top: "14vh",
    left: "92vw",
    rotation: "-25deg",
    color: "rgba(227, 165, 140, 0.5)",
  },
  {
    top: "95vh",
    left: "97vw",
    rotation: "65deg",
    color: "rgba(227, 165, 140, 0.5)",
  },
  {
    top: "42vh",
    left: "90vw",
    rotation: "105deg",
    color: "rgba(227, 165, 140, 0.5)",
  },
  {
    top: "77vh",
    left: "92vw",
    rotation: "65deg",
    color: "rgba(227, 165, 140, .5)",
  },
];

function Sprinkles() {
  return (
    <div id="backgroundSprinkles">
      {sprinkles.map((s) => {
        return (
          <div
            className="sprinkle"
            style={{
              top: s.top,
              left: s.left,
              transform: "rotate(" + s.rotation + ")",
              backgroundColor: s.color,
            }}
          ></div>
        );
      })}
    </div>
  );
}

export default Sprinkles;
