import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeIngredientsComponent() {
  return (
    <section>
      <div className=" bg-gray-200 lg:bg-ingredients lg:h-screen bg-no-repeat bg-cover mt-24">
        <div className="flex justify-between px-4 items-center py-14 lg:flex-row flex-col">
          <div className="flex flex-col gap-12">
            <div className="bg-white flex items-center justify-center rounded-lg max-w-[380px] min-h-[180px] relative transition-all duration-500 hover:bg-red-500 hover:-translate-y-2 hover:text-white group cursor-pointer">
              <div className="p-10">
                <div className="font-bold text-xl py-3">Mild Butter</div>
                <div className="text-sm text-gray-400 group-hover:text-white">Patak's Butter Chicken Mild is a creamy tomato and butter flavour curry sauce</div>
              </div>
              <span className="absolute w-16 h-16 rounded-full bg-white -top-8 left-4 shadow-2xl inline-block text-center pt-4 font-medium text-2xl text-black">01</span>
            </div>
            <div className="bg-white flex items-center justify-center rounded-lg max-w-[380px] min-h-[180px] relative transition-all duration-500 hover:bg-red-500 hover:-translate-y-2 hover:text-white group cursor-pointer lg:ml-14">
              <div className="p-10">
                <div className="font-bold text-xl py-3">Slices Beef</div>
                <div className="text-sm text-gray-400 group-hover:text-white">Get quality Beef Slices at Tesco. Shop in store or online</div>
              </div>
              <span className="absolute w-16 h-16 rounded-full bg-white -top-8 left-4 shadow-2xl inline-block text-center pt-4 font-medium text-2xl text-black">02</span>
            </div>
            <div className="bg-white flex items-center justify-center rounded-lg max-w-[380px] min-h-[180px] relative transition-all duration-500 hover:bg-red-500 hover:-translate-y-2 hover:text-white group cursor-pointer">
              <div className="p-10">
                <div className="font-bold text-xl py-3">Sleek Onion</div>
                <div className="text-sm text-gray-400 group-hover:text-white">Green onions have a sleek linear shape with white or pale-green bulbs and long green tops</div>
              </div>
              <span className="absolute w-16 h-16 rounded-full bg-white -top-8 left-4 shadow-2xl inline-block text-center pt-4 font-medium text-2xl text-black">03</span>
            </div>
          </div>
          <div className="flex flex-col gap-12 mt-10 lg:mt-0">
            <div className="bg-white flex items-center justify-center rounded-lg max-w-[380px] min-h-[180px] relative transition-all duration-500 hover:bg-red-500 hover:-translate-y-2 hover:text-white group cursor-pointer">
              <div className="p-10">
                <div className="font-bold text-xl py-3">Fresh Bread</div>
                <div className="text-sm text-gray-400 group-hover:text-white">Homemade bread is more nutritious than your store-bought variety</div>
              </div>
              <span className="absolute w-16 h-16 rounded-full bg-white -top-8 left-4 shadow-2xl inline-block text-center pt-4 font-medium text-2xl text-black">04</span>
            </div>
            <div className="bg-white flex items-center justify-center rounded-lg max-w-[380px] min-h-[180px] relative transition-all duration-500 hover:bg-red-500 hover:-translate-y-2 hover:text-white group cursor-pointer lg:-ml-14">
              <div className="p-10">
                <div className="font-bold text-xl py-3">Lettuce Leaf</div>
                <div className="text-sm text-gray-400 group-hover:text-white">It is most often grown as a leaf vegetable, but sometimes for its stem and seeds</div>
              </div>
              <span className="absolute w-16 h-16 rounded-full bg-white -top-8 left-4 shadow-2xl inline-block text-center pt-4 font-medium text-2xl text-black">05</span>
            </div>
            <div className="bg-white flex items-center justify-center rounded-lg max-w-[380px] min-h-[180px] relative transition-all duration-500 hover:bg-red-500 hover:-translate-y-2 hover:text-white group cursor-pointer">
              <div className="p-10">
                <div className="font-bold text-xl py-3">Glow Cheese</div>
                <div className="text-sm text-gray-400 group-hover:text-white">Glowfood. Cheese. Is. Unreal! As a cheese fanatic</div>
              </div>
              <span className="absolute w-16 h-16 rounded-full bg-white -top-8 left-4 shadow-2xl inline-block text-center pt-4 font-medium text-2xl text-black">06</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex justify-center flex-col items-center gap-2">
          <span className="font-pango text-yellow-400 md:text-lg ">Best food</span>
          <div className="font-bold text-3xl">Super delicious Steak<span className="text-red-500"> Hamburger</span></div>
          <span className="text-red-500 text-4xl font-bold">$25.00</span>
          <Link to="order" className="w-28 h-8 rounded-full bg-red-500 text-white font-semibold shadow-2xl text-center pt-1">Order Now</Link>
        </div>
      </div>

    </section>
  )
}
