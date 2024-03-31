import React, { useState } from "react";
import "./signup.scss";

export default function SignUpPage() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pw_r, setPw_r] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [major, setMajor] = useState("");
  const [year, setYear] = useState("");

  // 아이디

  // 비밀번호
  const regPw = /^[A-Za-z0-9]{8,}$/;
  const [pwchecktxt, setPwchecktxt] = useState("");
  const [pwtxtcolor, setPwtxtcolor] = useState("");

  const pwCheck = (e) => {
    if (regPw.test(pw)) {
      setPwchecktxt("사용 가능한 비밀번호입니다.");
      setPwtxtcolor("yellowgreen");
    } else {
      setPwchecktxt("비밀번호를 다시 확인해주세요.");
      setPwtxtcolor("red");
    }
  };

  // 휴대폰번호
  const regPhone = /\d{2,3}-\d{3,4}-\d{4}/g;
  const changeInputphone = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
    if (e.target.value.length > 11) {
      e.target.value = e.target.value.slice(0, -1);
    }
  };

  return (
    <div className="signup">
      <form action="">
        <h4>회원가입</h4>
        <h3>아이디</h3>
        <h5>본인학번.yfc 형식으로 입력해주세요.</h5>
        <div className="idbox">
          <input type="text" placeholder="아이디 (학번.yfc 형식)" />
          <button>중복 확인</button>
        </div>
        <h3>비밀번호</h3>
        <h5>영문자, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</h5>
        <input
          type="password"
          placeholder="비밀번호"
          onChange={(e) => {
            setPw(e.target.value);
          }}
          onBlur={pwCheck}
        />
        <div className="pwchecktext" style={{ color: pwtxtcolor }}>
          {pwchecktxt}
        </div>
        <h3>비밀번호 확인</h3>
        <input
          type="password"
          placeholder="비밀번호 확인"
          onChange={(e) => {
            setPw_r(e.target.value);
          }}
        />

        <h3 className="nametxt">이름</h3>
        <input type="text" placeholder="이름" />
        <h3>휴대폰번호</h3>
        <input
          type="text"
          placeholder="휴대폰번호"
          onChange={(e) => {
            e.target.value = e.target.value.replace(
              /(\d{3})(\d{4})(\d)/,
              "$1-$2-$3"
            );
            setPhone(e.target.value);
          }}
          onInput={changeInputphone}
        />
        <h3>학과</h3>
        <input type="text" placeholder="학과" />
        <h3>입부년도</h3>
        <input type="text" placeholder="입부년도" />

        <button>회원가입</button>
      </form>
    </div>
  );
}
