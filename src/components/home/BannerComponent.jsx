import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slick.css";
import {ShoppingCartIcon} from '@heroicons/react/outline'
import { Link } from 'react-router-dom';
export default function BannerComponent() {

  const banner = [
    { banner: 'bg-banner-one', title1:'ENJOY YOUR MEAL',title2: 'Good food is wise',title3:'medicine'},
    { banner: 'bg-banner-two', title1:'HAPPY YOUR SPECIAL',title2: 'Love at first',title3:'bite'},
    { banner: 'bg-banner-three', title1:'GOOD FOOD IS GOOD MOOD',title2: 'The belly rules the',title3:'mind'},
  ]
  
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
        {banner.map((e)=> (
          <div>
          <div className={`${e.banner} h-60 bg-cover md:h-screen`}>
            <div className="flex flex-col container mx-auto text-white justify-center md:items-start h-full gap-4 items-center">
              <span className="font-bold text-xl hidden md:block">{e.title1}</span>
              <h1 className="font-bold lg:text-7xl text-2xl">{e.title2}</h1>
              <span className="font-bold lg:text-7xl text-red-500 text-xl">{e.title3}</span>
              <Link to="order"  className="w-32 h-10 rounded-full bg-red-500 flex items-center justify-center cursor-pointer hover:bg-red-600 transition-all">
                <ShoppingCartIcon className="w-6 h-6 text-white"/>
                <span className="font-semibold text-xs" onClick>ORDER NOW</span>
              </Link>
            </div>
          </div>
        </div>
        ))}
      </Slider>
    </>
  );
}
