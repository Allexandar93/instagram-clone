import React from "react";
import "./cardMenu.scss";
import { ReactComponent as Inbox } from "../images/commentPost.svg";
import { ReactComponent as Like } from "../images/activity.svg";
import { ReactComponent as Message } from "../images/message.svg";
import { ReactComponent as Bookmark } from "../images/bookmarks.svg";

function CardMenu() {
  return (
    <div className="cardMenu">
      <div className="interactions">
        <Like className="icon" />
        <Message className="icon" />
        <Inbox className="icon" />
      </div>
      <Bookmark className="icon" />
    </div>
  );
}

export default CardMenu;
