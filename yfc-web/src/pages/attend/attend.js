import { useState, useRef } from "react";
import "./attend.scss";
import { FaRegCheckCircle } from "react-icons/fa";

export default function AttendPage() {
  const [attendState, setAttentState] = useState("미인증");

  const input1Ref = useRef();
  const input2Ref = useRef();
  const input3Ref = useRef();
  const input4Ref = useRef();

  const handleClickAttend = () => {
    setAttentState("출석");
  };

  const handleWriteInput = (e) => {
    if (e.target.value.length == 2) {
      e.target.value = e.target.value.slice(0, -1);
    }
  };

  const moveFocusNext = (num) => {
    if (num == 1) {
      input2Ref.current.focus();
    } else if (num == 2) {
      input3Ref.current.focus();
    } else if (num == 3) {
      input4Ref.current.focus();
    }
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
        <form>
          <div className="inputs">
            <input
              ref={input1Ref}
              type="number"
              onChange={(e) => {
                handleWriteInput(e);
                if (e.target.value.length != 0) {
                  moveFocusNext(1);
                }
              }}
            />
            <input
              ref={input2Ref}
              type="number"
              onChange={(e) => {
                handleWriteInput(e);
                if (e.target.value.length != 0) {
                  moveFocusNext(2);
                }
              }}
            />
            <input
              ref={input3Ref}
              type="number"
              onChange={(e) => {
                handleWriteInput(e);
                if (e.target.value.length != 0) {
                  moveFocusNext(3);
                }
              }}
            />
            <input
              ref={input4Ref}
              type="number"
              onChange={(e) => {
                handleWriteInput(e);
                if (e.target.value.length != 0) {
                  moveFocusNext(4);
                }
              }}
            />
          </div>
          <button className="attendbtn" onClick={handleClickAttend}>
            인증번호 입력
          </button>
        </form>
      </div>
      {/* <div className="adminversion">인증번호 생성</div> */}
    </div>
  );
}
