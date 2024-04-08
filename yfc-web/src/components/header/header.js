import React from "react";
import "./header.scss";
import { IoMenu } from "react-icons/io5";
import Logo from "../../assets/images/mainlogo.jpg";

const menulist = [
  {
    title: "홈",
    link: "/",
  },
  {
    title: "활동",
    link: "/act",
  },
  {
    title: "모집",
    link: "/recruit",
  },
  {
    title: "로그인",
    link: "/login",
  },
];

export default function Header() {
  return (
    <header>
      <div className="inline_wide">
        <a href="/" className="logo">
          <img src={Logo} alt="" />
        </a>
        <ul className="menu">
          {menulist.map((item) => (
            <li>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="inline_small">
        <a href="/" className="logo">
          <img src={Logo} alt="" />
        </a>
        <IoMenu className="menubtn" />
      </div>
    </header>
  );
}
