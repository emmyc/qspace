import React from "react";
import "../scss/defaults.scss";

function SentimentMessage(props) {
  function getMessage(value) {
    console.log(value);
    if (value > 0.1) {
      return "Keep it up!";
    } else if (value < 0) {
      return "Try using more words of affirmation.";
    }
    return "Keep typing to get feedback!";
  }

  return (
    <div>
      <div className="bars_container">
        <div
          className="bar"
          //   style={{
          //     props.value < 0
          //       ? width:  Math.abs(props.value) * 100 + `%`
          //       : null
          //   }}
        >
          <div className="negative" />
        </div>
        <div className="bar">
          <div className="positive" />
        </div>
      </div>
      <p>{getMessage(props.value)}</p>
    </div>
  );
}
export default SentimentMessage;
