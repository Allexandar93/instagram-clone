import React from "react";
import "./sidebar.scss";
import Sticky from "react-sticky-el";
import image from "../images/profile.jpg";
import Profile from "../profile/Profile";
import Suggestions from "../suggestions/Suggestions";
import Footer from "../footer/Footer";

function Sidebar() {
  return (
    <Sticky topOffset={-80}>
      <div className="sidebar">
        <Profile
          username="allexandar93"
          caption="Aleksandar Zivotic"
          urlText="Switch"
          iconSize="big"
          image={image}
        />
        <Suggestions />
        <Footer />
      </div>
    </Sticky>
  );
}

export default Sidebar;
