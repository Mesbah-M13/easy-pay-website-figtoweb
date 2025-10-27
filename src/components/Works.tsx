import Image from "next/image";
import Link from "next/link";
import React from "react";

const Works = () => {
  return (
    <div className="bg-slate-100 min-h-screen pt-40 md:pb-30">
      <div className="w-full md:w-10/12 md:max-w-10/12 mx-auto flex flex-col md:flex-row justify-between items-start md:items-center px-8">
        <div className="relative">
          <h1 className="text-purple-500 text-md font-bold">HOW IT WORKS</h1>
          <h1 className="mt-2 text-4xl font-semibold leading-snug">
            Make payments, transfers, and
            <br />
            <span className="inline-block align-middle">more in 3 simple steps</span>
          </h1>
        </div>
        <div className="mt-18"><Link
          href="/"
          className="md:ml-6 mt-4 md:mt-[2.7rem] bg-blue-600 px-6 py-4 text-md rounded-4xl text-white whitespace-nowrap self-start"
        >
          Get Started Now
        </Link></div>
      </div>

      <section className="ml-4 bg-slate-100  py-12 px-4 md:px-16">
        <div className="px-4 max-w-9/10 mx-auto bg-white  rounded-2xl shadow-sm p-8 md:p-12">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 text-center md:text-left">

            {/* <!-- Step 1 --> */}
            <div className="p-6 flex flex-col items-center md:items-start">
              <div className="flex items-center space-x-3 mb-4">
                {/* <span className="text-6xl font-extrabold text-gray-100 leading-none">01</span> */}
                <Image
                  src="/assets/no1.svg"
                  width={80}
                  height={50}
                  alt="num 1"
                />
                <div className="relative right-20 top-10  p-2 rounded-lg">
                  <Image

                    src="/assets/work1.svg"
                    width={40}
                    height={40}
                    alt="num 1" />

                </div>
              </div>
              <div className="w-7/10  mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Download Easy Pay</h3>
                <p className="text-gray-600 text-sm">
                  Get the Easy Pay app today from the App Store or Google Play hassle free.
                </p>
              </div>
            </div>

            {/* <!-- Step 2 --> */}
            <div className="p-6 pl-14 flex flex-col items-center md:items-start">
              <div className="flex items-center space-x-3 mb-4">
                {/* <span className="text-6xl font-extrabold text-gray-100 leading-none">01</span> */}
                <Image
                  src="/assets/no1.svg"
                  width={80}
                  height={50}
                  alt="num 1"
                />
                <div className="relative right-20 top-10  p-2 rounded-lg">
                  <Image

                    src="/assets/work1.svg"
                    width={40}
                    height={40}
                    alt="num 1" />

                </div>
              </div>
              <div className="w-7/10  mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Download Easy Pay</h3>
                <p className="text-gray-600 text-sm">
                  Get the Easy Pay app today from the App Store or Google Play hassle free.
                </p>
              </div>
            </div>

            {/* <!-- Step 3 --> */}
            <div className="p-6 pl-14 flex flex-col items-center md:items-start">
              <div className="flex items-center space-x-3 mb-4">
                {/* <span className="text-6xl font-extrabold text-gray-100 leading-none">01</span> */}
                <Image
                  src="/assets/no1.svg"
                  width={80}
                  height={50}
                  alt="num 1"
                />
                <div className="relative right-20 top-10  p-2 rounded-lg">
                  <Image

                    src="/assets/work1.svg"
                    width={40}
                    height={40}
                    alt="num 1" />

                </div>
              </div>
              <div className="w-7/10  mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Download Easy Pay</h3>
                <p className="text-gray-600 text-sm">
                  Get the Easy Pay app today from the App Store or Google Play hassle free.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="w-[82vw] mx-auto pl-6">
        <Image
          src="/assets/working_man.svg"
          width={1200}
          height={400}
          alt="working & drinking coffee"
          className="w-full h-auto"
        />
      </div>

    </div>
  );
};

export default Works;
