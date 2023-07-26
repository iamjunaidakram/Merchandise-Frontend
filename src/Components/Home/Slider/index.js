import React, { Component } from "react";
import Slider from "react-slick";
import "./slider.scss";
import SliderImg from '../../images/sliderone.jpg'
import SliderImgTwo from '../../images/slidertwo.jpg'


function SliderPage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src={SliderImg} alt="" />
        </div>
        <div>
        <img src={SliderImgTwo} alt="" />
        </div>
        <div>
        <img src={SliderImg} alt="" />
        </div>
        <div>
        <img src={SliderImgTwo} alt="" />
        </div>
        <div>
        <img src={SliderImg} alt="" />
        </div>
        <div>
        <img src={SliderImgTwo} alt="" />
        </div>
      </Slider>
    </div>
  );
}
export default SliderPage;
