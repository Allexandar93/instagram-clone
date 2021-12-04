import React from "react";
import "./story.scss";
import ProfileIcon from "../profileIcon/ProfileIcon";
import users from "../data/data";

function Story() {
  let accountName = users[Math.floor(Math.random() * users.length)].username;

  return (
    <div className="story">
      <ProfileIcon iconSize="big" storyBorder={true} />
      <span className="accountName">{accountName}</span>
    </div>
  );
}

export default Story;
