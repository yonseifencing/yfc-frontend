import React from "react";
import "./aboutpart.scss";
import ImageCard from "../../imagecard/imagecard";
import Exchange53Img from "../../../assets/images/act/exchange53.jpg";
import Fenbam1065Img from "../../../assets/images/act/fenbam1065.jpg";
import YcupImg from "../../../assets/images/act/YCUP.jpg";
import TrainingImg from "../../../assets/images/act/training.jpg";

const imgcardlist = [
  {
    id: "c1",
    title: "정규 훈련",
    hashtag: "#체력운동 #풋워크 #연습경기",
    img: TrainingImg,
  },
  {
    id: "c2",
    title: "교류전",
    // hashtag: "#월수금토 #다목적실",
    img: Exchange53Img,
  },
  {
    id: "c3",
    title: "대회",
    // hashtag: "#YB #OB #연말정산",
    img: Exchange53Img,
  },
  {
    id: "c4",
    title: "Y-CUP",
    hashtag: "#연대 #개최 #펜싱 대회",
    img: YcupImg,
  },
  {
    id: "c5",
    title: "펜싱인의 밤",
    hashtag: "#YB #OB #연말정산",
    img: Fenbam1065Img,
  },
  {
    id: "c6",
    title: "MT",
    // hashtag: "#YB #OB #연말정산",
    img: Fenbam1065Img,
  },
];
export default function AboutPart() {
  return (
    <div className="home-about">
      <h5>ABOUT</h5>
      <h3>동아리 소개</h3>
      <p>
        연세 펜싱부는 체육대학 소속 동아리로서, 1957년부터 펜싱길만 걷고 있는
        역사와 문화가 있는 동아리입니다.
      </p>
      <div className="imgcards">
        {imgcardlist.map((item) => (
          <ImageCard
            key={item.id}
            title={item.title}
            hashtag={item.hashtag}
            img={item.img}
          />
        ))}
      </div>
    </div>
  );
}
