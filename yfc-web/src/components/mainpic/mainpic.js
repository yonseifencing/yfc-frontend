import React from "react";
import "./mainpic.scss";
import MainPhoto from "../../assets/images/mainphoto2.png";

export default function MainPic() {
  return (
    <div className="mainpic">
      <div className="main">
        <img src={MainPhoto} alt="" />
        <div className="txtbox">
          <h3>
            연세펜싱부에서 함께 운동할
            <br />
            신입부원을 모집합니다.
          </h3>
          <button>지원하러 가기</button>
        </div>
        <div className="black"></div>
        {/* <div className="gradient"></div> */}
      </div>
    </div>
  );
}
