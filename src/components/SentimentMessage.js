import React from "react";
import "../scss/defaults.scss";

function SentimentMessage(props) {
  const positive = [
    "Keep it up!"
    // "Great!",
    // "Tell us more!",
    // "Love to hear it :)"
  ];
  const negative = [
    "Try using more words of affirmation!"
    // "Try being more positive!",
    // "Be careful about hurtful language.",
    // "Try saying that another way!"
  ];
  function getMessage() {
    // const num = Math.floor(Math.random() * 1);
    if (props.value > 0.1) {
      return positive[0];
    } else if (props.value < 0) {
      return negative[0];
    }
    return "Keep typing to get feedback!";
  }

  return (
    <div className="centered flex-col">
      <div className="bars_container">
        <div className="bar">
          <div
            className="negative"
            style={{
              width: props.value < 0 ? Math.abs(props.value) * 100 + `%` : 0
            }}
          />
        </div>
        <div className="bar">
          <div
            className="positive"
            style={{
              width: props.value > 0 ? Math.abs(props.value) * 100 + `%` : 0
            }}
          />
        </div>
      </div>
      <p>{getMessage()}</p>
    </div>
  );
}
export default SentimentMessage;
