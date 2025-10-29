import React from 'react'
import { MdOutlineTrendingUp } from 'react-icons/md'

const PaymentReceived = () => {

  return (


    <div className="relateive top-1/4 left-10 p-4 bg-white rounded-xl shadow-2xl border border-gray-100/50">
      <p className="text-sm text-gray-800 font-medium mb-1">Payment Received</p>
      <p className="text-sm font-bold text-sky-600">+35,890.00</p>
      <div className="flex justify-between items-center gap-2.5 text-xs mt-2 text-gray-500">
        <span>11th Jan, 2024</span>
        <div className='flex items-center gap-2'>
          <span className="text-green-500 font-semibold flex items-center ">3.09%
          </span>
          <span>
            <MdOutlineTrendingUp className='text-green-500 font-bold' />
          </span>
        </div>
      </div>

    </div>
  )
}

export default PaymentReceived