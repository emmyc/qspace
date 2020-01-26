import React from "react";
import "../scss/defaults.scss";
import ButtonComponent from "./ButtonComponent";

function SelectionContainer(props) {
  const text = {
    1: "Welcome!",
    2: "I am the...",
    3: "... of someone who is...",
    4: "and I am from..."
  };
  const buttons = {
    1: ["Get started"],
    2: ["Parent", "Sibling", "Friend", "Coworker"],
    3: ["Asexual", "Gay", "Lesbian", "Bisexual", "Transgender", "Pansexual"]
  };
  return (
    <div className="centered flex-col">
      <h1>{text[props.step]}</h1>
      <div className="button-container">
        {buttons[props.step].map((value, index) => {
          return (
            <div
              className="button"
              onClick={() => props.setStep(props.step + 1)}
              key={index}
            >
              <h3>{value}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default SelectionContainer;
