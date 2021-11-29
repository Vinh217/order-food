import React from 'react'

export default function HowWorkComponent() {
  return (
    <section className="mt-12">
      <div className="container mx-auto">
        <div className="flex justify-center flex-col items-center">
          <div className="font-pango text-yellow-400 md:text-lg ">Order now!</div>
          <h2 className="text-3xl font-bold">How it work</h2>
        </div>
        <div className="mt-12 px-12">
          <div className="container grid grid-cols-1 xl:grid-cols-4 sm:grid-cols-2 justify-items-center items-center gap-6">
            <div className="relative">
                <img src="/static/media/step-1.7975394a.jpg" alt="step-1" className="border-8 rounded-full border-white shadow-2xl" />
              <span className="rounded-full absolute top-0 right-0 border-4 bg-red-500 text-white border-white shadow-2xl w-14 h-14 text-center uppercase text-xs pt-2">
                01 
                step
              </span>
              <div className="absolute top-1/2 left-[175px] bg-step-1 h-12 w-24 bg-no-repeat hidden xl:block">
                {/* <img src="/static/media/arrow-1.e50b7ddf.png" alt="arrow" /> */}
              </div>

            </div>
            <div className="relative">
                <img src="/static/media/step-2.0d5ff727.jpg" alt="step-2" className="border-8 rounded-full border-white shadow-2xl" />
              <span className="rounded-full absolute top-0 right-0 border-4 bg-red-500 text-white border-white shadow-2xl w-14 h-14 text-center uppercase text-xs pt-2">
                02
                step
              </span>
              <div className="absolute top-1/2 left-[175px]  bg-step-2 h-12 w-24 bg-no-repeat hidden xl:block">
                {/* <img src="/static/media/arrow-1.e50b7ddf.png" alt="arrow" /> */}
              </div>

            </div>
            <div className="relative">
                <img src="/static/media/step-3.070bae01.jpg" alt="step-3" className="border-8 rounded-full border-white shadow-2xl" />
              <span className="rounded-full absolute top-0 right-0 border-4 bg-red-500 text-white border-white shadow-2xl w-14 h-14 text-center uppercase text-xs pt-2">
                03
                step
              </span>
              <div className="absolute top-1/2 left-[175px]  bg-step-3 h-12 w-24 bg-no-repeat hidden xl:block">
              </div>

            </div>
            <div className="relative">
                <img src="/static/media/step-4.d6316948.jpg" alt="step-1" className="border-8 rounded-full border-white shadow-2xl" />
              <span className="rounded-full absolute top-0 right-0 border-4 bg-red-500 text-white border-white shadow-2xl w-14 h-14 text-center uppercase text-xs pt-2">
                04
                step
              </span>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
