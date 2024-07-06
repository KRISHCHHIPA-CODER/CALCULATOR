import React, { useState } from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { evaluate } from "mathjs";

const App = () => {
  const [display, setDisplay] = useState("");

  const handleButtonClick = (value) => {
    if (value === "C") {
      setDisplay("");
    } else if (value === "<") {
      setDisplay(display.slice(0, -1));
    } else if (value === "=") {
      try {
        const result = evaluate(display);
        setDisplay(result.toString());
      } catch (e) {
        setDisplay("Error");
      }
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <main>
      <div className="calculator">
        <h1 className="input">{display}</h1>
        <div className="row">
          <button onClick={() => handleButtonClick("C")}>C</button>
          <button onClick={() => handleButtonClick("<")}>
            <i className="fas fa-backspace"></i>
          </button>
          <button onClick={() => handleButtonClick("%")}>%</button>
          <button onClick={() => handleButtonClick("/")}>/</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick("7")}>7</button>
          <button onClick={() => handleButtonClick("8")}>8</button>
          <button onClick={() => handleButtonClick("9")}>9</button>
          <button onClick={() => handleButtonClick("*")}>*</button>{" "}
          {/* Updated button */}
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick("4")}>4</button>
          <button onClick={() => handleButtonClick("5")}>5</button>
          <button onClick={() => handleButtonClick("6")}>6</button>
          <button onClick={() => handleButtonClick("-")}>-</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick("1")}>1</button>
          <button onClick={() => handleButtonClick("2")}>2</button>
          <button onClick={() => handleButtonClick("3")}>3</button>
          <button onClick={() => handleButtonClick("+")}>+</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick("0")}>0</button>
          <button onClick={() => handleButtonClick(".")}>.</button>
          <button onClick={() => handleButtonClick("00")}>00</button>
          <button onClick={() => handleButtonClick("=")}>=</button>
        </div>
      </div>
    </main>
  );
};

export default App;
