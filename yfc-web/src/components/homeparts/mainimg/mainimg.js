import React from "react";
import "./mainimg.scss";
import MainPhoto1 from "../../../assets/images/mainpic.png";
import SmallMainImg from "../../../assets/images/home/smallmainimg.png";

export default function MainPic() {
  return (
    <div className="mainimg">
      <div className="mainimg_wide">
        <img src={MainPhoto1} alt="" />
        <div className="black">
          <div className="txtbox">
            <p>En Garde, Prêts? Allez!</p>
          </div>
        </div>
        {/* <div className="gradient"></div> */}
      </div>
      <div className="mainimg_small">
        <img src={SmallMainImg} alt="" />
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
