import React from "react";
import "./mainpic.scss";
import MainPhoto from "../../assets/images/mainphoto2.png";
import MainPhoto1 from "../../assets/images/mainpic.png";

export default function MainPic() {
  window.addEventListener("resize", () => {
    console.log(window.innerHeight);
  });
  return (
    <div className="mainpic">
      <div className="main">
        <img src={MainPhoto1} alt="" />
        <div className="black">
          <div className="txtbox">
            <p>En Garde, Prêts? Allez!</p>
          </div>
        </div>
        {/* <div className="gradient"></div> */}
      </div>
    </div>
  );
}
