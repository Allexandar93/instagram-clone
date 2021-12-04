import React from "react";
import Stories from "../stories/Stories";
import "./cards.scss";
import CardPost from "../cardPost/CardPost";

function Cards() {
  const commentsOne = [
    {
      user: "Milica",
      text: "Super slicka 👌",
      id: 1,
    },
    {
      user: "Nikola",
      text: "Svidja mi se 😁",
      id: 2,
    },
    {
      user: "Robert",
      text: "Uzivanje 🍷",
      id: 3,
    },
  ];

  const commentsTwo = [
    {
      user: "Lidija",
      text: "Svrati nekad xD 😵",
      id: 4,
    },
  ];

  const commentsThree = [
    {
      user: "Stefan",
      text: "Dodji na radzu 🍻",
      id: 5,
    },
  ];

  return (
    <div className="cards">
      <Stories />

      <CardPost
        accountName="Milica"
        storyBorder={true}
        image="https://picsum.photos/800/900"
        comments={commentsOne}
        likedByText="Nikola"
        likedbyNumber={89}
        hours={16}
      />

      <CardPost
        accountName="Nikola"
        image="https://picsum.photos/800"
        comments={commentsTwo}
        likedByText="Milena"
        likedByNumber={47}
        hours={12}
      />
      <CardPost
        accountName="Aleksandar"
        storyBorder={true}
        image="https://picsum.photos/800/1000"
        comments={commentsThree}
        likedByText="Milica"
        likedByNumber={90}
        hours={4}
      />
    </div>
  );
}

export default Cards;
