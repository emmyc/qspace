import React from "react";
import TextField from "./TextField.js";
import ChoiceComponent from "./ChoiceComponent.js";

function RenderHealth({ inputValue, setInputValue }) {
  return (
    <div className="centered flex-col">
      <h1>Health question</h1>
      <TextField value={inputValue} setValue={setInputValue} />
    </div>
  );
}
function RenderSchool({ inputValue, setInputValue }) {
  return (
    <div className="centered flex-col">
      <h1>School question</h1>
      <TextField value={inputValue} setValue={setInputValue} />
    </div>
  );
}
function RenderFriendship({ inputValue, setInputValue }) {
  const choices = ["A. Choice a", "B. Choice b", "C. Choice c", "D. choice d"];
  return (
    <div className="centered flex-col">
      <h1>Friendship question</h1>
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </p>
    </div>
  );
}
function ModalContent(props) {
  const [inputValue, setInputValue] = React.useState("");
  if (props.topic === "Health") {
    return (
      <RenderHealth inputValue={inputValue} setInputValue={setInputValue} />
    );
  } else if (props.topic === "School") {
    return (
      <RenderSchool inputValue={inputValue} setInputValue={setInputValue} />
    );
  } else {
    return (
      <RenderFriendship inputValue={inputValue} setInputValue={setInputValue} />
    );
  }
}
export default ModalContent;
