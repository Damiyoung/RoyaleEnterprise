import React from "react";
import { data } from "./NftCards";

const NftSection = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-center items-stretch py-4">
        {/* First section */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden animate-fade-in-up w-full lg:w-3/4 lg:mr-4 mb-4 lg:mb-0 flex-shrink-0">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div
                  className="h-40 relative bg-gradient-to-br from-purple-500 to-pink-500 bg-cover text-transparent"
                  style={{ backgroundClip: "text" }}
                >
                  <span className="absolute top-0 right-0 mt-4 mr-4 text-white text-md font-bold">
                    {card.coreid}
                  </span>
                  <span className="absolute bottom-0 left-0 mb-4 ml-6 text-white font-bold">
                    COREID
                  </span>
                </div>
                <div className="p-6 flex flex-col">
                  <h2 className="font-bold text-2xl mb-4">NFT Title</h2>
                  <p className="text-gray-600 mb-4">{card.address}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second section */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden animate-fade-in-up w-full lg:w-1/4 flex-shrink-0">
          <div className="sm:flex sm:items-center justify-center items-center px-6 py-4">
            <div className="w-full">
              <h1 className="text-2xl font-bold mb-2">Connect Wallet</h1>
              <p className="text-sm font-semibold text-gray-600 mb-4">
                Connect your wallet to purchase NFTs
              </p>
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full animate-pulse mb-4">
                Connect Wallet
              </button>
              <details>
                <summary className="text-sm font-semibold text-gray-600 mb-2">
                  Primary Name: not set
                </summary>
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Search for Core or Domin"
                    className="w-full py-2 px-4 border-gray-400 rounded-md mb-2"
                  />
                  <div className="flex justify-end">
                    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full mr-2">
                      Search
                    </button>
                    <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full mr-2">
                      Delete
                    </button>
                    <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full mr-2">
                      Cancel
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
                      Save
                    </button>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftSection;
