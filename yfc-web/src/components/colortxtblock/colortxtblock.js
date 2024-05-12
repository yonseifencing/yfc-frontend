import React from "react";
import "./colortxtblock.scss";

export default function ColorTxtBlock({ title, content, isSelected }) {
  return (
    <div className="colortxtbox">
      <h3 className="title">{title}</h3>
      {content.map((item) => (
        <h4>{item}</h4>
      ))}
    </div>
  );
}
