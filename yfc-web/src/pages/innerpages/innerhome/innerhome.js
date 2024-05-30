import React from "react";
import "./innerhome.scss";
import UserBox from "../../../components/userbox/userbox";
import MoveButton from "../../../components/movebutton/movebutton";

const btnlist = [
  { title: "출석", link: "/attend" },
  { title: "게시판", link: "/board" },
];

export default function InnerHomePage() {
  return (
    <div className="innerhome">
      <UserBox />
      <div className="buttons">
        {btnlist.map((item) => (
          <MoveButton title={item.title} />
        ))}
      </div>
    </div>
  );
}
