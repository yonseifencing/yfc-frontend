import React, { useState } from "react";
import "./login.scss";

export default function LoginPage() {
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

  const onSubmit = (e) => {
    // e.preventDefault();
    fetch(
      "https://port-0-yfc-backend11-754g42aluti5qxg.sel5.cloudtype.app/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: id, pw: pw }),
      }
    );
    // .then((res) => res.json());
    // .then((data) => {
    //   if (data) {
    //     navigate("/");
    //   } else {
    //     alert("로그인 실패");
    //   }
    // });
  };

  return (
    <div className="login">
      <form action="">
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
          onClick={handleClickButton}
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
