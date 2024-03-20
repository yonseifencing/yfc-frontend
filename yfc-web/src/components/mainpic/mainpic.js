import React from "react";
import "./mainpic.scss";
import MainPhoto from "../../assets/images/mainphoto2.png";

export default function MainPic() {
  return (
    <div className="mainpic">
      <div className="main">
        <img src={MainPhoto} alt="" />

        <div className="black"></div>
        <div className="gradient"></div>
      </div>
    </div>
  );
}
