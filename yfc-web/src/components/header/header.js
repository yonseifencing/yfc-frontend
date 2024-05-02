import React, { useState } from "react";
import "./header.scss";
import { IoMenu } from "react-icons/io5";
import MainLogo from "../../assets/images/mainlogo.jpg";

const menulist = [
  {
    id: "menu1",
    title: "홈",
    link: "/",
  },
  {
    id: "menu2",
    title: "활동",
    link: "/act",
  },
  {
    id: "menu3",
    title: "모집",
    link: "/recruit",
  },
  {
    id: "menu4",
    title: "로그인",
    link: "/login",
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="inline_wide">
        <a href="/" className="logo">
          <img src={MainLogo} alt="" />
        </a>
        <ul className="menu">
          {menulist.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="inline_small">
        <div className="top">
          <a href="/" className="logo">
            <img src={MainLogo} alt="" />
          </a>
          <IoMenu
            className="menubtn"
            onClick={() => {
              if (menuOpen) {
                setMenuOpen(false);
              } else {
                setMenuOpen(true);
              }
            }}
          />
        </div>
        <div className="coverwhite"></div>
        <div
          className="downmenu"
          style={{
            opacity: menuOpen ? "1" : "1",
            top: menuOpen ? "90px" : "-245px",
          }}
        >
          <ul>
            <li>
              <a href="">홈</a>
            </li>
            <li>
              <a href="/act">활동</a>
            </li>
            <li>
              <a href="/recruit">모집</a>
            </li>
            <li style={{ border: "none" }}>
              <a href="/login">로그인</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
