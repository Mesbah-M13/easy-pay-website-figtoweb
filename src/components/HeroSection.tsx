"use client"

import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className="w-11/12 md:max-w-10/12 mx-auto">
      <div className="flex flex-col mt-28">
        <div className="relative">
          <p className="text-gray-500 mb-2 font-semibold">EASY PAYMENT</p>

          <h1 className="tracking-wide
 text-4xl md:text-6xl font-semibold leading-snug relative 
">
            Pay fast and smarter
            <br />
            <span className='leading-none
'>            from anywhere
            </span>          </h1>

          <p className='mt-4 text-gray-500 tracking-wide'>Experience the future of payments:fast,secure,and tailored
            <br />
            for the next gerneration's convenience and trust.
          </p>

          {/* Move hero line to the right */}
          <Image
            src="/assets/hero-line.svg"
            alt="line"
            width={450}
            height={0}
            className="object-contain absolute top-28 right-185 translate-x-10"
          />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
