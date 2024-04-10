import React, { useState } from "react";
import "./recruit.scss";
import { SlArrowDown } from "react-icons/sl";
import nowImage from "../../assets/images/recruitImage.jpg";

export default function RecruitDetailPage() {
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
    </div>
  );
}
