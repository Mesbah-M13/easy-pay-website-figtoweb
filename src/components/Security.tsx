import React from "react";

const Security = () => {
  return (
    <div className="mt-30 w-full md:w-10/12 md:max-w-10/12 mx-auto px- h-screen">
      <div>
        <div>
          {" "}
          <h1 className="text-sm text-purple-500 font-bold">SECURITY</h1>
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-semibold mt-2">
              We protect your money at
              <br /> every step with Easy Pay
            </h1>
            <p className="text-gray-600">
              Easy Pay ensures your money is protected at every
              <br /> step with advanced encryption, real-time monitoring, <br />{" "}
              and multi-factor authentication.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center bg-gradient-to-br from-sky-50 via-orange-50 to-purple-50  mt-18 pb-12">
        {/* sec-1 */}
        <div className="flex flex-col pl-14 ">
          {/* up-1 */}

          <div className=" pt-18">
            <div className="relative pr-6 ">
              {/* Gradient overlay for the right border */}
              <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-gray-300 via-gray-500 to-gray-300 pointer-events-none z-0"></div>

              {/* Red dot centered above the text */}
              <div className="flex flex-col items-start space-y-8 relative z-10 ">                {/* dot animated ping  */}
                <div className="relative flex items-center ml-2">
                  <span className="absolute inline-flex h-4 w-4 rounded-full bg-rose-500 opacity-75 animate-ping"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-700"></span>
                </div>

                <div>
                  <h1 className="text-xl font-semibold">Two-factor authentication</h1>
                  <p className="mt-3 text-gray-700 text-md">
                    Two-factor authentication ensures added protection by using verification steps.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* down-1 */}
          <div className=" pt-18">
            <div className="relative pr-6 ">
              {/* Gradient overlay for the right border */}
              <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-gray-300 via-gray-500 to-gray-300 pointer-events-none z-0"></div>

              {/* Red dot centered above the text */}
              <div className="flex flex-col items-start space-y-8 relative z-10 ">                {/* dot animated ping  */}
                <div className="relative flex items-center ml-2">
                  <span className="absolute inline-flex h-4 w-4 rounded-full bg-green-500 opacity-75 animate-ping"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-700"></span>
                </div>

                <div>
                  <h1 className="text-xl font-semibold">                    Biometric access
                  </h1>
                  <p className="mt-3 text-gray-700 text-md">
                    Easily and securely log in with biometric features, and facial recognition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* sec-2 */}
        <div className="flex flex-col pl-14 ">
          {/* up-2 */}

          <div className=" pt-18">
            <div className="relative pr-6 ">
              {/* Gradient overlay for the right border */}
              <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-gray-300 via-gray-500 to-gray-300 pointer-events-none z-0"></div>

              {/* Red dot centered above the text */}
              <div className="flex flex-col items-start space-y-8 relative z-10 ">                {/* dot animated ping  */}
                <div className="relative flex items-center ml-2">
                  <span className="absolute inline-flex h-4 w-4 rounded-full bg-rose-500 opacity-75 animate-ping"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-700"></span>
                </div>

                <div>
                  <h1 className="text-xl font-semibold">Fraud detection and alerts</h1>
                  <p className="mt-3 text-gray-700 text-md">
                    Fraud detection safeguards your money, sending instant alerts for any activity.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* down-2 */}
          <div className=" pt-18">
            <div className="relative pr-6 ">
              {/* Gradient overlay for the right border */}
              <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-gray-300 via-gray-500 to-gray-300 pointer-events-none z-0"></div>

              {/* Red dot centered above the text */}
              <div className="flex flex-col items-start space-y-8 relative z-10 ">                {/* dot animated ping  */}
                <div className="relative flex items-center ml-2">
                  <span className="absolute inline-flex h-4 w-4 rounded-full bg-amber-400 opacity-75 animate-ping"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-700"></span>
                </div>

                <div>
                  <h1 className="text-xl font-semibold">End-to-end encryption</h1>
                  <p className="mt-3 text-gray-700 text-md">
                    By encryption, protecting your data from unauthorized access.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* sec 3 */}
        <div className="flex flex-col pl-14 ">
          {/* up-3 */}

          <div className=" pt-18">
            <div className="relative pr-6 border-r-.5 border-solid ">
              {/* Gradient overlay for the right border */}

              {/* Red dot centered above the text */}
              <div className="flex flex-col items-start space-y-8">
                {/* dot animated ping  */}
                <div className="relative flex items-center ml-2">
                  <span className="absolute inline-flex h-4 w-4 rounded-full bg-teal-400 opacity-75 animate-ping"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-700"></span>
                </div>

                <div>
                  <h1 className="text-xl font-semibold">Transaction notifications</h1>
                  <p className="mt-3 text-gray-700 text-md">
                    Instant notifications for transaction keep you informed to manage your finances.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Down-3 */}


          <div className=" pt-18">
            <div className="relative pr-6 border-r-.5 border-solid ">
              {/* Gradient overlay for the right border */}


              {/* Red dot centered above the text */}
              <div className="flex flex-col items-start space-y-8">
                {/* dot animated ping  */}
                <div className="relative flex items-center ml-2">
                  <span className="absolute inline-flex h-4 w-4 rounded-full bg-purple-400 opacity-75 animate-ping"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-700"></span>
                </div>

                <div>
                  <h1 className="text-xl font-semibold">24/7 Protection support</h1>
                  <p className="mt-3 text-gray-700 text-md">
                    Our dedicated team is available around the clock to help you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Security;
