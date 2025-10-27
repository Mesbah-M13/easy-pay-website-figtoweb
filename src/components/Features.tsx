import { div, image } from "motion/react-client";
import Image from "next/image";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const Features = () => {

  const images = [
    {
      image: "/assets/frame1.svg"
    },
    {
      image: "/assets/frame2.svg"
    },
    {
      image: "/assets/frame3.svg"
    },
    {
      image: "/assets/frame4.svg"
    },
    {
      image: "/assets/frame5.svg"
    },
    {
      image: "/assets/frame6.svg"
    },


  ];

  return (
    <div className="h-screen">
      <main className="w-full md:w-10/12 md:max-w-10/12 mx-auto ">
        <div className="flex flex-col items-center">
          <p className="mt-[10%] text-xl font-semibold text-purple-600">
            FEATURES
          </p>
          <div
            className="mt-4 text-6xl font-semibold leading-16
"
          >
            <h1> Why choose Easy Pay for</h1>
            <span>
              <h1 className="ml-15">effortless payments?</h1>
            </span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6 justify-center p-8 ">
          {/* <!-- Card 1 --> */}
          <div className="bg-blue-50 rounded-xl shadow-sm p-6 w-full md:w-80 text-center">
            <div className="flex justify-center ">
              <Image
                src="/assets/ipay.svg"
                height={50}
                width={50}
                alt="instant payment"
              />
            </div>
            <h3 className="mt-10 text-lg font-semibold text-gray-900 mb-2">
              Instant payments
            </h3>
            <p className="text-gray-600 text-sm">
              Send money to friends or family in real-time, for free.
            </p>
          </div>

          {/* -- Card 2 -- */}
          <div className="bg-orange-50 rounded-xl shadow-sm p-6 w-full md:w-80 text-center">
            <div className="flex justify-center ">
              <Image
                src="/assets/hfee.svg"
                height={50}
                width={50}
                alt="instant payment"
              />
            </div>
            <h3 className="mt-10  text-lg font-semibold text-gray-900 mb-2">
              No hidden fees
            </h3>
            <p className="text-gray-600 text-sm">
              Clear and simple pricing. Always be aware of your costs.
            </p>
          </div>
          {/* -- Card 3 -- */}

          <div className="bg-sky-50 rounded-xl shadow-sm p-6 w-full md:w-80 text-center">
            <div className="flex justify-center ">
              <Image
                src="/assets/dwallet.svg"
                height={50}
                width={50}
                alt="instant payment"
              />
            </div>
            <h3 className="mt-10   text-lg font-semibold text-gray-900 mb-2">
              Digital wallet
            </h3>
            <p className="text-gray-600 text-sm">
              Store money securely and make fast transfers or purchases.{" "}
            </p>
          </div>
          {/* -- Card 4 -- */}

          <div className="bg-purple-100 rounded-xl shadow-sm p-6 w-full md:w-80 text-center">
            <div className="flex justify-center ">
              <Image
                src="/assets/securetr.svg"
                height={50}
                width={50}
                alt="instant payment"
              />
            </div>
            <h3 className="mt-10  text-lg font-semibold text-gray-900 mb-2">
              Secure transactions
            </h3>
            <p className="text-gray-600 text-sm">
              End-to-end encryption for all transactions.{" "}
            </p>
          </div>
        </div>
      </main>
      <div className=" mt-4">
        <InfiniteMovingCards
          items={images}
          direction="right"
          speed="slow"
        />
      </div>

    </div>
  );
};

export default Features;
