import React from "react";
import TextField from "./TextField.js";
import ChoiceComponent from "./ChoiceComponent.js";

function RenderHealth({ inputValue, setInputValue }) {
  return (
    <div className="centered flex-col modal-content">
      <h1>Health question</h1>
      <h4>
        Your child recently transitioned and your father keeps calling him by
        the wrong pronouns. Further, your father keeps referring to him by his
        birth name. How do you respond?
      </h4>
      <TextField value={inputValue} setValue={setInputValue} />
    </div>
  );
}
function RenderSchool({ inputValue, setInputValue }) {
  return (
    <div className="centered flex-col modal-content">
      <h1>School question</h1>
      <h4>
        A classmate in your child’s school recently came out as gay. Your child
        and their friends have been using the words “sissy” and “girly” to
        describe him and constantly use the phrases “no homo” amongst
        themselves. How do you respond to them?
      </h4>
      <TextField value={inputValue} setValue={setInputValue} />
      {console.log(inputValue)}
    </div>
  );
}
function RenderFriendship({ inputValue, setInputValue }) {
  const choices = [
    "A) Your fears are valid. However, if they don’t accept you, you are better off without them. True friends will cherish you for who you are.",
    "B) You can do it! If I am being honest with you, they are not my favorite friend of yours. I do not like how they treat you. You deserve better.",
    "C) Do not overthink it! You will be fine. You are such good friends. There is no way that they could not love the amazing person that you are.",
    "D) You may not want to do that. You know they are religious and that will cause them to think of you differently. "
  ];
  return (
    <div className="centered flex-col modal-content">
      <h1>Friendship question</h1>
      <h4>
        Your child recently came out as queer to you. They want to come out to
        their friends of the same gender, but they are scared that their friend
        will accuse them of having a crush on them and will not want to be
        friends anymore. What do you tell them?
      </h4>
      {choices.map((value, index) => {
        return <p className="choice">{value}</p>;
      })}
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
