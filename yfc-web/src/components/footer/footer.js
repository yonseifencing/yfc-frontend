import React from "react";
import "./footer.scss";
import { FaFacebookF, FaInstagram, FaYoutube, FaArrowUp } from "react-icons/fa";

const linklist = [
  {
    id: "link1",
    link: "https://www.facebook.com/yonseifencing/?locale=ko_KR",
    icon: <FaFacebookF className="facebooklink" />,
  },
  {
    id: "link2",
    link: "https://www.instagram.com/yonsei_fencing/",
    icon: <FaInstagram className="instalink" />,
  },
  {
    id: "link3",
    link: "https://www.youtube.com/channel/UCHWIgcea3iWykenRKbE8rxQ",
    icon: <FaYoutube className="youtubelink" />,
  },
];

export default function Footer() {
  window.addEventListener("resize", () => {
    console.log(window.innerWidth);
  });
  return (
    <footer>
      <div className="inline_wide">
        <div className="letter">
          <h4>Yonsei Fencing Club.</h4>
          <p>Copyright 2024. YFC. All rights reserved.</p>
        </div>
        <div className="sns">
          <h3>채널 바로가기</h3>
          <div className="links">
            {linklist.map((item) => (
              <a href={item.link} key={item.id}>
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="inline_small">
        <div className="sns">
          <h3>채널 바로가기</h3>
          <div className="links">
            {linklist.map((item) => (
              <a href={item.link} key={item.id}>
                {item.icon}
              </a>
            ))}
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
