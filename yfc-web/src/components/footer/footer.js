import React from "react";
import "./footer.scss";
import { FaFacebookF, FaInstagram, FaYoutube, FaArrowUp } from "react-icons/fa";

const snslist = [
  {
    id: "sns1",
    link: "https://www.facebook.com/yonseifencing/?locale=ko_KR",
    icon: <FaFacebookF className="facebooklink" />,
  },
  {
    id: "sns2",
    link: "https://www.instagram.com/yonsei_fencing/",
    icon: <FaInstagram className="instalink" />,
  },
  {
    id: "sns3",
    link: "https://www.youtube.com/channel/UCHWIgcea3iWykenRKbE8rxQ",
    icon: <FaYoutube className="youtubelink" />,
  },
];

export default function Footer() {
  const handleClickUpbtn = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      <div className="footer_inner_wide">
        <div className="copyright">
          <h4>Yonsei Fencing Club.</h4>
          <p>Copyright 2024. YFC. All rights reserved.</p>
        </div>
        <div className="channel">
          <h3>채널 바로가기</h3>
          <div className="sns">
            {snslist.map((item) => (
              <a href={item.link} key={item.id}>
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="footer_inner_small">
        <div className="channel">
          <h3>채널 바로가기</h3>
          <div className="sns">
            {snslist.map((item) => (
              <a href={item.link} key={item.id}>
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <button onClick={handleClickUpbtn}>
        <FaArrowUp />
      </button>
    </footer>
  );
}
