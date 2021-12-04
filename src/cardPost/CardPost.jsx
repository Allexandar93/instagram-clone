import React from "react";
import "./cardPost.scss";
import Profile from "../profile/Profile";
import { ReactComponent as CardButton } from "../images/options.svg";
import CardMenu from "../cardMenu/CardMenu";
import Comment from "../comment/Comment";

function CardPost(props) {
  const { storyBorder, image, comments, likedByText, likedByNumber, hours } =
    props;

  return (
    <div className="cardPost">
      <header>
        <Profile iconSize="medium" storyBorder={storyBorder} />
        <CardButton className="cardButton" />
      </header>
      <img className="cardImage" src={image} alt="card content" />
      <CardMenu />
      <div className="likedBy">
        <Profile iconSize="small" hideAccountName={true} />
        <span>
          Liked by <strong>{likedByText}</strong> and{" "}
          <strong> {likedByNumber} others </strong>
        </span>
      </div>
      {
        <div className="comments">
          {comments.map((comments) => {
            return (
              <Comment
                key={comments.id}
                accountName={comments.user}
                comment={comments.text}
              />
            );
          })}
        </div>
      }
      <div className="timePosted">{hours} HOURS AGO</div>
      <div className="addComment">
        <div className="commentText">Add a comment...</div>
        <div className="postText">POST</div>
      </div>
    </div>
  );
}

export default CardPost;
