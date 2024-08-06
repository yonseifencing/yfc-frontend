import React from "react";
import "./result.scss";

const commentlist = [
  {
    title: "최종합격",
    gray: (
      <p className="gray">
        * 아래는 신입생 안내사항입니다. <br />
        &ensp;&nbsp;잘 숙지하시어 착오 없으시길 바랍니다.
      </p>
    ),
    note: (
      <div className="note">
        <h3>신입생 OT 및 환영회</h3>
        <p>
          3월 24일 오후 7시에 스포츠과학관 다목적실3(운동체험 했던 장소)에서 약
          1시간 동안 간단한 OT가 진행됩니다. 이후 오후 8시부터 신촌
          '친구친구'에서 신입생 환영회의 의미로 저녁 식사를 할 예정입니다. OT 및
          저녁 식사는 모두 필참은 아니지만 처음 펜싱부와 만나는 날인만큼 많은
          참여 부탁드립니다. *OT 및 저녁 식사 참여 여부는 24-2 연세펜싱부 신입생
          단톡방 개설 이후 투표를 받을 예정입니다.
        </p>
        <h3>회비 안내</h3>
        <p>
          3월 25일 오후 1시까지 입회비 1만원 + 활동비 5만원, 총 6만원을 하나은행
          1235132424(김팡트)으로 입금해주세요. 회비는 공용장비 구입 및 보수,
          동아리 박람회와 같은 행사들에 사용됩니다. 입금을 완료해주신 분들에
          한하여 내일(3월 25일) 24-2 연세펜싱부 신입생 톡방에 초대해드릴
          예정입니다.
        </p>
      </div>
    ),
  },
];

export default function RecruitResultPage() {
  const version = commentlist[0];
  return (
    <div className="recruit_result">
      <div className="recruit_result_header">
        <p>합격자 조회</p>
      </div>
      <div className="result_pass">
        <div className="result_pass_inner">
          <h3>박종호 님</h3>
          <p>연세펜싱부 2024년도 2학기 신입부원 </p>
          <div>
            {/* <span className="red">1차 서류 평가</span> */}
            <span>모집에 </span>
            <span className="red">{version.title}하셨습니다.</span>
          </div>
          {version.gray}
        </div>
      </div>
      {version.note}
    </div>
  );
}
