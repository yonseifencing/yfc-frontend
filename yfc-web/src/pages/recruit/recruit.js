import React, { useState } from "react";
import "./recruit.scss";
import { SlArrowDown } from "react-icons/sl";
// import HomeRecruitImg from "../../assets/images/home/home-recruit-img.jpg";

export default function RecruitPage() {
  // questionbox 컴포넌트
  function Questionbox(props) {
    return (
      <li style={{ height: props.vari ? "147.6px" : "82px" }}>
        <div className="q-left">0{props.number}</div>
        <div className="q-right">
          <div className="question">
            {props.question}
            <SlArrowDown
              className="downarrow"
              onClick={() => arrowClick(props.qnumber)}
              style={{
                transform: props.vari ? "rotate(180deg)" : "0",
              }}
            />
          </div>
          <div className="answer" style={{ opacity: props.vari ? "1" : "0" }}>
            {props.answer}
          </div>
        </div>
      </li>
    );
  }

  // open,close state 관리
  const [questionOpen, setQuestionOpen] = useState({
    q1: false,
    q2: false,
    q3: false,
    q4: false,
    q5: false,
    q6: false,
  });

  const { q1, q2, q3, q4, q5, q6 } = questionOpen;

  async function arrowClick(qnumber) {
    if (questionOpen[qnumber]) {
      await setQuestionOpen({ ...questionOpen, [qnumber]: false });
    } else {
      await setQuestionOpen({ ...questionOpen, [qnumber]: true });
    }

    // const { q1, q2, q3, q4, q5, q6 } = questionOpen;

    console.log(q1);
  }

  console.log(questionOpen);
  return (
    <div className="home-recruit">
      <div className="faq">
        <h3>자주 묻는 질문</h3>
        <ul>
          <Questionbox
            number="1"
            question="무슨 종목을 다루나요?"
            answer="플러레와 에페를 다루고 있으나 주종목은 플러레입니다."
            qnumber="q1"
            vari={q1}
          />
          <Questionbox
            number="2"
            question="펜싱은 처음인데 괜찮나요?"
            answer="괜찮습니다! 신입부원 대다수가 펜싱 초보자이며 다같이 기본스텝부터 배울 예정입니다."
          />
          <Questionbox
            number="3"
            question="부원들 학번과 성비가 어떻게 되나요?"
            answer="플러레와 에페를 다루고 있으나 주종목은 플러레입니다."
          />
          <Questionbox
            number="4"
            question="월수금토 정규 훈련은 모두 필참인가요?"
            answer="플러레와 에페를 다루고 있으나 주종목은 플러레입니다."
          />
          <Questionbox
            number="5"
            question="펜싱 대회에도 참가할 수 있나요?"
            answer="플러레와 에페를 다루고 있으나 주종목은 플러레입니다."
          />
          <Questionbox
            number="6"
            question="펜싱 장비는 모두 사비로 구매해야 하나요?"
            answer="플러레와 에페를 다루고 있으나 주종목은 플러레입니다."
          />
        </ul>
      </div>
    </div>
  );
}
