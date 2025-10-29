import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";

const PricingCard = () => {
  return (
    <div className="flex mt-12 flex-col md:flex-row justify-between items-center md:gap-4 xl:gap-8 ">
      {/* <!-- Card 1 --> */}
      <div className="bg-white rounded-2xl shadow-lg w-full sm:w-80 md:w-84 xl:dw-96 h-[500px] p-14 border-2 border-gray-200 flex flex-col justify-between transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Free Plan</h3>
          <p className="text-gray-500 mt-1">Free for personal payments.</p>

          <div className="mt-6">
            <span className="text-5xl font-bold text-gray-900">$0</span>
            <span className="text-gray-500 text-lg">/month</span>
          </div>
          <hr className="m-8 h-[2px] border-0 bg-gradient-to-r from-white via-gray-300 to-white" />
          <ul className="mt-6 space-y-3 text-gray-700">
            <li className="flex items-center gap-2 whitespace-nowrap">
              <span className="text-blue-600">
                <FaRegCheckCircle className="bg-gray-300 rounded-full" />
              </span>
              Up to 100 transactions per month
            </li>
            <li className="flex items-center gap-2 whitespace-nowrap">
              <span className="text-blue-600">
                <FaRegCheckCircle className="bg-gray-300 rounded-full" />
              </span>
              Basic fraud protection
            </li>
            <li className="flex items-center gap-2 whitespace-nowrap">
              <span className="text-blue-600">
                <FaRegCheckCircle className="bg-gray-300 rounded-full" />
              </span>
              Email support
            </li>
          </ul>

        </div>

        <button className="mt-8 border border-gray-800 rounded-full py-2 font-medium hover:bg-gray-900 hover:text-white transition-all">
          Get Free Plan
        </button>
      </div>

      {/* <!-- Card 2 (Middle Highlight) --> */}
      <div className="bg-black rounded-2xl shadow-lg w-full sm:w-80 md:w-84 xl:dw-96 h-[500px] p-11 flex flex-col justify-between transition-all duration-500 hover:scale-110 hover:shadow-[0_0_40px_rgba(0,0,0,0.5)] hover:-translate-y-3">
        <div>
          <h3 className="text-xl font-semibold text-white">Advanced</h3>
          <p className="text-gray-400 mt-1">
            Minimal fees for advanced transactions
          </p>

          <div className="mt-6">
            <span className="text-5xl font-bold text-white">$19</span>
            <span className="text-gray-400 text-lg">/month</span>
          </div>
          <hr className="m-8 h-[2px] border-0 bg-gradient-to-r from-gray-900 via-gray-200 to-gray-900" />

          <ul className="mt-6 space-y-3 text-gray-300">
            <li className="flex items-center gap-2">
              <span className="text-white">
                {" "}
                <FaRegCheckCircle className="bg-gray-600 rounded-full" />
              </span>{" "}
              Up to 1000 transections per month
            </li>
            <li className="flex items-center gap-2">
              <span className="text-white">
                {" "}
                <FaRegCheckCircle className="bg-gray-600 rounded-full" />
              </span>{" "}
              Advanced fraud protection
            </li>
            <li className="flex items-center gap-2">
              <span className="text-white">
                {" "}
                <FaRegCheckCircle className="bg-gray-600 rounded-full" />
              </span>{" "}
              Detailed transaction reports
            </li>
            <li className="flex items-center gap-2">
              <span className="text-white">
                {" "}
                <FaRegCheckCircle className="bg-gray-600 rounded-full" />
              </span>{" "}
              Priority email & chat support
            </li>
          </ul>
        </div>

        <button className="mt-8 bg-white text-black rounded-full py-2 font-semibold hover:bg-gray-200 transition-all">
          Get Pro Plan
        </button>
      </div>

      {/* <!-- Card 3 --> */}
      <div className="bg-white rounded-2xl shadow-lg w-full sm:w-80 md:w-84 xl:dw-96 h-[500px] p-11 flex flex-col border-2 border-gray-200 justify-between transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Business</h3>
          <p className="text-gray-500 mt-1">Premium business transactions</p>

          <div className="mt-6">
            <span className="text-5xl font-bold text-gray-900">$49</span>
            <span className="text-gray-500 text-lg">/month</span>
          </div>
          <hr className="m-8 h-[2px] border-0 bg-gradient-to-r from-white via-gray-300 to-white" />
          <ul className="mt-6 space-y-3 text-gray-600">
            <li className="flex items-center gap-2">
              <span className="text-blue-600">
                <FaRegCheckCircle className="bg-gray-300 rounded-full" />
              </span>{" "}
              Up to 1000 transections per month
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-600">
                <FaRegCheckCircle className="bg-gray-300 rounded-full" />
              </span>{" "}
              Advanced fraud protection
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-600">
                <FaRegCheckCircle className="bg-gray-300 rounded-full" />
              </span>{" "}
              Detailed transaction reports
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-600">
                <FaRegCheckCircle className="bg-gray-300 rounded-full" />
              </span>{" "}
              Priority email & chat support
            </li>
          </ul>
        </div>

        <button className="mt-8 border border-gray-800 rounded-full py-2 font-medium hover:bg-gray-900 hover:text-white transition-all">
          Get Enterprise Plan
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
