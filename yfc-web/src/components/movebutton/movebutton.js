import "./movebutton.scss";

export default function MoveButton({ title }) {
  return (
    <button className="movebutton">
      <h3>{title}</h3>
    </button>
  );
}
