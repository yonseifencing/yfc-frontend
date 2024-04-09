import React from "react";
import "./home.scss";
import MainPic from "../../components/mainpic/mainpic";
import AboutPage from "../about/about";
import ActPage from "../act/act";
import RecruitPage from "../recruit/main/recruit_main";

export default function HomePage() {
  return (
    <div className="home">
      {/* <MainPic /> */}
      {/* <AboutPage /> */}
      {/* <ActPage /> */}
      <RecruitPage />
    </div>
  );
}
