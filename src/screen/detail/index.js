import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import foodApi from '../../api/foodApi'
import DescriptionComponent from '../../components/detail/DescriptionComponent'
import ImageMagnifiersComponent from '../../components/detail/ImageMagnifiersComponent'
import InfoProductComponent from '../../components/detail/InfoProductComponent'
import ReviewComponent from '../../components/detail/ReviewComponent'
import BannerProductComponent from '../../components/order/BannerProductComponent'
import Spinner from '../../layouts/components/loading/Spinner'

export default function DetailPage() {
  const location = useLocation();
  const [foodItem,setFoodItem] = useState('');
  const [category,setCategory] = useState('');
  const [isLoading,setIsLoading] = useState(false);
  const [switchtabs,setSwitchTabs] = useState('Description');
  const tabs = ['Description','Reviews'];

  useEffect(() => {
    (async () => {
      const [category,id] =  location.pathname.split('/').slice(2);
      const data = await foodApi.get(category,id);
      setCategory(category);
      setFoodItem(data[0]);
      setIsLoading(true)
    })()
  },[location]);

  const handleSwitchTabs = (data) => {
    setSwitchTabs(data);
  }

  console.log(switchtabs);

  return (
    <>
      <BannerProductComponent category={category}/>
      <div className="container mt-20 mx-auto">
        <div className="grid grid-cols-2 gap-12">
          <ImageMagnifiersComponent fooditem={foodItem}/>
          {isLoading ?<InfoProductComponent productItem={foodItem} category={category}/> :<Spinner />}
          
        </div>
      </div>
      <div className="container mx-auto mt-20 ">
        <div className="flex justify-center items-center gap-14 relative">
          {tabs.map((e) => <div className="font-bold text-lg z-10 cursor-pointer text-yellow-500" onClick={() =>handleSwitchTabs(e)}>{e}</div> )}
          {/* <div className="font-bold text-lg z-10 cursor-pointer" onClick={handleToggle}>Reviews</div> */}
          <div className={switchtabs === 'Description' ? "bg-red-500 absolute -top-3 left-[440px] w-32 h-12 rounded-lg transition-all duration-500" :  "bg-red-500 absolute -top-3 left-[580px] w-32 h-12 rounded-lg transition-all duration-500"}></div>
        </div>
        {switchtabs === 'Description' ? <DescriptionComponent /> : <ReviewComponent />}
        
      </div>
      
    </>
  )
}
