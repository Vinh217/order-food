import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
export default function NotFoundProduct() {
  return (
    <section className="flex justify-center items-center flex-col">
       <LazyLoadImage src="/static/media/empty-shop.e78970f0.svg"  throttle={1000} alt="not found" className="object-cover w-full h-full flex-shrink-0"   height={300} effect="blur" />
       <span className="font-bold text-3xl">There Is No Product You Are Looking For 🕵️</span>
    </section>
  )
}
