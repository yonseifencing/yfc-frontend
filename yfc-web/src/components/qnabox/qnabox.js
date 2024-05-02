import React, { useState } from "react";
import "./qnabox.scss";
import { SlArrowDown } from "react-icons/sl";

export default function QNAbox({ num, question, answer, openheight }) {
  const [open, setOpen] = useState(false);
  const [isWide, setIsWide] = useState(true);

  window.addEventListener("resize", () => {
    if (window.innerWidth <= 768) {
      setIsWide(false);
    }
  });

  return isWide ? (
    <li
      className="qnabox"
      style={{
        height: open ? `${openheight}px` : "102px",
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
  ) : (
    <li
      className="qnabox"
      style={{
        height: open ? `${openheight}px` : "102px",
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
}
