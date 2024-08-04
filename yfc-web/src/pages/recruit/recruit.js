import React from "react";
import "./recruit.scss";
import ColorTxtBlock from "../../components/colortxtblock/colortxtblock";
import recruitImg from "../../assets/images/recruitImage.jpg";
import smallrecruitImg from "../../assets/images/recruitImage479.jpg";
import RecruitTextBox from "../../components/recruittextbox/recruittextbox";
import { FaArrowRightLong } from "react-icons/fa6";

const targetslist = [
  {
    id: "t1",
    title: "지원 대상",
    content: [
      <p>- 연속 2학기 이상 활동할 수 있는 사람</p>,
      <p>- 신촌 운동에 참여할 수 있는 사람</p>,
      <p>- 대학생/대학원생 누구나</p>,
    ],
  },
  {
    id: "t2",
    title: "우대 대상",
    content: [
      <p>- 펜싱부 운동을 자주 나올 수 있는 사람</p>,
      <p>- 펜싱을 배워본 경험이 있는 사람</p>,
    ],
  },
  {
    id: "t3",
    title: "지원 방법",
    content: [
      <p>- 1차 서류 평가</p>,
      <p>- 2차 구두 면접</p>,
      <p>- 3차 운동 면접</p>,
    ],
  },
];

const scheduleslist = [
  {
    id: "s1",
    title: "서류 지원",
    content: [
      <p>
        - 지원서 작성 마감 <br />
        &ensp; 3월 8일 (금) 18시
      </p>,
      <p>
        - 결과 및 면접 일시 발표 <br />
        &ensp; 3월 8일 (금) 22시
      </p>,
    ],
  },
  {
    id: "s2",
    title: "구두 면접",
    content: [
      <p>
        - 구두 면접
        <br />
        &ensp; 3월 9일 (토) ~ 3월 10일 (일)
      </p>,
      <p>
        - 결과 및 운동 면접 일시 발표 <br />
        &ensp; 3월 10일 (일) 20시
      </p>,
    ],
  },
  {
    id: "s3",
    title: "운동 면접",
    content: [
      <p>
        - 운동 면접 <br />
        &ensp; 3월 11일 (월) <br />
        &ensp; 18:00 ~ 19:00, 19:00 ~ 20:00 <br />
        &ensp; 20:00 ~ 21:00, 21:00 ~ 22:00 <br />
        &ensp; 中 한 타임
      </p>,
    ],
  },
  {
    id: "s4",
    title: "최종 발표",
    content: [
      <p>
        - 최종 발표 <br />
        &ensp; 3월 13일 (수)
      </p>,
    ],
  },
];

const noteslist = [
  "- 신입생의 경우 기본기를 다지기 위해 필수적으로 4주간 한 주에 2회 이상 운동에 참여해야 합니다. (이후 미달자의 경우 이번 학기 활동이 불가능합니다.)",
  "- 4주 훈련 기간: 3월 18일 ~ 4월 13일",
  '- 이번 학기 운동 장소는 "스포츠 과학관 다목적실3" 입니다.',
  "- 신입생 4주 훈련을 이수하면 정규 부원이 되어 정규 운동에 참여하게 됩니다.",
  "- 회비는 입회비 1만원, 활동비 5만원입니다. 추가로 운동을 위한 개인 바디와이어 장비 구매가 필수입니다. (이후 공동구매를 진행하여 15,000 ~ 49,000원 제품 중 본인이 선택)",
];

export default function RecruitPage() {
  return (
    <div className="recruit">
      <div className="recruit_small">
        {/* <div className="recruit_image_small">
          <img src={smallrecruitImg} alt="" />
          <div className="gray"></div>
          <div className="recruit_text">
            <h2>지금은 모집 기간이 아닙니다.</h2>
            <h3>다음 기수는 9월 모집 예정입니다.</h3>
          </div>
        </div> */}
        <div className="result">
          <h2>
            2024년도 2학기 <br />
            연세펜싱부 신입부원 모집
          </h2>
          <a href="">
            <span>지원서 작성</span>
            <FaArrowRightLong />
          </a>
          <a href="recruit/searchresult" className="recruit_btn_green">
            <span>모집결과 조회</span>
            <FaArrowRightLong />
          </a>
        </div>
        <div className="recruit_content_small">
          <RecruitTextBox title="지원 방법" list={targetslist} />
          <RecruitTextBox title="모집 일정" list={scheduleslist} />
          <div className="notes">
            <h3>참고사항</h3>
            {noteslist.map((note) => (
              <p key={Math.random()}>{note}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
