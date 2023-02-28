import { useState } from "react";

import NftSection from "./NftSection";
import Countdown from "react-countdown";

const Body = () => {
  const [targetDate] = useState(new Date("2023-03-15T00:00:00").getTime());

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-black shadow-lg rounded-lg overflow-hidden animate-fade-in-up">
          <div className="flex flex-col lg:flex-row justify-between items-center bg-white shadow-lg rounded-lg overflow-hidden animate-fade-in-up">
            <div className="sm:flex items-center px-6 py-4">
              <img
                className="h-24 w-24 rounded-full mx-auto sm:mx-0 sm:flex-shrink-0 animate-fade-in-left"
                src="https://avatars.githubusercontent.com/u/2810941?s=200&v=4"
                alt="Avatar"
              />
              <div className="text-center sm:text-left sm:ml-4 sm:my-4 animate-fade-in-right">
                <h1 className="text-lg font-medium text-gray-900">Core ID</h1>
                <p className="text-sm font-semibold text-gray-600">
                  Collectible digital cats
                </p>
                <div className="mt-4 flex items-center justify-center animate-fade-in-up">
                  <input
                    className="w-[80%] p-2 border border-gray-300 rounded-l-lg shadow-md focus:outline-none"
                    type="text"
                    placeholder="Search..."
                  />
                  <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-r-lg shadow-md ml-2 animate-pulse">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 15l5.792 5.792M10 18a8 8 0 100-16 8 8 0 000 16z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h2 className=" mx-auto lg:text-lg font-bold mb-2">
                Auction Ends In:
              </h2>
              <Countdown
                date={targetDate}
                daysInHours
                renderer={({ days, hours, minutes, seconds }) => (
                  <div className="flex justify-center items-center">
                    <div className="text-3xl font-semibold text-purple-500 mr-2">
                      {days}
                    </div>
                    <div className="text-gray-600 mr-2">days</div>
                    <div className="text-3xl font-semibold text-purple-500 mr-2">
                      {hours}
                    </div>
                    <div className="text-gray-600 mr-2">hours</div>
                    <div className="text-3xl font-semibold text-purple-500 mr-2">
                      {minutes}
                    </div>
                    <div className="text-gray-600 mr-2">min</div>
                    <div className="text-3xl font-semibold text-purple-500">
                      {seconds}
                    </div>
                    <div className="text-gray-600">sec</div>
                  </div>
                )}
              />
            </div>
          </div>
        </div>
        <NftSection />
      </div>
    </div>
  );
};

export default Body;
