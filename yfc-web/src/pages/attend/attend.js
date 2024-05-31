import { useState } from "react";
import "./attend.scss";
import { FaRegCheckCircle } from "react-icons/fa";

export default function AttendPage() {
  const [attendState, setAttentState] = useState("미인증");

  const handleClickAttend = () => {
    setAttentState("출석");
  };
  return (
    <div className="attendpage">
      <div className="userversion">
        <h2>출석인증</h2>
        <div
          className="attendstate"
          style={{
            background:
              attendState == "출석" ? "rgb(63,122,211)" : "rgb(180,180,180)",
          }}
        >
          <div className="innercircle">
            <FaRegCheckCircle />
            <h3>{attendState}</h3>
          </div>
        </div>
        {/* <div className="stat">
          <h4>나의 출석현황</h4>
          <div className="counts">
            <div className="count_w">
              <h5>주</h5>
              <p>1회</p>
            </div>
            <div className="count_m">
              <h5>달</h5>
              <p>2회</p>
            </div>
            <div>
              <h5>학기</h5>
              <p>10회</p>
            </div>
          </div>
        </div> */}
        <button className="attendbtn" onClick={handleClickAttend}>
          인증번호 입력
        </button>
      </div>
      {/* <div className="adminversion">인증번호 생성</div> */}
    </div>
  );
}
