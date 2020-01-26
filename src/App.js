import React, { useEffect } from "react";
import "./scss/defaults.scss";
import SelectionContainer from "./components/SelectionContainer.js";
import Main from "./Main";

function App() {
  const [stepState, setStepState] = React.useState(1);

  // useEffect(() => {

  // }, []);

  // const renderStart = () => (
  //   <div className="centered wrapper">
  //     <SelectionContainer type="welcome" />
  //   </div>
  // );

  return (
    <div className="centered wrapper">
      {stepState <= 3 ? (
        <SelectionContainer
          type="static"
          text="Welcome to Qspace!"
          step={stepState}
          setStep={setStepState}
          className="trans-color"
        />
      ) : (
        <Main />
      )}
    </div>
  );
}

export default App;
