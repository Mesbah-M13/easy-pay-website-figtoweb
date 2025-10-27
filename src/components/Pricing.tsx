import React, { JSX } from 'react'
import PricingCard from './PricingCard'

const Pricing = (): JSX.Element => {
  return (
    <div className='w-full px-4 sm:px-6 md:w-10/12 md:max-w-10/12 mx-auto py-16 md:py-24'>
      {/* Header */}
      <div className='flex flex-col text-center'>
        <h4 className='text-xs sm:text-sm text-purple-500 font-bold'>PRICING</h4>
        <h1 className='mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug'>
          Simple transparent pricing
          <span className="sm:hidden">&nbsp;</span>

          <br className='hidden' />
          no hidden fees
        </h1>
      </div>

      {/* Pricing cards */}
      <div className='mt-10 flex flex-col md:flex-row md:flex-nowrap justify-center '>
        <PricingCard />

      </div>
    </div>
  )
}

export default Pricing
