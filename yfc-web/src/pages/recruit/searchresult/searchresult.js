import React from "react";
import "./searchresult.scss";

export default function SearchResultPage() {
  const handleClick = (e) => {
    e.preventDefault();
    window.location.href = "/recruit/result";
  };

  return (
    <div className="search_result">
      <div className="search_result_header">
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
        <button onClick={handleClick}>검색</button>
      </form>
    </div>
  );
}
