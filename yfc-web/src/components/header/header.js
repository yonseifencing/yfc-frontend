import React, { useState } from "react";
import "./header.scss";
import { IoMenu } from "react-icons/io5";
import mainlogoImg from "../../assets/images/mainlogo.jpg";

const navbarlist = [
  {
    id: "nav1",
    title: "홈",
    link: "/",
  },
  {
    id: "nav2",
    title: "모집",
    link: "/recruit",
  },
  {
    id: "nav3",
    title: "로그인",
    link: "/login",
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClickNavbtn = () => {
    setMenuOpen((menuopen) => !menuopen);
  };

  return (
    <header>
      <div className="header_inner_wide">
        <a href="/" className="mainlogo">
          <img src={mainlogoImg} alt="" />
        </a>
        <ul className="navbar">
          {navbarlist.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="header_inner_small">
        <div className="header_inner_small_top">
          <a href="/" className="mainlogo">
            <img src={mainlogoImg} alt="" />
          </a>
          <IoMenu className="navbtn" onClick={handleClickNavbtn} />
        </div>
        <div className="header_inner_coverwhite"></div>
        <div
          className="header_inner_small_navbar"
          style={{
            top: menuOpen ? "90px" : "-245px",
          }}
        >
          <ul>
            {navbarlist.map((item) => (
              <li key={item.id}>
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
