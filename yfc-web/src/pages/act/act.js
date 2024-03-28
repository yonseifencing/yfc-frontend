import React from "react";
import { useNavigate } from "react-router-dom";
import "./act.scss";
import ImgSlide from "../../components/imgslide/imgslide";

export default function ActPage() {
  const navigate = useNavigate();
  return (
    <div className="act">
      <ImgSlide />
      <button onClick={() => navigate("/activity")}>활동 더보기</button>
    </div>
  );
}
