import React from "react";
import "./home.scss";
import MainPic from "../../components/mainpic/mainpic";
import AboutPage from "../about/about";
import ActPage from "../act/act";
import RecruitHomePage from "./partpages/recruit/recruit_home";

export default function HomePage() {
  return (
    <div className="home">
      <MainPic />
      {/* <AboutPage /> */}
      {/* <ActPage /> */}
      {/* <RecruitHomePage /> */}
    </div>
  );
}
