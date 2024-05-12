import React, { useState } from "react";
import "./signup.scss";
import SignUpInput from "../../components/signupinput/signupinput";

const inputlist = [
  {
    id: "id",
    title: "아이디",
    text: "학번.yfc 형식으로 입력해주세요.",
    isId: true,
  },
  {
    id: "pw",
    title: "비밀번호",
    text: "영문자, 숫자를 포함한 8자 이상으로 입력해주세요.",
    isId: false,
  },
  { id: "pw_r", title: "비밀번호 확인", text: "no", isId: false },
  { id: "name", title: "이름", text: "no", isId: false },
  { id: "phonenumber", title: "전화번호", text: "no", isId: false },
  { id: "major", title: "학과", text: "no", isId: false },
  { id: "year", title: "입부년도", text: "no", isId: false },
];

export default function SignUpPage() {
  const [userData, setUserData] = useState({
    id: "",
    pw: "",
    name: "",
    phonenumber: "",
    major: "",
    year: "",
  });

  const handleInputChange = (inputIdentifier, newValue) => {
    setUserData((prevData) => {
      return { ...prevData, [inputIdentifier]: newValue };
    });
    console.log(userData);
  };

  const handleRegCheck = () => {};

  // 비밀번호
  // const regPw = /^[A-Za-z0-9]{8,}$/;
  // const [pwchecktxt, setPwchecktxt] = useState("");
  // const [pwtxtcolor, setPwtxtcolor] = useState("");

  // const pwCheck = (e) => {
  //   if (regPw.test(pw)) {
  //     setPwchecktxt("사용 가능한 비밀번호입니다.");
  //     setPwtxtcolor("yellowgreen");
  //   } else {
  //     setPwchecktxt("비밀번호를 다시 확인해주세요.");
  //     setPwtxtcolor("red");
  //   }
  // };

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
      <form>
        <h4>회원가입</h4>

        {inputlist.map((item) => (
          <SignUpInput
            title={item.title}
            text={item.text}
            isId={item.isId}
            onChange={(e) => {
              if (item.id === "phonenumber") {
                e.target.value = e.target.value.replace(
                  /(\d{3})(\d{4})(\d)/,
                  "$1-$2-$3"
                );
              }
              handleInputChange(item.id, e.target.value);
            }}
            onInput={item.id == "phonenumber" ? changeInputphone : () => {}}
          />
        ))}

        {/* <input
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
         */}
        {/* <div className="sizedbox"></div> */}

        <button>회원가입</button>
      </form>
    </div>
  );
}
