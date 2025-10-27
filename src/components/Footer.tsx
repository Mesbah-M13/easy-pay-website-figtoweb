import React from 'react'

const Footer = () => {
  return (


    <footer className="bg-gradient-to-b from-white via-gray-50 to-purple-300 bg-[length:100%_200%] bg-bottom">

      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://Easy Pay.com/" className="flex items-center">
              <img src="/assets/logo.svg" className="h-18 me-3" alt="Easy Pay Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap ">Easy Pay</span>
            </a>
            <p className='w-[90%] sm:w-[46%] text-gray-600'>Easy Pay offers secure, seamless, and fee-free payments for effortless global transactions.</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">

            <div>
              <h2 className="mb-6 text-md  font-semibold text-gray-900  ">Short links</h2>
              <ul className="text-gray-600 text-sm font-medium">
                <li className="mb-4">
                  <a href="https://easy-pay-website-figtoweb.vercel.app/" className="hover:underline ">Features</a>
                </li>
                <li className="mb-4">
                  <a href="https://easy-pay-website-figtoweb.vercel.app/" className="hover:underline">How it works</a>
                </li>
                <li className="mb-4">
                  <a href="https://easy-pay-website-figtoweb.vercel.app/" className="hover:underline">Security</a>
                </li>
                <li>
                  <a href="https://easy-pay-website-figtoweb.vercel.app/" className="hover:underline">Testimonial</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-md font-semibold text-gray-900  ">Other Pages</h2>
              <ul className="text-gray-500 text-sm font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                </li>
                <li >
                  <a href="#" className="hover:underline">404</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-2" />
        <div className="flex justify-center items-center">
          <span className="text-sm text-gray-500 text-center">
            © 2024 <a href="https://EasyPay.com/" className="hover:underline">Easy Pay™</a>. All Rights Reserved.
          </span>
        </div>

      </div>
    </footer>
  )
}

export default Footer