import React from "react";
import "../scss/defaults.scss";

function TextField(props) {
  const onChange = e => {
    props.setValue(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className="text-container">
      <textarea
        className="text-input"
        onChange={onChange}
        value={props.value}
        placeholder="Type your response here..."
        rows="10"
        cols="10"
      ></textarea>
    </div>
  );
}
export default TextField;
