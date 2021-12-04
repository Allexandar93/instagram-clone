import React from "react";
import "./navbar.scss";
import { ReactComponent as Home } from "../images/home.svg";
import { ReactComponent as Messenger } from "../images/messenger.svg";
import { ReactComponent as NewPost } from "../images/newPost.svg";
import { ReactComponent as Find } from "../images/find.svg";
import { ReactComponent as Activity } from "../images/activity.svg";
import ProfileIcon from "../profileIcon/ProfileIcon";
import image from "../images/profile.jpg";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbarContent">
        <div className="logoDiv">
          <a href="#">
            <img className="imgLogo" src="./assets/logo.png" alt="" />
          </a>
        </div>

        <div className="search">
          <input className="searchInput" type="text" placeholder="  Search" />
        </div>

        <div className="icons">
          <Home />
          <Messenger />
          <NewPost />
          <Find />
          <Activity />
          <ProfileIcon iconSize="small" image={image} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
