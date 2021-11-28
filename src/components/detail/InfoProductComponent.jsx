import { CalendarIcon, HeartIcon, TagIcon, TruckIcon } from '@heroicons/react/outline';
import { MinusCircleIcon, PlusCircleIcon, ShoppingCartIcon, StarIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slice/CartSlice';

export default function InfoProductComponent({ productItem, category }) {
  const arrRate = productItem && new Array(productItem.rate).fill(0);
  const [qty,setQty] = useState(1);
  const [valueRadio,setValueRadio] = useState();
  const dispatch = useDispatch();

  const addQty = () => {
    setQty(prevQty => prevQty +1);
  }
  const minusQty = () => {
    if (qty > 1) setQty(prevQty => prevQty -1);
  }

  const handleAddToCart = (id) => {
    const action = productItem && addToCart({
      id,
      productItem,
      quantity: qty,
    })
    dispatch(action);
  }

  const radiobtn = [
    {label: 'Buy 2 get 15 percent off',id: 'otp1',value:'2'},
    {label: 'Buy 3 get 25 percent off',id: 'otp2' ,value:'3'},
    {label: 'Buy 5 get 50 percent off',id: 'otp3' ,value:'5'},
  ]

  const handleRadioChange = (e) => {
    e.preventDefault();
    const value = Number(e.target.value);
    setQty(value);
    setValueRadio(e.target.value);
    // setCurrentRadioValue(value);
  } 
  return (
    <div>
      {productItem &&
        <div className="flex flex-col gap-4 items-start">
          <h2 className="font-bold text-3xl leading-3">{productItem.name}</h2>
          <div className="flex">
            { arrRate.map(() =>  <StarIcon className="w-4 h-4 text-yellow-400" />) }
            {productItem.rate < 5 && new Array(5-productItem.rate).fill(0).map(() =>  <StarIcon className="w-4 h-4 text-gray-500 stroke-0" />)}
          </div>
          <div className="text-red-500 text-3xl font-bold">{Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(productItem.price)}</div>
          <div className="flex justify-between gap-6 items-center">
            <span className="text-base text-gray-300">Category:<span className="text-black text-sm capitalize pl-2">{category}</span></span>
            <span className="text-base text-gray-300">Country:<span className="text-black capitalize pl-2 text-sm">{productItem.country}</span></span>
          </div>
          <span className="text-sm">{productItem.dsc}</span>
          <div className="font-bold text-lg leading-6">Choose your options</div>

          <form className="flex flex-col gap-4" >
            {radiobtn?.map((e,i) =>(
                <label htmlFor={e.id} className="relative pl-10 text-sm cursor-pointer" >
                  <input type="radio" name="options" value={e.value} className="cursor-pointer hidden" id={e.id} onChange={handleRadioChange}/>
                  <span className="absolute w-5 h-5 rounded-full top-0 left-3 border-3 border-red-500"></span>
                  <span className={valueRadio === e.value || qty.toString() === e.value ? "w-3 h-3 rounded-full bg-red-500 absolute top-1 left-4": ""}></span>
                  {e.label}
                </label>
            ) )}
          </form>
          <div className="flex justify-between items-center w-full border-t-2 border-b-2 py-8">
            <div className="flex items-center justify-between gap-2">
              <MinusCircleIcon className="w-10 h-10 text-gray-300 stroke-0 cursor-pointer hover:text-gray-400 transition-all" onClick={minusQty}/>
              <span>{qty}</span>
              <PlusCircleIcon className="w-10 h-10 text-gray-300 stroke-0 cursor-pointer hover:text-gray-400 transition-all" onClick={addQty} />
            </div>
            <button className="rounded-full h-10 w-3/5 bg-red-500 shadow-2xl flex justify-center items-center gap-2" onClick={() =>handleAddToCart(productItem.id)}>
              <ShoppingCartIcon className="text-white w-4 h-4"/>
              <span className="text-white font-semibold">Add To Cart</span> 
            </button>
            <div className="bg-gray-200 rounded-full w-10 h-10 ">
               <HeartIcon className="w-6 h-6 stroke-0 text-red-500 mx-auto mt-2"/>
            </div>
           
          </div>
          <div className="flex flex-col gap-6 mt-6">
            <div className="border-l-4 border-red-500 flex gap-2 items-center">
              <TruckIcon className="text-red-500 w-6 h-6 ml-2"/>
              <span className="text-sm ">Free global shipping on all orders</span>
            </div>
            <div className="border-l-4 border-red-500 flex gap-2 items-center">
              <CalendarIcon className="text-red-500 w-6 h-6 ml-2"/>
              <span className="text-sm ">2 hours easy returns if you change your mind</span>
            </div>
            <div className="border-l-4 border-red-500 flex gap-2 items-center">
              <TagIcon className="text-red-500 w-6 h-6 ml-2"/>
              <span className="text-sm ">Order before noon for same day dispatch</span>
            </div>
          </div>
        </div>
      }
    </div>
  )
}
