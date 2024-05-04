import React from "react";
import "./colortxtblock.scss";

export default function ColorTxtBlock(props) {
  return (
    <div className="colortxtbox">
      <h3 className="title">{props.title}</h3>
      {props.content}
    </div>
  );
}
