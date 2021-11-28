import { ShoppingCartIcon } from '@heroicons/react/outline'
import { LocationMarkerIcon, StarIcon } from '@heroicons/react/solid'
import { React, useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { useDispatch } from 'react-redux'
import { useNavigate,useLocation} from 'react-router'
import { addToCart } from '../../redux/slice/CartSlice'
const queryString = require('query-string');

export default function CardProductComponent({itemproduct}) {
  const dispatch = useDispatch();
  const location = useLocation();
  const [category,setCategory] = useState('');
  useEffect(() => {
    const parse = queryString.parse(location.search);
    setCategory(parse.category);
  }, [location]);
  
  const handleClick = (id) => {
    const productItem = itemproduct;
    const action = addToCart({
      id,
      productItem,
      quantity:1,
    });
    dispatch(action);
  }
  const navigate = useNavigate();
  const handleDetailClick = (id) => {
    navigate(`/order/${category}/${id}`);
  } 

  return (
    <div className="cursor-pointer relative flex flex-col group transition-all z-30" key={itemproduct.id}>
      <div className="h-46 relative filter drop-shadow-md" onClick={() => handleDetailClick(itemproduct.id)}>
        <LazyLoadImage  throttle={1000} src={itemproduct.img} alt="name-product" className="object-cover w-full h-full flex-shrink-0" effect="blur" height={210} />
        <div className="flex items-center absolute bottom-1 filter drop-shadow-2xl">
          <StarIcon className="w-6 h-6 text-gray-100 text-shadow"/>
          <span className="font-bold text-3xl text-gray-100 text-shadow">{itemproduct.rate}</span>
        </div>
      </div>
      <div className="flex flex-col flex-1" onClick={() => handleDetailClick(itemproduct.id)}>
        <div className="flex-flex-col flex-1">
          <div className="font-bold text-md truncate my-1 ">{itemproduct.name}</div>
          <div className="text-xs break-all my-1">{itemproduct.dsc}</div>
        </div>
        <div className="flex justify-between mt-auto flex-shrink-0 items-center">
          <div className="flex items-center">
            <LocationMarkerIcon className="w-4 h-4 text-gray-400"/>
            <span className="text-xs">{itemproduct.country}</span>
          </div>
          <div className="text-md font-bold text-red-500">{Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(itemproduct.price)}</div>
        </div>
      </div>
      <button className="absolute top-4 right-0 opacity-0 group-hover:opacity-100 group-hover:right-4 transition-all z-999" onClick={()=> handleClick(itemproduct.id)}>
        <div className="bg-gray-700 bg-opacity-75 rounded-full flex items-center justify-center w-7 h-7">
          <ShoppingCartIcon className="w-4 h-4 text-white hover:text-red-500"/>
        </div>
      </button>
      <div className="before:border-4 before:border-l-transparent before:border-r-transparent before:border-t-transparent before:border-b-red-600  before:inline-block before:rotate-45 before:translate-y-2 before:translate-x-0.5 text-white bg-red-500 text-xs font-semibold absolute top-4 -left-1">Favourite</div>
    </div>
  )
}
