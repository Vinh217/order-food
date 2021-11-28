import React from 'react'
import {ArrowNarrowRightIcon}  from '@heroicons/react/solid'

export default function BannerProductComponent({category}) {
  return (
    <section>
      <div className="w-full bg-banner-product bg-no-repeat h-80">
        <div className="flex justify-center items-center text-white h-full flex-col">
          <div className="p-4 text-4xl capitalize font-bold">{category}</div>
          <div className="w-auto">
            <div className="flex items-center gap-2">
              <span>Home</span>
              <ArrowNarrowRightIcon className="w-4 h-4"/>
              <span>Shop</span>
              <ArrowNarrowRightIcon className="w-4 h-4"/>
              <span className="capitalize whitespace-nowrap">{category}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
