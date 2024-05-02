import React from "react";
import "./home.scss";
import MainPic from "../../components/homeparts/mainpic/mainpic.js";
import AboutPage from "../about/about";
import ActPage from "../act/act";
import FAQPage from "../../components/homeparts/faqpart/faq.js";

export default function HomePage() {
  return (
    <div className="home">
      <MainPic />
      {/* <AboutPage /> */}
      {/* <ActPage /> */}

      <FAQPage />
    </div>
  );
}
