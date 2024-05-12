import "./signupinput.scss";

export default function SignUpInput({
  title,
  text,
  inputtype,
  isId,
  onChange,
  onInput,
}) {
  return (
    <div className="signupinput">
      <h3>{title}</h3>
      {text != "no" && <p>{text}</p>}
      {isId && (
        <div className="idinput">
          <input type="text" placeholder="아이디" onChange={onChange} />
          <button>중복 확인</button>
        </div>
      )}
      {!isId && (
        <input
          type={inputtype}
          placeholder={title}
          onChange={onChange}
          onInput={onInput}
        />
      )}
    </div>
  );
}
