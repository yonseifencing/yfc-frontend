import React from "react";
import "./imagecard.scss";

export default function ImageCard(props) {
  return (
    <div className="imagecard">
      <img src={props.img} alt="" />
      <div className="gray"></div>
      <div className="white">
        <h4>{props.title}</h4>
        <h5>{props.hashtag}</h5>
      </div>
    </div>
  );
}
