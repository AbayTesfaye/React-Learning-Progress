import { useState } from "react";
import animals, { useAnimal } from "./information";
function App() {
  const [headingText, setHeadingText] = useState("Abay");
  const [isMouseOver, setIsMouseOver] = useState(false);
  function handleClick() {
    console.log("clicked");
    setHeadingText("Dani");
  }

  function handleMouseOver() {
    setIsMouseOver(true);
  }

  function handleMouseOut() {
    setIsMouseOver(false);
  }
  return (
    <div>
      <h1>{headingText}</h1>

      <button
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{ backgroundColor: isMouseOver ? "red" : "blue" }}
      >
        Change
      </button>
    </div>
  );
}

export default App;
