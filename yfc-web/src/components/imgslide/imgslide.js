import React, { useState, useRef } from "react";
import "./imgslide.scss";
import FenBamImg from "../../assets/images/act/fenbam.jpg";
import ExchangeImg from "../../assets/images/act/exchange.jpg";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

// 각 이미지 컴포넌트
function Img(props) {
  return (
    <div className={props.imgindex}>
      <img src={props.img} alt="" />
      <h3>{props.title}</h3>
    </div>
  );
}

export default function ImgSlide() {
  const [currentdot, setCurrentdot] = useState(1);
  const imgsRef = useRef();

  let widthsize = window.innerWidth;

  window.addEventListener("resize", () => {
    widthsize = window.innerWidth;
    imgsRef.current.style.transform =
      "translateX(" + widthsize * 0.2968 * (1 - currentdot) + "px)";
  });

  return (
    <div className="slide">
      <div className="leftarrow">
        <MdArrowBackIosNew
          className="arrow"
          onClick={() => {
            if (currentdot > 1) {
              setCurrentdot(currentdot - 1);
            }
            console.log(currentdot);
          }}
        />
      </div>
      <div className="rightarrow">
        <MdArrowForwardIos
          className="arrow"
          onClick={() => {
            if (currentdot < 3) {
              setCurrentdot(currentdot + 1);
            }
            console.log(currentdot);
          }}
        />
      </div>
      <div
        className="imgs"
        ref={imgsRef}
        style={{
          transform:
            "translateX(" + widthsize * 0.2968 * (1 - currentdot) + "px)",
        }}
      >
        <Img imgindex="img1" title="정규훈련" img={ExchangeImg} />
        <Img imgindex="img2" title="교류전" img={ExchangeImg} />
        <Img imgindex="img3" title="대회" img={ExchangeImg} />
        <Img imgindex="img4" title="펜싱인의 밤" img={FenBamImg} />
        <Img imgindex="img5" title="MT" img={FenBamImg} />
      </div>

      {/* <div className="control">
        <div className="dots">
          <div
            className="dot1"
            style={{
              backgroundColor: currentdot == 1 ? "red" : "black",
            }}
            onClick={() => setCurrentdot(1)}
          ></div>
          <div
            className="dot2"
            style={{
              backgroundColor: currentdot == 2 ? "red" : "black",
            }}
            onClick={() => setCurrentdot(2)}
          ></div>
          <div
            className="dot3"
            style={{
              backgroundColor: currentdot == 3 ? "red" : "black",
            }}
            onClick={() => setCurrentdot(3)}
          ></div>
          <div
            className="dot4"
            style={{
              backgroundColor: currentdot == 4 ? "red" : "black",
            }}
            onClick={() => setCurrentdot(4)}
          ></div>
        </div>
      </div> */}
    </div>
  );
}
