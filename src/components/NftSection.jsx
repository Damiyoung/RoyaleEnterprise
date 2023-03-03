import React from "react";
import { data } from "./NftCards";
import { Link } from "react-router-dom";
import ConnectWallect from "./ConnectWallect";

const NftSection = (id) => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-center items-stretch py-4 ">
        {/* First section */}
        <div className="bg-white shadow-lg rounded-lg p-4 overflow-hidden animate-fade-in-up w-full lg:w-3/4 lg:mr-4 mb-4 lg:mb-0 flex-shrink-0">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((card) => (
              <Link to="/responses">
                <div
                  key={card.id}
                  className="bg-black rounded-lg shadow-lg overflow-hidden"
                >
                  <div
                    className="h-40 relative bg-[#FFD700] bg-cover text-transparent"
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
                    <h2 className="font-bold text-2xl mb-4 text-white">
                      NFT Title
                    </h2>
                    <p className="text-gray-600 mb-4">{card.address}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        {/* Second section */}
        <div
          className=" shadow-lg rounded-lg overflow-hidden animate-fade-in-up
         w-full lg:w-1/4 flex-shrink-0 h-fit  "
        >
          <ConnectWallect />
        </div>
      </div>
    </div>
  );
};

export default NftSection;
