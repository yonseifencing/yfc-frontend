import React, { useState } from "react";
import "./imgslide.scss";

import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
export default function ImgSlide() {
  const [currentdot, setCurrentdot] = useState(1);

  return (
    <div className="slide">
      <div
        className="imgs"
        style={{ transform: "translateX(" + 240 * (1 - currentdot) + "px)" }}
      >
        <div
          className="img1"
          style={{
            width: currentdot == 1 ? "360px" : "200px",
            height: currentdot == 1 ? "360px" : "200px",
          }}
        >
          <h3>정규 훈련</h3>
        </div>
        <div
          className="img2"
          style={{
            width: currentdot == 2 ? "360px" : "200px",
            height: currentdot == 2 ? "360px" : "200px",
          }}
        >
          <h3>교류전</h3>
        </div>
        <div
          className="img3"
          style={{
            width: currentdot == 3 ? "360px" : "200px",
            height: currentdot == 3 ? "360px" : "200px",
          }}
        >
          <h3>대회</h3>
        </div>
        <div
          className="img4"
          style={{
            width: currentdot == 4 ? "360px" : "200px",
            height: currentdot == 4 ? "360px" : "200px",
          }}
        >
          <h3>펜싱인의 밤</h3>
        </div>
      </div>
      <div className="control">
        <MdArrowBackIosNew
          className="arrow"
          onClick={() => {
            if (currentdot > 1) {
              setCurrentdot(currentdot - 1);
            }
            console.log(currentdot);
          }}
        />
        <div className="dots">
          <div
            className="dot1"
            style={{
              backgroundColor: currentdot == 1 ? "white" : "#ffffff66",
            }}
            onClick={() => setCurrentdot(1)}
          ></div>
          <div
            className="dot2"
            style={{
              backgroundColor: currentdot == 2 ? "white" : "#ffffff66",
            }}
            onClick={() => setCurrentdot(2)}
          ></div>
          <div
            className="dot3"
            style={{
              backgroundColor: currentdot == 3 ? "white" : "#ffffff66",
            }}
            onClick={() => setCurrentdot(3)}
          ></div>
          <div
            className="dot4"
            style={{
              backgroundColor: currentdot == 4 ? "white" : "#ffffff66",
            }}
            onClick={() => setCurrentdot(4)}
          ></div>
        </div>
        <MdArrowForwardIos
          className="arrow"
          onClick={() => {
            if (currentdot < 4) {
              setCurrentdot(currentdot + 1);
            }
            console.log(currentdot);
          }}
        />
      </div>
    </div>
  );
}
