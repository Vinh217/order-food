import { SearchIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';
import {ViewListIcon,ViewGridIcon} from '@heroicons/react/solid';
export default function SearchProductComponent({ handleSubmit }) {
  const [value, setValue] = useState('');
  const handleChange = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    setValue(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit && handleSubmit(value);
    setValue('');
  }

  return (
    <div className="row-span-1">
      <div className="flex gap-4 md:px-0 justify-between">
        <form className="flex items-center" onSubmit={handleFormSubmit}>
          <input type="text" className="form-input lg:w-[600px] w-[150px] py-1 rounded-full" placeholder="search product" value={value} onChange={handleChange} required onInvalid="this.setCustomValidity('Không được để trống')"
            onInput="this.setCustomValidity('')" />
          <button type="submit" className="-ml-8">
            <SearchIcon className="w-6 h-6 text-gray-400" />
          </button>
        </form>
        <select className="rounded-lg h-9 max-w-[180px] text-sm cursor-pointer">
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Rate: Low to High</option>
          <option>Rate: Rate: High to Low</option>
        </select>
        <ViewGridIcon className="w-8 h-8 text-gray-400 cursor-pointer md:block hidden"/>
        <ViewListIcon className="w-8 h-8 text-gray-400 cursor-pointer md:block hidden"/>
      </div>
    </div>
  )
}
