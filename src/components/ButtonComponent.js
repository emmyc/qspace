import React from "react";
import "../scss/defaults.scss";

function ButtonComponent(props) {
  console.log(props.content);
  return (
    <div className="button">
      <h3>{props.content[1]}</h3>
    </div>
  );
}
export default ButtonComponent;
