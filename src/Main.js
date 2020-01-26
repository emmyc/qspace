import React from "react";
import "./scss/defaults.scss";
import StoryComponent from "./components/StoryComponent";
import Friends from "./images/friends-color.svg";
import School from "./images/school-color.svg";
import Health from "./images/health-color.svg";

function Main(props) {
  const images = [Health, School, Friends];
  const stories = ["Health", "School", "Friendship"];
  console.log(stories);
  return (
    <div className="main-container">
      {images.map((value, index) => {
        return (
          <div>
            <StoryComponent topic={value} text={stories[index]} key={index} />
          </div>
        );
      })}
    </div>
  );
}

export default Main;
