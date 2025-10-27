import { div } from 'motion/react-client'
import React from 'react'

const AppPromotion = () => {
  return (
    <section
      className="w-full md:w-10/12 md:max-w-10/12 mx-auto m-0 sm:my-20 h-[60vh] bg-no-repeat bg-cover bg-center sm:rounded-2xl"
      style={{ backgroundImage: "url('/assets/bg.svg')" }}
    >
      <div className="relative max-w-3xl mx-auto text-center px-4">
        <h2 className="pt-24 text-3xl md:text-4xl text-white font-semibold leading-snug mb-4">
          Ready to experience seamless secure payments globally
        </h2>
        <p className="mb-8 text-sm md:text-white text-gray-200">
          Ready for hassle-free, secure payments anywhere in the world? Start using Monks Pay today — it&apos;s fast, free, and focused on keeping your transactions secure!
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 transition rounded-full px-6 py-2 text-white font-semibold">
            Download the App
          </button>
          <button className="border border-white text-white hover:bg-amber-50 hover:text-blue-700 transition rounded-full px-6 py-2 font-semibold">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  )
}

export default AppPromotion
