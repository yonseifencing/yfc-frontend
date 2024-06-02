import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.scss";

export default function LoginPage() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleInputId = (e) => {
    setId(e.target.value);
  };

  const handleInputPw = (e) => {
    setPw(e.target.value);
    console.log("pw: " + pw);
  };

  const handleClickButton = (e) => {
    if ((id == "") | (pw == "")) {
      e.preventDefault();
    }
  };

  const loginClick = (e) => {
    e.preventDefault();
    fetch(
      "https://port-0-yfc-backend11-754g42alutk1q0d.sel5.cloudtype.app/login/",
      {
        method: "POST",
        headers: [["Content-Type", "application/json"]],
        body: JSON.stringify({
          student_number: id,
          password: pw,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="login">
      <form>
        <h4>로그인</h4>
        <input type="text" placeholder="아이디" onChange={handleInputId} />
        <input
          type="password"
          placeholder="비밀번호"
          onChange={handleInputPw}
        />
        <button
          style={{
            opacity: id.length != "" && pw.length != "" ? "0.7" : "0.5",
          }}
          onClick={loginClick}
        >
          로그인
        </button>
        <div className="links">
          <a href="/signup">회원가입</a>
          <a href="">비밀번호 찾기</a>
        </div>
      </form>
    </div>
  );
}
