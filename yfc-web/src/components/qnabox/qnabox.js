import React, { useState } from "react";
import "./qnabox.scss";
import { SlArrowDown } from "react-icons/sl";

export default function QNAbox({
  num,
  question,
  answer,
  openheight,
  smallheight,
  clickfunction,
}) {
  const [open, setOpen] = useState(false);

  if (window.innerWidth >= 769) {
    return (
      <li
        className="qnabox"
        style={{
          height: open ? `${openheight}px` : "",
        }}
      >
        <div className="question">
          <p className="number">0{num}</p>
          <div>
            <span>{question}</span>
            <SlArrowDown
              className="arrow"
              style={{ transform: open ? "rotate(180deg)" : "rotate(0)" }}
              onClick={() => {
                if (open) {
                  setOpen(false);
                } else {
                  setOpen(true);
                }
                console.log(open);
              }}
            />
          </div>
        </div>
        <div className="answer" style={{ opacity: open ? 1 : 0 }}>
          {answer}
        </div>
      </li>
    );
  } else if (window.innerWidth > 479 && window.innerWidth < 769) {
    return (
      <li
        className="qnabox"
        style={{
          height: open ? `300px` : "",
        }}
      >
        <div className="question">
          <p className="number">0{num}</p>
          <div>
            <span>{question}</span>
            <SlArrowDown
              className="arrow"
              style={{ transform: open ? "rotate(180deg)" : "rotate(0)" }}
              onClick={() => {
                if (open) {
                  setOpen(false);
                } else {
                  setOpen(true);
                }
                console.log(open);
              }}
            />
          </div>
        </div>
        <div className="answer" style={{ opacity: open ? 1 : 0 }}>
          {answer}
        </div>
      </li>
    );
  } else {
    return (
      <li
        className="qnabox"
        style={{
          height: open ? `${smallheight}px` : "",
        }}
      >
        <div className="question">
          <p className="number">0{num}</p>
          <div>
            <span>{question}</span>
            <SlArrowDown
              className="arrow"
              style={{ transform: open ? "rotate(180deg)" : "rotate(0)" }}
              onClick={() => {
                if (open) {
                  setOpen(false);
                  clickfunction(smallheight, false);
                } else {
                  setOpen(true);
                  clickfunction(smallheight, true);
                }
                console.log(open);
              }}
            />
          </div>
        </div>
        <div className="answer" style={{ opacity: open ? 1 : 0 }}>
          {answer}
        </div>
      </li>
    );
  }
}
