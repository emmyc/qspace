import React, { useEffect } from "react";
import "./scss/defaults.scss";
import SelectionContainer from "./components/SelectionContainer.js";
import Main from "./Main";

function App() {
  const [stepState, setStepState] = React.useState(1);
  useEffect(() => {
    let reqbody = {
      document: {
        content: "this is a happy sentene"
      }
    };
    let url = `https://language.googleapis.com/v1beta2/documents:analyzeSentiment?key=deaaacb0f4dded33393059f40b0cf3fe0ebdbfb4`;
    fetch(url, {
      method: "POST",
      body: JSON.stringify(reqbody)
    })
      .then(response => {
        return response.json();
      })
      .then(response => {
        console.log(response);
      });
  }, []);
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
          text="Welcome!"
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
