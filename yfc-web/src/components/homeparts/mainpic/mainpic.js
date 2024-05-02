import React from "react";
import "./mainpic.scss";

import MainPhoto1 from "../../../assets/images/mainpic.png";
import ClubImg from "../../../assets/images/home/fencingclubImg479.png";

export default function MainPic() {
  window.addEventListener("resize", () => {
    console.log(window.innerHeight);
  });
  return (
    <div className="mainpic">
      <div className="main_wide">
        <img src={MainPhoto1} alt="" />
        <div className="black">
          <div className="txtbox">
            <p>En Garde, Prêts? Allez!</p>
          </div>
        </div>
        {/* <div className="gradient"></div> */}
      </div>
      <div className="main_small">
        <img src={ClubImg} alt="" />
        <div className="gray">
          <div className="txt">
            <h3>연세펜싱부와 함께 하세요!</h3>
            <a href="/recruit">
              <p>지원하기</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
