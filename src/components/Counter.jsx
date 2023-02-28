import React from "react";
import Countdown from "react-countdown";
import { FaSearch } from "react-icons/fa";

const Counter = () => {
  // Set the launch date as a Date object
  const launchDate = new Date("2023-03-31T00:00:00");

  // Renderer function for the countdown
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>Launched!</span>;
    } else {
      return (
        <div className="flex items-center">
          <span className="text-xl font-bold">{days}</span>
          <span className="ml-1">days</span>
          <span className="text-xl font-bold ml-4">{hours}</span>
          <span className="ml-1">hours</span>
          <span className="text-xl font-bold ml-4">{minutes}</span>
          <span className="ml-1">minutes</span>
          <span className="text-xl font-bold ml-4">{seconds}</span>
          <span className="ml-1">seconds</span>
        </div>
      );
    }
  };

  return (
    <div className="flex items-center border rounded-full shadow-lg overflow-hidden mx-4">
      <input
        type="text"
        placeholder="Search"
        className="px-4 py-2 w-80 focus:outline-none focus:shadow-outline"
      />
      <button className="bg-gray-200 text-gray-700 hover:bg-gray-300 px-4 py-2">
        <FaSearch />
      </button>
      <div className="flex items-center ml-4">
        <span className="mr-2">Launches in:</span>
        <Countdown date={launchDate} renderer={renderer} />
      </div>
    </div>
  );
};

export default Counter;
