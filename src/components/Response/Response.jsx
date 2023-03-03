import React, { useState } from "react";
import ConnectWallect from "../ConnectWallect";
import HeaderContent from "../HeaderContent";
import Register from "./Details";
import Details from "./Register";
import Subdomain from "./Subdomain";
import styles from "../../globalStyle";

const Response = () => {
  const [activeTab, setActiveTab] = useState("register");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={`${styles.layout}`}>
      <div className=" mb-4">
        <HeaderContent />
      </div>
      <nav className=" h-fit rounded-md">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-end h-16">
            <div className="flex items-center justify-end space-x-4">
              <div
                onClick={() => handleTabClick("register")}
                className={`text-white font-bold text-sm hover:text-gray-300
                 hover:border-white border-2 p-1 rounded-md border-gray-200 bg-blue-500  ${
                   activeTab === "register" ? "text-gray-300" : ""
                 } cursor-pointer`}
              >
                Register
              </div>
              <div
                onClick={() => handleTabClick("details")}
                className={`text-white font-bold text-sm bg-slate-800 hover:text-gray-300
                 hover:border-white border-2 
                p-1 rounded-md border-gray-200  ${
                  activeTab === "details" ? "text-gray-300" : ""
                } cursor-pointer`}
              >
                Details
              </div>
              <div
                onClick={() => handleTabClick("subdomain")}
                className={`text-white font-bold text-sm bg-red-500 hover:text-gray-300 hover:border-white
                 border-2 p-1 rounded-md border-gray-200  ${
                   activeTab === "subdomain" ? "text-gray-300" : ""
                 } cursor-pointer`}
              >
                Subdomain
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-stretch py-4">
            <div
              className="bg-white shadow-lg rounded-lg p-4 overflow-hidden animate-fade-in-up
         w-full lg:w-3/4 lg:mr-4 mb-4 lg:mb-0 flex-shrink-0"
            >
              {activeTab === "register" && <Register />}
              {activeTab === "details" && <Details />}
              {activeTab === "subdomain" && <Subdomain />}
            </div>

            <div
              className=" shadow-lg rounded-lg overflow-hidden animate-fade-in-up
            w-full lg:w-1/4 flex-shrink-0 h-fit "
            >
              <ConnectWallect />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Response;
