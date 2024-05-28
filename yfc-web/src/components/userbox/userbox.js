import "./userbox.scss";
import { FaRegUser } from "react-icons/fa";

export default function UserBox() {
  return (
    <div className="userbox">
      <div className="profile">
        <div className="userimage">
          <FaRegUser />
        </div>
        <p className="name">박종호 </p>
      </div>
    </div>
  );
}
