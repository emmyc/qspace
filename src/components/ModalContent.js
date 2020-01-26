import React from "react";
import TextField from "./TextField.js";
import ChoiceComponent from "./ChoiceComponent.js";
import { useEffect } from "react";
import { useDebounce } from "use-debounce";
import SentimentMessage from "./SentimentMessage.js";

function RenderHealth({ inputValue, setInputValue, score }) {
  return (
    <div className="centered flex-col modal-content">
      <h1>Health question</h1>
      <h4>
        Your child recently transitioned and your father keeps calling him by
        the wrong pronouns. Further, your father keeps referring to him by his
        birth name. How do you respond?
      </h4>
      <TextField value={inputValue} setValue={setInputValue} />
      <SentimentMessage value={score} />
    </div>
  );
}
function RenderSchool({ inputValue, setInputValue, score }) {
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
      <SentimentMessage value={score} />
    </div>
  );
}
function RenderFriendship({ inputValue, setInputValue }) {
  const [choice, setChoice] = React.useState(-1);

  const choices = [
    "A) Your fears are valid. However, if they don’t accept you, you are better off without them. True friends will cherish you for who you are.",
    "B) You can do it! If I am being honest with you, they are not my favorite friend of yours. I do not like how they treat you. You deserve better.",
    "C) Do not overthink it! You will be fine. You are such good friends. There is no way that they could not love the amazing person that you are.",
    "D) You may not want to do that. You know they are religious and that will cause them to think of you differently. "
  ];

  const messages = [
    "Response A: Great Job! This is a wonderful response to your child because it shows them that their feelings are heard and valid. Furthermore, you help show support for them while also preparing them for any possible negative reactions. Great job with keeping it real while also helping them feel reassured!",
    "Response B: Try again. While you do an okay job of showing support for your child, critiquing their friendships may make your child feel uncomfortable about engaging with their friend and will make it less likely for them to be open with you about future interactions with them. Rather, accept that that relationship is important to them and talk about different scenarios that your child may face in order to help them feel prepared to come out.",
    "Response C: Try Again. While it may seem best to be supportive and build their confidence, telling them that they are overthinking invalidates their experiences. Additionally, while it is important to show support, you should be cautious of assuring your child that their friend will accept them, when it is not clear how their friend will react. Such assurance might lead to further distress if their friend does not end up accepting them.",
    "Response D: Try Again. While it may be important to prepare your child for any of the repercussions they may face by coming out, this response risks making your child feel like their sexuality is invalid or something to be ashamed of. Instead, try saying something to validate or otherwise show support for their sexuality, rather than trying to dissuade them from coming out. "
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
      {choice === -1
        ? choices.map((value, index) => {
            return (
              <p className="choice" onClick={() => setChoice(index)}>
                {value}
              </p>
            );
          })
        : null}
      {choices !== -1 ? (
        <div className="centered flex-col">
          <p className="choice">{messages[choice]}</p>{" "}
          {choice > 0 ? (
            <p className="tryagain" onClick={() => setChoice(-1)}>
              Try again.
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
function ModalContent(props) {
  const [inputValue, setInputValue] = React.useState("");
  const [score, setScore] = React.useState(0);
  const [debouncedInputValue] = useDebounce(inputValue, 800);

  useEffect(() => {
    console.log(debouncedInputValue);
    let reqbody = {
      document: {
        type: "PLAIN_TEXT",
        content: debouncedInputValue
      },
      encodingType: "UTF8"
    };
    let url = `https://language.googleapis.com/v1beta2/documents:analyzeSentiment?key=AIzaSyBfKwE6O3SdRsAL2O_nLsTUIOw8X_rOQMk`;
    fetch(url, {
      method: "POST",
      body: JSON.stringify(reqbody)
    })
      .then(response => {
        return response.json();
      })
      .then(response => {
        console.log(response.documentSentiment.score);
        setScore(response.documentSentiment.score);
      });
  }, [debouncedInputValue]);
  if (props.topic === "Health") {
    return (
      <RenderHealth
        inputValue={inputValue}
        setInputValue={setInputValue}
        score={score}
      />
    );
  } else if (props.topic === "School") {
    return (
      <RenderSchool
        inputValue={inputValue}
        setInputValue={setInputValue}
        score={score}
      />
    );
  } else {
    return (
      // <div style={{width: score, left: -1 ? -100 : 0 }}
      <RenderFriendship
        inputValue={inputValue}
        setInputValue={setInputValue}
        score={score}
      />
    );
  }
}
export default ModalContent;
