import React from "react";
import { Outlet, Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { AiFillEye } from 'react-icons/ai'

const Recipe = ({ title, cuisine, images, ingredients, meal }) => {
  const trimName = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    }
    return str;
  };
  return (
    <div className="bg-white relative p-2.5 rounded mb-10" key={title}>
      <img
        src={images}
        alt=""
        className="h-28 -mt-10 w-full object-cover rounded-lg"
      />
      <h2 className="font-semibold mt-3 lg:text-sm xl:text-lg">
        {trimName(title, 15)}
      </h2>
      <p className="font-semibold">
        Cuisene: <span className="text-gray-500 capitalize">{cuisine}</span>
      </p>
      <p className="font-semibold">
        Type: <span className="text-gray-500 capitalize">{meal}</span>
      </p>
      {/* <div className="flex flex-row justify-between mt-5">
        <div className="flex flex-row items-center gap-1 cursor-pointer">
          <FaRegComment /> 22
        </div>
        <div className="flex flex-row items-center gap-1 cursor-pointer">
          <CiHeart /> 12
        </div>
        <div className="flex flex-row items-center gap-1 cursor-pointer hover:text-orange-500 duration-300">
          <AiFillEye /> View
        </div>
      </div> */}
    </div>
  );
};

export default Recipe;
