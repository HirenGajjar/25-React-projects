import React, { useState } from "react";

function BG() {
  const [type, setType] = useState("hex");
  const [color, setColor] = useState("#fff");

  const randHexColor = () => {
    let hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "F", "A", "B", "C", "D", "E"];
    let hexClr = "#";
    for (let i = 0; i < 6; i++) {
      hexClr += hex[Math.floor(Math.random() * hex.length)];
    }
    setColor(hexClr);
  };

  const randRGBColor = () => {
    const rgbClr = `rgb(${Math.floor(Math.random() * 255)},
    ${Math.floor(Math.random() * 255)},
    ${Math.floor(Math.random() * 255)})`;
    setColor(rgbClr);
  };
  return (
    <>
      <div
        className="container"
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: color,
        }}
      >
        <button onClick={() => randHexColor()}>#Color</button>
        <button onClick={() => randRGBColor()}>RGB Color</button>
        <button onClick={type === "hex" ? randHexColor : randRGBColor}>
          Random Color
        </button>
      </div>
    </>
  );
}

export default BG;
