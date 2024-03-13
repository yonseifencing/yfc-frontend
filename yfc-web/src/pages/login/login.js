import React from "react";
import "./login.scss";

export default function LoginPage() {
  return (
    <div className="container">
      <form action="">
        <h4>로그인</h4>
        <input type="text" placeholder="아이디" />
        <input type="text" placeholder="비밀번호" />
        <button>로그인</button>
      </form>
    </div>
  );
}
