import React from "react";
import { useNavigate } from "react-router-dom";
import "./act.scss";
import ImgSlide from "../../components/imgslide/imgslide";

export default function ActPage() {
  const navigate = useNavigate();
  return (
    <div className="act">
      <h5>ACTIVITY</h5>
      <h3 className="title">활동</h3>
      <ImgSlide />
      <a href="/act">더보기</a>
    </div>
  );
}
