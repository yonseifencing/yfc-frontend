import React from "react";
import "./aboutpart.scss";
import ImageCard from "../../imagecard/imagecard";
// 이미지
import TrainingImg from "../../../assets/images/about/training.jpg";
import ExchangeImg from "../../../assets/images/about/exchange.jpg";
import CompetitionImg from "../../../assets/images/about/competition.jpg";
import YcupImg from "../../../assets/images/about/ycup.jpg";
import FenbamImg from "../../../assets/images/about/fenbam.jpg";
import MTImg from "../../../assets/images/about/mt.jpg";

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
    hashtag: "#타대학 #펜싱부 #펜싱클럽",
    img: ExchangeImg,
  },
  {
    id: "c3",
    title: "대회",
    hashtag: "#대학배 #SK배 #메달 #응원 ",
    img: CompetitionImg,
  },
  {
    id: "c4",
    title: "Y-CUP",
    hashtag: "#연펜 #주최 #펜싱대회",
    img: YcupImg,
  },
  {
    id: "c5",
    title: "펜싱인의 밤",
    hashtag: "#YB #OB #연말정산",
    img: FenbamImg,
  },
  {
    id: "c6",
    title: "MT",
    hashtag: "#놀러가서도 #결국 #펜싱얘기 ",
    img: MTImg,
  },
];
export default function AboutPart() {
  return (
    <div className="home-about">
      <h5>ABOUT</h5>
      <h3>동아리 소개</h3>
      <p>
        연세펜싱부는 체육대학 소속 동아리로서, 1957년부터 펜싱길만 걷고 있는
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
      {/* <div className="imgs">
        <img src={About1Img} alt="" />
        <img src={About3Img} alt="" />
      </div> */}
    </div>
  );
}
