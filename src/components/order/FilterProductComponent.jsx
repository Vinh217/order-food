import { StarIcon } from '@heroicons/react/solid';
import { StarIcon as StarOutline } from '@heroicons/react/outline';
import React, { useCallback, useState } from 'react';

export default function FilterProductComponent({ handleOnClick, handlePriceFilter ,handleRateClick}) {
  const [ActiveId, setActiveId] = useState();
  const [valueRadio, setValueRadio] = useState();
  const categoryList = [
    { id: 1, text: 'burgers' },
    { id: 2, text: 'breads' },
    { id: 3, text: 'sandwiches' },
    { id: 4, text: 'drinks' },
    { id: 5, text: 'pizzas' },
  ];

  const filterPrice = [
    { label: 'Under $100', value: 'Under100', id: 'price_1' },
    { label: '$50 to $100', value: 'To50100', id: 'price_2' },
    { label: 'Under $50', value: 'Under50', id: 'price_3' },
    { label: 'Above $100', value: 'Above100', id: 'price_4' },
  ]

  const handleClick = useCallback((text, id) => {
    setActiveId(id);
    handleOnClick && handleOnClick(text);
  },
    [handleOnClick],
  );

  const handleOnChange = useCallback((e) => {
    const value = e.target.value;
    setValueRadio(value);
    handlePriceFilter && handlePriceFilter(value);
  }, [handlePriceFilter]);

  return (
    <nav className="col-span-1 row-span-3 md:block hidden">
      <div className="flex flex-col">
        <div>
          <h3 className="border-b-2 pb-2 font-bold text-xl px-4 ">Popular</h3>
          <ul className="cursor-pointer">
            {categoryList && categoryList?.map((elem) => (
              <li key={elem.id} className={ActiveId === elem.id ? 'flex items-center rounded px-4 py-4 hover:bg-gray-50 bg-gray-200' : 'flex items-center px-4 py-4 rounded hover:bg-gray-50'} onClick={() => handleClick(elem.text, elem.id)}>
                <img src={`/static/media/${elem.text.slice(0, -1)}.3829698f.svg`} alt="breads" className="w-6 h-6" />
                <span className="text-sm ml-2 capitalize">{elem.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="border-b-2 pb-2 font-bold text-xl px-4 ">Price</h3>
          <form className="flex flex-col gap-8 mt-4">
            {filterPrice.map((e) => (
              <label htmlFor={e.id} className="relative pl-12 text-sm cursor-pointer" >
                <input type="radio" name="filter_price" value={e.value} className="cursor-pointer hidden" id={e.id} onChange={(e) => handleOnChange(e)} />
                <span className="absolute w-5 h-5 rounded-full top-0 left-3 border-3 border-red-500"></span>
                <span className={valueRadio === e.value ? "w-3 h-3 rounded-full bg-red-500 absolute top-1 left-4" : ""}></span>
                {e.label}
              </label>
            ))}
          </form>
        </div>
        <div>
          <h3 className="border-b-2 pb-2 font-bold text-xl px-4 mt-4">Rate</h3>
          <div className="flex flex-col gap-2 mt-4 pl-4 cursor-pointer">
            <div className="flex gap-1" onClick={() =>handleRateClick(5)} >
              {new Array(5).fill(0).map(() => <StarIcon className="w-5 h-5 text-yellow-400" />)}
            </div>
            <div className="flex gap-1" onClick={() =>handleRateClick(4)} >
              {new Array(4).fill(0).map(() => <StarIcon className="w-5 h-5 text-yellow-400" />)}
              <StarOutline className="w-5 h-5 text-yellow-400" />
            </div>
            <div className="flex gap-1" onClick={() =>handleRateClick(3)}>
              {new Array(3).fill(0).map(() => <StarIcon className="w-5 h-5 text-yellow-400" />)}
              <StarOutline className="w-5 h-5 text-yellow-400" />
              <StarOutline className="w-5 h-5 text-yellow-400" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
