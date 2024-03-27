import React, { useState } from "react";
import "./recruit_detail.scss";
import { SlArrowDown } from "react-icons/sl";
import nowImage from "../../assets/images/recruitImage.jpg";

export default function RecruitDetailPage() {
  const [q1Open, setQ1Open] = useState(false);
  const [q2Open, setQ2Open] = useState(false);
  const [q3Open, setQ3Open] = useState(false);
  const [q4Open, setQ4Open] = useState(false);
  const [q5Open, setQ5Open] = useState(false);
  const [q6Open, setQ6Open] = useState(false);

  return (
    <div className="recruit">
      <div className="now">
        <img src={nowImage} alt="" />
        <div className="textbox">
          <h2>지금은 모집기간이 아닙니다.</h2>
          <h3>다음 기수는 9월 모집 예정입니다.</h3>
        </div>
      </div>
      <div className="target">
        <h3>지원 방법</h3>
        <div className="targetbox">
          <div>
            <h3>지원 대상</h3>
            <h4>- 연속 2학기 이상 활동할 수 있는 사람</h4>
            <h4>- 신촌 운동에 참여할 수 있는 사람</h4>
            <h4>- 대학생/대학원생 누구나</h4>
          </div>
          <div>
            <h3>우대 대상</h3>
            <h4>- 펜싱부 운동을 자주 나올 수 있는 사람</h4>
            <h4>- 펜싱을 배워본 경험이 있는 사람</h4>
          </div>

          <div>
            <h3>지원 방법</h3>
            <h4>- 1차 서류 평가 </h4>
            <h4>- 2차 구두 면접</h4>
            <h4>- 3차 운동 면접</h4>
          </div>
        </div>
      </div>
      <div className="schedule">
        <h3>모집 일정</h3>
        <div className="schedulebox">
          <div>
            <h3>서류 지원</h3>
            <h4>
              - 지원서 작성 마감 <br />
              &ensp; 3월 8일 (금) 18시
            </h4>
            <h4>
              - 결과 및 면접 일시 발표 <br />
              &ensp; 3월 8일 (금) 22시
            </h4>
          </div>
          <div>
            <h3>구두 면접</h3>
            <h4>
              - 구두 면접 <br />
              &ensp; 3월 9일 (토) ~ 3월 10일 (일)
            </h4>
            <h4>
              - 결과 및 운동 면접 일시 발표 <br />
              &ensp; 3월 10일 (일) 20시
            </h4>
          </div>
          <div>
            <h3>운동 면접</h3>
            <h4>
              - 운동 면접 <br />
              &ensp; 3월 11일 (월) <br />
              &ensp; 18:00 ~ 19:00, 19:00 ~ 20:00 <br />
              &ensp; 20:00 ~ 21:00, 21:00 ~ 22:00 <br />
              &ensp; 中 한 타임
            </h4>
          </div>
          <div>
            <h3>최종 발표</h3>
            <h4>
              - 최종 발표 <br />
              &ensp; 3월 13일 (수)
            </h4>
            <h4>
              - OT 및 신환회 <br />
              &ensp; 3월 14일 (목){" "}
            </h4>
          </div>
        </div>
      </div>
      <div className="note">
        <h3>참고사항</h3>
        <h4>
          - 신입생의 경우 기본기를 다지기 위해 필수적으로 4주간 한 주에 2회 이상
          운동에 참여해야 합니다. (이후 미달자의 경우 이번 학기 활동이
          불가능합니다.)
        </h4>
        <h4>- 4주 훈련 기간: 3월 18일 ~ 4월 13일</h4>
        <h4>- 이번 학기 운동 장소는 "스포츠 과학관 다목적실3" 입니다.</h4>
        <h4>
          - 신입생 4주 훈련을 이수하면 정규 부원이 되어 정규 운동에 참여하게
          됩니다.
        </h4>
        <h4>
          - 회비는 입회비 1만원, 활동비 5만원입니다. 추가로 운동을 위한 개인
          바디와이어 장비 구매가 필수입니다. (이후 공동구매를 진행하여 15,000 ~
          49,000원 제품 중 본인이 선택)
        </h4>
      </div>
      <div className="qna">
        <h3>자주 하는 질문</h3>
        <ul>
          <li style={{ height: q1Open ? "147.6px" : "96px" }}>
            <div className="question">
              Q. 무슨 종목을 다루나요?
              <SlArrowDown
                className="downarrow"
                onClick={() => {
                  if (q1Open) {
                    setQ1Open(false);
                  } else {
                    setQ1Open(true);
                  }
                }}
                style={{ transform: q1Open ? "rotate(180deg)" : "" }}
              />
            </div>
            <div className="answer" style={{ opacity: q1Open ? "1" : "0" }}>
              A. 플러레와 에페를 다루고 있으나 주종목은 플러레입니다.
            </div>
          </li>
          <li style={{ height: q2Open ? "174.2px" : "96px" }}>
            <div className="question">
              Q. 펜싱은 처음인데 괜찮나요?
              <SlArrowDown
                className="downarrow"
                onClick={() => {
                  if (q2Open) {
                    setQ2Open(false);
                  } else {
                    setQ2Open(true);
                  }
                }}
                style={{ transform: q2Open ? "rotate(180deg)" : "" }}
              />
            </div>
            <div className="answer" style={{ opacity: q2Open ? "1" : "0" }}>
              A. 괜찮습니다! 신입부원 대다수가 펜싱 초보자이며 다같이 기본
              스텝부터 배울 예정입니다.
              <br />
              &emsp; (전문 플러레 코치님과의 훈련, 선배님들과의 1:1 강습 가능)
            </div>
          </li>
          <li style={{ height: q3Open ? "147.6px" : "96px" }}>
            <div className="question">
              Q. 부원들 학번과 성비가 어떻게 되나요?
              <SlArrowDown
                className="downarrow"
                onClick={() => {
                  if (q3Open) {
                    setQ3Open(false);
                  } else {
                    setQ3Open(true);
                  }
                }}
                style={{ transform: q3Open ? "rotate(180deg)" : "" }}
              />
            </div>
            <div className="answer" style={{ opacity: q3Open ? "1" : "0" }}>
              A. 22학번부터 대학원생까지 다양하게 있으며 남녀 성비는 5:5로
              유지하고 있습니다.
            </div>
          </li>
          <li style={{ height: q4Open ? "147.6px" : "96px" }}>
            <div className="question">
              Q. 월수금토 정규 훈련은 모두 필참인가요?
              <SlArrowDown
                className="downarrow"
                onClick={() => {
                  if (q4Open) {
                    setQ4Open(false);
                  } else {
                    setQ4Open(true);
                  }
                }}
                style={{ transform: q4Open ? "rotate(180deg)" : "" }}
              />
            </div>
            <div className="answer" style={{ opacity: q4Open ? "1" : "0" }}>
              A. 주 1회 이상 필참입니다!
            </div>
          </li>
          <li style={{ height: q5Open ? "174.2px" : "96px" }}>
            <div className="question">
              Q. 펜싱 대회에도 참가할 수 있나요?
              <SlArrowDown
                className="downarrow"
                onClick={() => {
                  if (q5Open) {
                    setQ5Open(false);
                  } else {
                    setQ5Open(true);
                  }
                }}
                style={{ transform: q5Open ? "rotate(180deg)" : "" }}
              />
            </div>
            <div className="answer" style={{ opacity: q5Open ? "1" : "0" }}>
              A. 연세펜싱부는 대회 출전을 목표로 훈련에 임하기에 어느정도 실력만
              갖춰졌다면 가능합니다! <br />
              &ensp;&ensp; 또한 Y-CUP의 경우 전원 필수 참여로, 선수 혹은
              스텝으로 참여해야 합니다.
            </div>
          </li>
          <li style={{ height: q6Open ? "174.2px" : "96px" }}>
            <div className="question">
              Q. 펜싱 장비는 모두 사비로 구입해야 하나요?
              <SlArrowDown
                className="downarrow"
                onClick={() => {
                  if (q6Open) {
                    setQ6Open(false);
                  } else {
                    setQ6Open(true);
                  }
                }}
                style={{ transform: q6Open ? "rotate(180deg)" : "" }}
              />
            </div>
            <div className="answer" style={{ opacity: q6Open ? "1" : "0" }}>
              A. 와이어를 제외한 모든 장비는 공용으로 대여 가능합니다! <br />
              &ensp;&ensp; 신입 훈련 기간에도 공용 장비를 이용하여 훈련을
              진행합니다.
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
