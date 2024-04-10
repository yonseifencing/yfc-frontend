import React from "react";
import "./recruit_home.scss";
import QNAbox from "../../../../components/qnabox/qnabox";
import FencingclubImg from "../../../../assets/images/home/fencingclubImg.png";

const faqlist = [
  {
    num: 1,
    question: "무슨 종목을 다루나요?",
    answer: <span>플러레와 에페를 다루고 있으나 주종목은 플러레입니다.</span>,
    aline: 1,
  },
  {
    num: 2,
    question: "펜싱은 처음인데 괜찮나요?",
    answer: (
      <span>
        괜찮습니다! 신입부원 대다수가 펜싱 초보자이며 다같이 기본스텝부터 배울
        예정입니다. <br />
        (전문 플러레 코치님과의 훈련, 선배님들과의 1:1 강습 가능)
      </span>
    ),
    aline: 2,
  },
  {
    num: 3,
    question: "부원들 학번과 성비가 어떻게 되나요?",
    answer: (
      <span>
        22학번부터 대학원생까지 다양하게 있으며 남녀 성비는 5:5로 유지하고
        있습니다.
      </span>
    ),
    aline: 1,
  },
  {
    num: 4,
    question: "월수금토 정규 훈련은 모두 필참인가요?",
    answer: <span>주 1회 이상 필참입니다!</span>,
    aline: 1,
  },
  {
    num: 5,
    question: "펜싱 대회에도 참가할 수 있나요?",
    answer: (
      <span>
        연세펜싱부는 대회 출전을 목표로 훈련에 임하기에 어느정도 실력만
        갖춰졌다면 가능합니다! <br />
        또한 Y-CUP의 경우 전원 필수 참여로, 선수 혹은 스텝으로 참여해야 합니다.
      </span>
    ),
    aline: 2,
  },
  {
    num: 6,
    question: "펜싱 장비는 모두 사비로 구매해야 하나요?",
    answer: (
      <span>
        와이어를 제외한 모든 장비는 공용으로 대여 가능합니다! <br />
        신입 훈련 기간에도 공용 장비를 이용하여 훈련을 진행합니다.
      </span>
    ),
    aline: 2,
  },
];

export default function RecruitHomePage() {
  return (
    <div className="home-recruit">
      <div className="faq">
        <h3>자주 묻는 질문</h3>
        <ul>
          {faqlist.map((item) => (
            <QNAbox
              key={item.num}
              num={item.num}
              question={item.question}
              answer={item.answer}
              openheight={item.aline == 2 ? 181 : 158}
            />
          ))}
        </ul>
      </div>
      <div className="go-recruit">
        <img src={FencingclubImg} alt="" />
        <div className="gray">
          <div className="txt">
            <h3>연세펜싱부와 함께 하세요!</h3>
            <a href="/recruit">
              <p>지원하기</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
