import React from "react";
import "./home.scss";
import AboutPage from "../about/about";
import ActivityPage from "../activity/activity";
import RecruitPage from "../recruit/recruit";
import MainPhoto from "../../assets/images/mainphoto.png";
import MainPhoto1 from "../../assets/images/mainphoto2.png";

export default function HomePage() {
  return (
    <div className="home">
      <div className="main">
        <img src={MainPhoto1} alt="" />

        <div className="black">
          {/* <h3>YONSEI FENCING</h3>
          <button>지원하러 가기</button> */}
        </div>
      </div>

      <AboutPage />
      <ActivityPage />
      <RecruitPage />
    </div>
  );
}
