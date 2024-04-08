import React from "react";
import "./qnabox.scss";
import { SlArrowDown } from "react-icons/sl";

export default function QNAbox() {
  return (
    <li>
      <div className="question">
        <p className="number">01</p>
        <div>
          <span>무슨 종목을 다루나요?</span>
          <SlArrowDown className="arrow" />
        </div>
      </div>
      <div className="answer">
        <span>플러레랑 에페를 다룹니다.</span>
      </div>
    </li>
  );
}
