import React from 'react';
import ReactImageMagnify from 'react-image-magnify';
export default function ImageMagnifiersComponent({ fooditem }) {
  const img = fooditem && fooditem.img;
  return (
    <div className="">
      {fooditem && <ReactImageMagnify {...{
        smallImage: {
          alt: 'Wristwatch by Ted Baker London',
          isFluidWidth: true,
          src: img
        },
        largeImage: {
          src: img,
          width: 1200,
          height: 1800
        }
      }} className="z-10" />}
      <div className="flex mt-4">
        <img src={img} alt="foodimgage" className="w-24 h-24 object-cover flex-shrink-0 cursor-pointer"/>
      </div>
    </div>
  )
}
