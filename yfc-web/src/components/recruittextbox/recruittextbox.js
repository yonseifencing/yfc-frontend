import "./recruittextbox.scss";

export default function RecruitTextBox({ title, list }) {
  return (
    <div className="recruittextbox">
      <h3>{title}</h3>
      <div className="card">
        {list.map((item) => (
          <div key={item.id}>
            <h4>{item.title}</h4>
            {item.content.map((content) => (
              <div key={Math.random()}>{content}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
