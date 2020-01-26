import React from "react";
import "../scss/defaults.scss";
import SelectionComponent from "./SelectionComponent";

function SelectionContainer({ step, setStep }) {
  return <SelectionComponent step={step} setStep={setStep} />;
}
export default SelectionContainer;
