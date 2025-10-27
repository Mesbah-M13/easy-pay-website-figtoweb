import React, { JSX } from 'react'
import PricingCard from './PricingCard'

const Pricing = (): JSX.Element => {
  return (
    <div className='w-full md:w-10/12 md:max-w-10/12 mx-auto h-screen'>
      <div className='flex flex-col text-center'>
        <h4 className='text-sm text-purple-500 font-bold '>PRICING</h4>
        <h1 className='mt-2 text-4xl font-semibold'>Simple transparent pricing <br /> no hidden fees </h1>
      </div>
      <div >
        <PricingCard />
      </div>
    </div>
  )
}

export default Pricing