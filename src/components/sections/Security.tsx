import React from "react";

const Security = () => {
  return (
    <div className="mt-12 sm:mt-30 w-full  md:w-10/12 md:max-w-10/12 mx-auto px-10 sm:px-0 ">
      <div>
        <div>
          {" "}
          <h1 className="text-sm text-purple-500 font-bold">SECURITY</h1>
          {/* <div className="flex flex-col sm:flex sm::flex-row  justify-between items-center">
            <h1 className="text-[26px] sm:text-4xl md:text-4xl font-semibold mt-2">
              We protect your money at
              <br className="hidden sm:block" />
              every step with Easy Pay
            </h1>
            <p className="mt-6 sm:mt-0 text-md sm:text-3xl text-gray-600">
              Easy Pay ensures your money is protected at every
              <br className="hidden sm:block" />
              step with advanced encryption, real-time monitoring,   <br className="hidden sm:block" />

              and multi-factor authentication.
            </p>
          </div> */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h1 className="text-[26px] sm:text-4xl md:text-4xl font-semibold mt-2">
              We protect your money at
              <span className="sm:hidden">&nbsp;</span>
              <br className="hidden sm:block" />
              every step with Easy Pay
            </h1>

            <p className="mt-6 md:mt-0 text-md sm:text-xl text-gray-600 text-center text-left">
              Easy Pay ensures your money is protected at every
              <span className="sm:hidden">&nbsp;</span>
              <br className="hidden sm:block" />
              step with advanced encryption, real-time monitoring,
              <br className="hidden sm:block" />
              and multi-factor authentication.
            </p>
          </div>
        </div>
      </div>
      {/* Magical Dots */}
      <div className="flex flex-col md:flex-row justify-between items-start bg-gradient-to-br from-sky-50 via-orange-50 to-purple-50 mt-18 pb-12">
        {/* Section 1 */}
        <div className="flex flex-col md:pl-14 w-full md:w-auto mb-10 md:mb-0">
          {/* up-1 */}
          <div className="pt-10 md:pt-18 relative pr-6">
            {/* Gradient overlay for right border on md+ */}
            <div className="hidden md:block absolute top-0 right-0 h-full w-px bg-gradient-to-b from-gray-50 via-gray-300 to-gray-50 pointer-events-none z-0"></div>

            <div className="flex flex-col items-start space-y-4 md:space-y-8 relative z-10">
              {/* Dot */}
              <div className="relative flex items-center ml-2">
                <span className="absolute inline-flex h-4 w-4 rounded-full bg-rose-500 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-700"></span>
              </div>
              <div>
                <h1 className="text-xl font-semibold">Two-factor authentication</h1>
                <p className="mt-2 md:mt-3 text-gray-700 text-md">
                  Two-factor authentication ensures added protection by using verification steps.
                </p>
              </div>
            </div>
          </div>

          {/* down-1 */}
          <div className="pt-10 md:pt-18 relative pr-6">
            <div className="hidden md:block absolute top-0 right-0 h-full w-px bg-gradient-to-b from-gray-50 via-gray-300 to-gray-50 pointer-events-none z-0"></div>
            <div className="flex flex-col items-start space-y-4 md:space-y-8 relative z-10">
              <div className="relative flex items-center ml-2">
                <span className="absolute inline-flex h-4 w-4 rounded-full bg-green-500 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-700"></span>
              </div>
              <div>
                <h1 className="text-xl font-semibold">Biometric access</h1>
                <p className="mt-2 md:mt-3 text-gray-700 text-md">
                  Easily and securely log in with biometric features, and facial recognition.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col md:pl-14 w-full md:w-auto mb-10 md:mb-0">
          {/* up-2 */}
          <div className="pt-10 md:pt-18 relative pr-6">
            <div className="hidden md:block absolute top-0 right-0 h-full w-px bg-gradient-to-b from-gray-50 via-gray-300 to-gray-50 pointer-events-none z-0"></div>
            <div className="flex flex-col items-start space-y-4 md:space-y-8 relative z-10">
              <div className="relative flex items-center ml-2">
                <span className="absolute inline-flex h-4 w-4 rounded-full bg-rose-500 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-700"></span>
              </div>
              <div>
                <h1 className="text-xl font-semibold">Fraud detection and alerts</h1>
                <p className="mt-2 md:mt-3 text-gray-700 text-md">
                  Fraud detection safeguards your money, sending instant alerts for any activity.
                </p>
              </div>
            </div>
          </div>

          {/* down-2 */}
          <div className="pt-10 md:pt-18 relative pr-6">
            <div className="hidden md:block absolute top-0 right-0 h-full w-px bg-gradient-to-b from-gray-50 via-gray-300 to-gray-50 pointer-events-none z-0"></div>
            <div className="flex flex-col items-start space-y-4 md:space-y-8 relative z-10">
              <div className="relative flex items-center ml-2">
                <span className="absolute inline-flex h-4 w-4 rounded-full bg-amber-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-700"></span>
              </div>
              <div>
                <h1 className="text-xl font-semibold">End-to-end encryption</h1>
                <p className="mt-2 md:mt-3 text-gray-700 text-md">
                  By encryption, protecting your data from unauthorized access.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col md:pl-14 w-full md:w-auto">
          {/* up-3 */}
          <div className="pt-10 md:pt-18 relative pr-6">

            <div className="flex flex-col items-start space-y-4 md:space-y-8 relative z-10">
              <div className="relative flex items-center ml-2">
                <span className="absolute inline-flex h-4 w-4 rounded-full bg-teal-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-teal-700"></span>
              </div>
              <div>
                <h1 className="text-xl font-semibold">Transaction notifications</h1>
                <p className="mt-2 md:mt-3 text-gray-700 text-md">
                  Instant notifications for transactions keep you informed to manage your finances.
                </p>
              </div>
            </div>
          </div>

          {/* down-3 */}
          <div className="pt-10 md:pt-18 relative pr-6">

            <div className="flex flex-col items-start space-y-4 md:space-y-8 relative z-10">
              <div className="relative flex items-center ml-2">
                <span className="absolute inline-flex h-4 w-4 rounded-full bg-purple-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-purple-700"></span>
              </div>
              <div>
                <h1 className="text-xl font-semibold">24/7 Protection support</h1>
                <p className="mt-2 md:mt-3 text-gray-700 text-md">
                  Our dedicated team is available around the clock to help you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Security;
