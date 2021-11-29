import React, { useEffect, useRef } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slick.css';
import {ChevronDoubleRightIcon,ChevronDoubleLeftIcon} from '@heroicons/react/solid';

function NextArrow({ className, style, onClick }) {
  return (
    <div
      className={className}
      onClick={onClick}
      >
        {/* <ChevronDoubleRightIcon className=" text-red-500 bg-gray-50 h-8 w-8 rounded-lg stroke-0 shadow-2xl -mt-10"/> */}
      </div>
  );
}

function PrevArrow({ className, style, onClick }) {
  return (
    <div className={className} onClick={onClick} >
       {/* <ChevronDoubleLeftIcon className=" text-red-500 bg-gray-50 h-8 w-8 rounded-lg stroke-0 shadow-2xl -mt-6"/> */}
    </div>
  );
}

function CustomSlide ({ index,text }) {
  return (
    <div className="text-center">
      <div className="bg-white flex justify-center items-center w-32 h-32 rounded-lg shadow-md">
        <img src={`/static/media/${index}`} alt="category" className="w-16 h-16"/>
      </div>
      <div className="text-xs font-bold text-gray-700 mt-4">{text}</div>
    </div>
   
  );
}


export default function HomeSlideCategoryComponent() {
  const sliderRef = useRef(null);
  useEffect(() => {
    console.log(sliderRef);
  }, []);

  const settings = {
    arrows:false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  };

  const listcateImg = [
    {img: 'burger.33e152d0.svg',text:'BREAKFAST'},
    {img: 'coffee.06d317df.svg',text:'COFFEE'},
    {img: 'pork.98f99006.svg',text:'PORK HAM'},
    {img: 'dinner.5e12f363.svg',text:'DINNER'},
    {img: 'tea.591a2362.svg',text:'TEA'},
    {img: 'lunch.68d27597.svg',text:'LUNCH'},
    {img: 'juice.dd087137.svg',text:'JUICE'},
    {img: 'chicken.0bf00278.svg',text:'GRILLDED CHICKEN'},
    {img: 'beef.95b6ea9e.svg',text:'ROAST BEEF'},
]

  return (
    <section className="relative">
      <img src="/static/media/bg-icon-1.142c8af2.svg" alt="pz" className="absolute -top-48 w-72 animate-ltr-linear-infinite" />
      <img src="/static/media/bg-icon-2.0f00240f.svg" alt="hb" className="absolute -top-56 right-0 w-40  animate-ltr-linear-infinite z-[-1]"/>
      <img src="/static/media/bg-icon-3.fef0a1ab.svg" alt="pzmin" className="absolute top-20 right-0 w-40 z-[-1] animate-ltr-linear-infinite " />
      <div className="container mx-auto mt-24 bg-white shadow-md rounded-lg relative">
        <div className="flex justify-center items-center flex-col gap-2 py-12">
        <span className="font-pango text-yellow-400 md:text-lg ">What we have?</span>
        <span className="font-bold text-3xl" >Browse food category</span>
        </div>
        <div className="shadow-md w-10 h-10 rounded-lg absolute left-2 bottom-[150px] cursor-pointer bg-white flex justify-center items-center"  onClick={() => sliderRef.current.slickPrev()}>
            <ChevronDoubleLeftIcon className=" text-red-500 h-4 w-4 rounded-lg stroke-0" />
        </div>
      
        <Slider {...settings}  ref={sliderRef} className="mx-16 flex gap-6 pb-20">
          {listcateImg.map((e)=>(
           <CustomSlide index={e.img} text={e.text}/>
          ))}
        </Slider>
        <div className="absolute right-2 bottom-[150px] shadow-md w-10 h-10 rounded-lg cursor-pointer bg-white flex justify-center items-center" onClick={() => sliderRef.current.slickNext()}> 
          <ChevronDoubleRightIcon className=" text-red-500 h-4 w-4 rounded-lg stroke-0 " />
        </div>
        
      </div>
    </section>
  )
}
