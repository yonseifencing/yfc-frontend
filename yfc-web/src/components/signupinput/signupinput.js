import "./signupinput.scss";

export default function SignUpInput({
  title,
  text,
  onChange,
  onInput,
  onBlur,
  isPwCheck,

  type,
}) {
  return (
    <div
      className="signupinput"
      style={{ marginTop: title == "이름" ? "30px" : "" }}
    >
      <h3>{title}</h3>
      {text != "" && <p>{text}</p>}
      {title == "아이디" && (
        <div className="idinput">
          <input placeholder="아이디" onChange={onChange} />
          <button>중복 확인</button>
        </div>
      )}
      {title != "아이디" && title != "입부년도" && (
        <input
          placeholder={title}
          onChange={onChange}
          onInput={onInput}
          onBlur={onBlur}
          type={type}
        />
      )}
      {title == "입부년도" && (
        <div className="yearinput">
          <select onChange={onChange}>
            <option value="24">24</option>
            <option value="23">23</option>
            <option value="22">22</option>
            <option value="21">21</option>
            <option value="20">20</option>
            <option value="19">19</option>
            <option value="18">18</option>
            <option value="17">17</option>
            <option value="16">16</option>
          </select>
          <span>년도</span>
          <select onChange={onChange}>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
          <span>학기</span>
        </div>
      )}
      {/* {title === "비밀번호" && isPwCheck && <p className="checktxt"></p>}
      {title === "비밀번호" && !isPwCheck && <p className="checktxt">변경</p>} */}

      {/* {title == "비밀번호 확인" && (
        <p className="checktxt" >
          {rechecktxt}
        </p>
      )} */}
    </div>
  );
}
