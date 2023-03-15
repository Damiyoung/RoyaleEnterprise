import React, { useState } from "react";
import Favourites from "./OldStuck";
import MyDomain from "./NewArrival";

const ConnectWallet = () => {
  const [activeTab, setActiveTab] = useState("register");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="p-4  bg-blue-200">
      <h1 className="gradient1 text-2xl text-center font-bold mb-2 text-white">
        Latest Arrivals
      </h1>
      <p className="text-sm font-semibold text-black font-mono mb-4 text-center">
        Check for the latest Arrival
      </p>
      {/* <button className=" bg-[#FFD700] bg-center hover:bg-indigo-600
       text-white font-bold p-3 rounded-br-xl rounded-tl-xl animate-pulse mb-4"> */}
      <p
        className=" text-center text-black bg-[#FFD700] rounded-br-xl rounded-tl-xl mb-4 
      animate-pulse font-extrabold p-3 "
      >
        {" "}
        Make Whatsapp order
      </p>
      {/* </button> */}

      <div className=" border-t-2 p-2 m-3 mt-5">
        <div className="flex items-center justify-end space-x-2 mt-4">
          <div
            onClick={() => handleTabClick("register")}
            className={`text-black font-bold text-sm  hover:border-white border-2 p-1 rounded-md border-gray-200 ${
              activeTab === "register" ? "text-black" : ""
            } cursor-pointer`}
          >
            New Arrivals
          </div>
          <div
            onClick={() => handleTabClick("details")}
            className={`text-black font-bold text-sm hover:border-white border-2 p-1 rounded-md border-gray-200 ${
              activeTab === "details" ? "text-black" : ""
            } cursor-pointer`}
          >
            Old stock
          </div>
        </div>
        <div className="sm:flex sm:items-center justify-center items-center py-4">
          <div
            className=" rounded-lg  h-fit overflow-hidden animate-fade-in-up
         w-full  "
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
