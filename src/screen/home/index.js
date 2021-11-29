import React from 'react'
import BannerComponent from '../../components/home/BannerComponent';
import HomeIngredientsComponent from '../../components/home/HomeIngredientsComponent';
import HomeSlideCategoryComponent from '../../components/home/HomeSlideCategoryComponent';
import HowWorkComponent from '../../components/home/HowWorkComponent';

export default function Home() {
  return (
    <>
     <BannerComponent /> 
     <HowWorkComponent />
     <HomeIngredientsComponent />
     <HomeSlideCategoryComponent />
    </>
  )
}
