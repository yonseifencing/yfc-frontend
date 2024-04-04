import React from "react";
import "./footer.scss";
import { FaFacebookF, FaInstagram, FaYoutube, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  window.addEventListener("resize", () => {
    console.log(window.innerWidth);
  });
  return (
    <footer>
      <div className="inline_wide">
        <div className="left">
          <h4>Yonsei Fencing Club.</h4>
          <p>Copyright 2024. YFC. All rights reserved.</p>
        </div>
        <div className="right">
          <h3>채널 바로가기</h3>
          <div className="links">
            <a href="https://www.facebook.com/yonseifencing/?locale=ko_KR">
              <FaFacebookF className="facebooklink" />
            </a>
            <a href="https://www.instagram.com/yonsei_fencing/">
              <FaInstagram className="instalink" />
            </a>
            <a href="https://www.youtube.com/channel/UCHWIgcea3iWykenRKbE8rxQ">
              <FaYoutube className="youtubelink" />
            </a>
          </div>
        </div>
      </div>
      <div className="inline_small">
        <div className="center">
          <h3>채널 바로가기</h3>
          <div className="links">
            <a href="https://www.facebook.com/yonseifencing/?locale=ko_KR">
              <FaFacebookF className="facebooklink" />
            </a>
            <a href="https://www.instagram.com/yonsei_fencing/">
              <FaInstagram className="instalink" />
            </a>
            <a href="https://www.youtube.com/channel/UCHWIgcea3iWykenRKbE8rxQ">
              <FaYoutube className="youtubelink" />
            </a>
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <FaArrowUp />
      </button>
    </footer>
  );
}
