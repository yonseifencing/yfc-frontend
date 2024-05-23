import React from "react";
import "./home.scss";
import MainPic from "../../components/homeparts/mainimg/mainimg.js";
import FAQPage from "../../components/homeparts/faqpart/faq.js";
import AboutPart from "../../components/homeparts/aboutpart/aboutpart.js";

export default function HomePage() {
  return (
    <div className="home">
      <MainPic />
      <AboutPart />
      <FAQPage />
    </div>
  );
}
