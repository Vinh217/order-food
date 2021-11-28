import React from 'react'
import { PhoneIcon, MailIcon, LocationMarkerIcon } from '@heroicons/react/outline'

export default function Footer() {
  return (
    <section className="w-full mt-20 bg-gray-900">
      <div className="container mx-auto">
        <div className="flex py-20 w-full justify-between items-center">
          <div className="flex justify-between items-center gap-20">
            <div className="flex flex-col gap-4 text-white">
              <span>Sunday</span>
              <span>Monday</span>
              <span>Tuesday</span>
              <span>Wednesday</span>
              <span>Thursday</span>
              <span>Friday</span>
              <span>Saturday</span>
            </div>
            <div className="flex flex-col gap-4 text-white">
              {new Array(7).fill(0).map(() => <span>....</span>)}
            </div>
            <div className="flex flex-col gap-4 text-yellow-400">
              <span>Closed</span>
              <span>8.00-20.00</span>
              <span>10.00-5.00</span>
              <span>12.00-9.00</span>
              <span>7.00-1.00</span>
              <span>9.00-12.00</span>
              <span>10.00-22.00</span>
            </div>
          </div>
          <div className="self-start">
            <div className="flex flex-col text-white gap-4">
              <h2 className="font-bold text-3xl">Address</h2>
              <div className="flex items-center gap-2">
                <PhoneIcon className="w-4 h-4 text-yellow-400" />
                <span>+0911185278</span>
              </div>
              <div className="flex items-center gap-2">
                <MailIcon className="w-4 h-4 text-yellow-400" />
                <span>doquangvinhnt@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <LocationMarkerIcon className="w-4 h-4 text-yellow-400" />
                <span>Hà Nội</span>
              </div>
              <div className="social">

              </div>
            </div>
          </div>

          <div>3</div>
        </div>

      </div>

    </section>
  )
}
