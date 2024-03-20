import React, { useRef, useEffect, useState } from "react";
import "./about.scss";

export default function AboutPage() {
  const textRef = useRef();
  const [targetY, setTargetY] = useState(0);
  const [textopacity, setTextopacity] = useState(0);

  useEffect(() => {
    setTargetY(textRef.current.offsetTop);
    console.log(targetY);

    window.addEventListener("resize", () => {
      setTargetY(textRef.current.offsetTop);
      console.log("현재 높이는 " + targetY);
    });
  });

  window.addEventListener("scroll", () => {
    console.log(window.scrollY - targetY);
    if (window.scrollY - targetY > -300) {
      setTextopacity(((window.scrollY - targetY + 300) / 100) * 0.25);
    } else {
      setTextopacity(0);
    }
  });

  return (
    <div className="about" ref={textRef}>
      <h2 style={{ opacity: textopacity }}>연세펜싱부를 소개합니다.</h2>
    </div>
  );
}
