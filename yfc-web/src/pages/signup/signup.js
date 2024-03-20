import React from "react";
import "./signup.scss";

export default function SignUpPage() {
  return (
    <div className="signup">
      <form action="">
        <h4>회원가입</h4>
        <input type="text" placeholder="아이디" />
        <input type="password" placeholder="비밀번호" />
        <input type="password" placeholder="비밀번호 확인" />

        <input type="text" placeholder="이름" />
        <input type="text" placeholder="학번" />
        <input type="text" placeholder="학과" />
        <input type="text" placeholder="입부년도" />

        <button>회원가입</button>
      </form>
    </div>
  );
}
