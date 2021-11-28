import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slick.css";

export default function BannerComponent() {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider {...settings} >
        <div>
          <div className="bg-banner-one h-60 bg-cover md:h-screen"></div>
        </div>
        <div>
        <div className="bg-banner-two h-60 bg-cover  md:h-screen"></div>
        </div>
        <div>
        <div className="bg-banner-three h-60 bg-cover  md:h-screen"></div>
        </div>
      </Slider>
    </>
  );
}
