import React, { useState } from "react";
import Favourites from "./Favourites";
import MyDomain from "./MyDomain";

const ConnectWallet = () => {
  const [activeTab, setActiveTab] = useState("register");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="p-4  bg-black">
      <h1 className="gradient1 text-2xl text-center font-bold mb-2 text-white">
        Connect Wallet
      </h1>
      <p className="text-sm font-semibold text-gray-600 mb-4 text-center">
        Connect your wallet to purchase NFTs
      </p>
      {/* <button className=" bg-[#FFD700] bg-center hover:bg-indigo-600
       text-white font-bold p-3 rounded-br-xl rounded-tl-xl animate-pulse mb-4"> */}
      <p
        className=" text-center text-black bg-[#FFD700] rounded-br-xl rounded-tl-xl mb-4 
      animate-pulse font-extrabold p-3 "
      >
        {" "}
        Connect Wallet
      </p>
      {/* </button> */}
      <details>
        <summary className="text-sm font-semibold text-gray-600 mb-2">
          Primary Name: not set
        </summary>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Search for Core or Domin"
            className="w-full py-2 px-4 border-gray-400 rounded-md mb-2 border"
          />
          <div className="flex justify-center items-center mt-3">
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-2 rounded-tr-lg mr-2">
              Delete
            </button>
            <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-2 rounded-bl-md mr-2">
              Cancel
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-2 rounded-tr-lg">
              Save
            </button>
          </div>
        </div>
      </details>
      <div className=" border-t-2 p-2 m-3 mt-5">
        <div className="flex items-center justify-end space-x-2 mt-4">
          <div
            onClick={() => handleTabClick("register")}
            className={`text-white font-bold text-sm hover:text-gray-300 hover:border-white border-2 p-1 rounded-md border-gray-200 ${
              activeTab === "register" ? "text-gray-300" : ""
            } cursor-pointer`}
          >
            My Domain
          </div>
          <div
            onClick={() => handleTabClick("details")}
            className={`text-white font-bold text-sm hover:border-white hover:text-gray-300 border-2 p-1 rounded-md border-gray-200 ${
              activeTab === "details" ? "text-gray-300" : ""
            } cursor-pointer`}
          >
            Favourite
          </div>
        </div>
        <div className="sm:flex sm:items-center justify-center items-center py-4">
          <div
            className="bg-white shadow-lg rounded-lg p-4 overflow-hidden animate-fade-in-up
         w-full lg:w-3/4 lg:mr-4 mb-4 lg:mb-0 flex-shrink-0"
          >
            {activeTab === "register" && <MyDomain />}
            {activeTab === "details" && <Favourites />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
