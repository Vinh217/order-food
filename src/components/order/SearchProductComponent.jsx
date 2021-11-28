import { SearchIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';
export default function SearchProductComponent({handleSubmit}) {

  const [value,setValue] = useState('');

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
      <div className="flex">
        <form className="flex items-center" onSubmit={handleFormSubmit}>
          <input type="text" className="form-input w-98 py-1 rounded-full" placeholder="search cmmd" value={value} onChange={handleChange} required  onInvalid="this.setCustomValidity('Không được để trống')"
          onInput="this.setCustomValidity('')" />
          <button type="submit" className="-ml-8">
            <SearchIcon className="w-6 h-6 text-gray-400"/>
          </button>
        </form>
      </div>
    </div>
  )
}
