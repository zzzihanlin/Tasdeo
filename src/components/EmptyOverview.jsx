import React from "react";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
import { ReactComponent as Nodata } from "../images/nodata.svg";

export default function EmptyOverview() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center space-y-8">
      <Nodata className="w-1/2 h-auto lg:w-1/4" />
      <p className="lg:text-xl">Add a new class and start your journey!</p>
      <button className="bg-[#d7bb5b] hover:bg-green-500 active:bg-green-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 px-4 py-2 rounded-full flex justify-center items-center w-1/2 lg:w-1/6">
        <BiPlus className="mr-1" />
        <Link to="/setup">ADD CLASS NOW</Link>
      </button>
    </div>
  );
}
