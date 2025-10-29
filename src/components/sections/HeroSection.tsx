"use client";

import Image from "next/image";
import { PiCheckCircleBold } from "react-icons/pi";
import { SiApple } from "react-icons/si";
import UserCountBadge from "./UserCountBadge";
import PaymentReceived from "./PaymentReceived";

const HeroSection = () => {
  return (
    <div className="w-full flex md:w-11/12 md:max-w-11/12 mx-auto">
      <div className=" flex flex-col mx-6 md:ml-22 mt-8 xl:mt-28">
        <div className="relative">
          <p className="text-gray-500 mb-2 font-semibold text-sm md:text-lg">EASY PAYMENT</p>

          <h1
            className="tracking-wide mt-6 md:mt-0 text-2xl md:text-6xl font-semibold leading-snug relative "
          >
            Pay fast and smarter
            <br />
            <span
              className="leading-none"
            >
              from anywhere
            </span>{" "}
          </h1>

          <p className="mt-6 text-[12px] sm:text-[14px] text-gray-600 md:text-gray-500 tracking-wide">
            Experience the future of payments:fast,secure,and tailored
            <br className="hidden md:block" />
            for the next gerneration's convenience and trust.
          </p>

          {/* Move hero line to the right */}
          <Image
            src="/assets/hero-line.svg"
            alt="line"
            width={450}
            height={0}
            className="hidden md:block object-contain absolute top-28 xl:right-20 translate-x-10"
          />
        </div>
        <div className="md:w-[60%] xl:w-[52%] flex items-center justify-baseline gap-6 lg:gap-8  md:gap-0 md:justify-between mt-8 md:mt-14 lg:mt-4 xl:mt-14 text-gray-600">
          <div className="flex gap-1 md:gap-2 bg-black px-4 py-4 md:px-2 md:py-4 rounded-2xl items-center">
            <SiApple className="text-2xl md:text-4xl text-white" />
            <span className="text-white">
              <p className=" text-[8px] md:text-xs">Download on the</p>
              <h1 className=" text-sm md:text-md font-medium">App Store</h1>
            </span>
          </div>
          <div className="flex gap-1 md:gap-2 bg-black px-4 py-4 md:px-3 lg:px-1 md:py-4 rounded-2xl items-center">
            <Image
              src="/assets/google-playstore.svg"
              alt="playstore logo"
              width={0}
              height={0}
              className="w-6 h-6 md:w-6 md:h-6"

            />
            <span className="text-white xl:ml-1.5 lg:w-[9vw] ">
              <p className="text-[8px] md:text-xs">GET IT ON</p>
              <h1 className=" text-sm md:text-md font-medium">Google Play</h1>
            </span>
          </div>

          {/* <div className="flex gap-2 md:gap-4 bg-black px-3 py-4 md:px-4 md:py-4 rounded-2xl items-center">
            <Image
              src="/assets/google-playstore.svg"
              alt="playstore logo"
              width={40}
              height={40}
              className="w-6 h-6 md:w-6 md:h-6"

            />
            <span className="text-white">
              <p className="text-[8px] md:text-xs">GET IT ON</p>
              <h1 className="text-sm md:text-md font-normal md:font-medium">Google Play</h1>
            </span>
          </div> */}
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-baseline gap-2 md:gap-4 mt-6 md:mt-4 lg:mb-12">
          <div className="flex items-center gap-2 ">
            <PiCheckCircleBold
              className="text-gray-600 text-md md:text-xl"
              style={{ filter: "drop-shadow(0 0 1px currentColor)" }}
            />
            <p className="text-slate-800  ">No Card Required</p>
          </div>
          <div className=" hidden md:block-line md:flex items-center gap-2">
            <PiCheckCircleBold
              className="text-gray-600 text-md md:text-xl"
              style={{ filter: "drop-shadow(0 0 1px currentColor)" }}
            />
            <p className="text-slate-800 ">Fast acceptance</p>
          </div>
        </div>
      </div>


      <div className="hidden lg:w-6/10 xl:w-5/12 lg:block lg:relative lg:h-[60vh] xl:h-[82vh]">
        <Image
          src="/assets/hero_man-Photoroom.png"
          alt="man hero img"
          fill
          className="hidden lg:block absolute left-10 object-cover object-[left_75%_top_50%] z-50"
        />
        <div className=" absolute top-100 right-25 md:top-60 md:-right-20 z-50 ">
          <UserCountBadge />
        </div>
        <div className="absolute top-[420px] left-0 z-50">
          <PaymentReceived />
        </div>
      </div>



    </div>
  );
};

export default HeroSection;
