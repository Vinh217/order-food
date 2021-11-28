import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import foodApi from '../../api/foodApi'
import ImageMagnifiersComponent from '../../components/detail/ImageMagnifiersComponent'
import InfoProductComponent from '../../components/detail/InfoProductComponent'
import BannerProductComponent from '../../components/order/BannerProductComponent'
import Spinner from '../../layouts/components/loading/Spinner'

export default function DetailPage() {
  // const navigate = useNavigate();
  const location = useLocation();
  const [foodItem,setFoodItem] = useState('');
  const [category,setCategory] = useState('');
  const [isLoading,setIsLoading] = useState(false);
  useEffect(() => {
    (async () => {
      const [category,id] =  location.pathname.split('/').slice(2);
      const data = await foodApi.get(category,id);
      setCategory(category);
      setFoodItem(data[0]);
      setIsLoading(true)
    })()
  },[location]);
  return (
    <>
      <BannerProductComponent category={category}/>
      <div className="container mt-20 mx-auto">
        <div className="grid grid-cols-2 gap-12">
          <ImageMagnifiersComponent fooditem={foodItem}/>
          {isLoading ?<InfoProductComponent productItem={foodItem} category={category}/> :<Spinner />}
          
        </div>
      </div>

    </>
  )
}
