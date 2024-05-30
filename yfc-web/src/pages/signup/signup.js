import React, { useState } from "react";
import "./signup.scss";
import SignUpInput from "../../components/signupinput/signupinput";

const inputlist = [
  {
    id: "id",
    title: "아이디",
    text: "학번.yfc 형식으로 입력해주세요.",
  },
  {
    id: "pw",
    title: "비밀번호",
    text: "영문자, 숫자를 포함한 8자 이상으로 입력해주세요.",
    type: "password",
  },
  { id: "pw_r", title: "비밀번호 확인", type: "password" },
  { id: "name", title: "이름", type: "text" },
  { id: "phonenumber", title: "전화번호", type: "text" },
  { id: "major", title: "학과", type: "text" },
  { id: "year", title: "입부년도" },
];

export default function SignUpPage() {
  const [userData, setUserData] = useState({
    id: "",
    pw: "",
    pw_r: "",
    name: "",
    phonenumber: "",
    major: "",
    year: "24-1",
  });

  const handleInputChange = (inputIdentifier, newValue) => {
    setUserData((prevData) => {
      return { ...prevData, [inputIdentifier]: newValue };
    });
  };

  // 비밀번호 체크
  const regPw = /^[A-Za-z0-9]{8,}$/;

  const [isPwCheck, setIsPwCheck] = useState("");
  const pwCheck = () => {
    if (regPw.test(userData.pw)) {
      setIsPwCheck(true);
    } else {
      setIsPwCheck(false);
    }
    console.log(isPwCheck);
  };
  // const [pwchecktxt, setPwchecktxt] = useState("");
  // const [pwtxtcolor, setPwtxtcolor] = useState("");
  // const [pwRchecktxt, setPwRchecktxt] = useState("");
  // const [pwRtxtcolor, setPwRtxtcolor] = useState("");

  // const pwCheck = (e, pwORpw_r) => {
  //   if (pwORpw_r == "pw") {
  //     if (regPw.test(e.target.value)) {
  //       setPwchecktxt("사용 가능한 비밀번호입니다.");
  //       setPwtxtcolor("yellowgreen");
  //     } else {
  //       setPwchecktxt("비밀번호를 다시 확인해주세요.");
  //       setPwtxtcolor("red");
  //     }
  //     console.log(pwchecktxt);
  //   } else {
  //     if (userData.pw_r == "") {
  //     } else if (userData.pw == userData.pw_r) {
  //       setPwRchecktxt("비밀번호가 일치합니다.");
  //       setPwRtxtcolor("yellowgreen");
  //     } else {
  //       setPwRchecktxt("비밀번호가 일치하지 않습니다.");
  //       setPwRtxtcolor("red");
  //     }
  //     console.log(pwORpw_r);
  //   }
  // };
  // const pwRCheck = (e) => {
  //   if (userData.pw == userData.pw_r) {
  //     setPwchecktxt("비밀번호가 일치합니다 .");
  //     setPwtxtcolor("yellowgreen");
  //   } else {
  //     setPwchecktxt("비밀번호가 일치하지 않습니다.");
  //     setPwtxtcolor("red");
  //   }
  // };

  const handleOnInputPhone = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
    if (e.target.value.length > 11) {
      e.target.value = e.target.value.slice(0, -1);
    }
  };

  const registerClick = (e) => {
    e.preventDefault();
    fetch(
      "https://port-0-yfc-backend11-754g42alutk1q0d.sel5.cloudtype.app/signup/",
      {
        method: "POST",
        headers: [["Content-Type", "application/json"]],
        body: JSON.stringify({
          student_number: "2020181818",
          email: "yonfen123@gmail.com",
          name: "정이삭",
          password: "qqqqqqqqq1!",
          password2: "qqqqqqqqq1!",
          join_year: "2024-1",
          major: "스포츠응용산업학과",
          phone_number: "01011111111",
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="signup">
      <form>
        <h4>회원가입</h4>

        {inputlist.map((item) => (
          <SignUpInput
            key={item.id}
            title={item.title}
            text={item.text}
            type={item.type}
            // isPwCheck={isPW}
            onChange={(e) => {
              if (item.id === "phonenumber") {
                e.target.value = e.target.value.replace(
                  /(\d{3})(\d{4})(\d)/,
                  "$1-$2-$3"
                );
              }
              handleInputChange(item.id, e.target.value);
            }}
            onInput={item.id == "phonenumber" ? handleOnInputPhone : () => {}}
            onBlur={item.id == "pw" ? pwCheck : () => {}}
          />
        ))}
        <button onClick={registerClick}>회원가입</button>
      </form>
    </div>
  );
}
