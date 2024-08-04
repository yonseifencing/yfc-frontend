import React from "react";
import "./recruitresult.scss";

export default function RecruitResultPage() {
  return (
    <div className="recruitresult">
      <div className="resulttop">
        <p>합격자 조회</p>
      </div>
      <form>
        <div className="note">이름, 학번을 정확히 입력한 후 검색해주세요.</div>
        <div>
          <span>이름</span>
          <input type="text" />
        </div>
        <div>
          <span>학번</span>
          <input type="number" />
        </div>
        <button>검색</button>
      </form>
    </div>
  );
}
