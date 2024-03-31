import React, { useState } from "react";
import "./signup.scss";

export default function SignUpPage() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pw_r, setPw_r] = useState("");
  const [name, setName] = useState("");

  return (
    <div className="signup">
      <form action="">
        <h4>회원가입</h4>
        <input type="text" placeholder="아이디" />
        <input type="password" placeholder="비밀번호" />
        <input type="password" placeholder="비밀번호 확인" />

        <input type="text" placeholder="이름" className="nameinput" />
        <input type="text" placeholder="학과" />
        <input type="text" placeholder="입부년도" />

        <button>회원가입</button>
      </form>
    </div>
  );
}
