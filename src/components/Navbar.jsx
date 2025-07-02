import React from "react";
import {
  AiOutlineSearch,
  AiFillCaretDown,
  AiFillSetting
} from "react-icons/ai";
import { CgMenuGridR } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";
import mic from "../images/mic.png";
import lens from "../images/lens.png";

const Navbar = ({box_name}) => {
  return (
    <>
      <div className="flex justify-between flex-col md:flex-row p-4">
        <div className="flex w-full md:w-1/2 items-center gap-3 justify-between flex-col md:flex-row">
          <div className="pl-1 md:pl-10 text-4xl md:text-3xl">
            <span className="hidden md:block">Google</span>
            <span className="flex md:hidden">
              <span className="text-customBlue">G</span>
              <span className="text-customRed">o</span>
              <span className="text-customYellow">o</span>
              <span className="text-customBlue">g</span>
              <span className="text-customGreen">l</span>
              <span className="text-customRed">e</span>
            </span>
          </div>
          <div className="flex items-center justify-between p-1 px-2 rounded-3xl bg-neutral-700 md:bg-neutral-800 w-full">
            <div className="flex w-full items-center md:justify-between border-r-2 border-neutral-600 px-3 py-1 md:py-0">
              <div className="flex pr-2 md:hidden text-lg text-blue-300 cursor-pointer">
                <AiOutlineSearch className="flex "/>
              </div>
              <div className="text-sm md:text-base  flex  items-center">{box_name}</div>
              <div className="hidden md:flex">
                <RxCross1 />
              </div>
            </div>
            <div className="flex gap-2 pr-3 items-center pl-3">
              <div className="text-blue-700 cursor-pointer">
                <img src={mic} alt="mic" className="w-10 object-contain h-6" />
              </div>
              <div className="text-purple-600 cursor-pointer">
                <img src={lens} alt="mic" className="w-10 object-contain h-8" />
              </div>
              <div className="hidden md:flex text-blue-300 cursor-pointer">
                <AiOutlineSearch />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex  items-center gap-4">
          {/* right bar */}
          <div className="flex text-2xl">
            <AiFillSetting className="flex" />
          </div>
          <div className="flex text-2xl">
            <CgMenuGridR className="flex" s />
          </div>
          <div className="px-3 py-1 rounded-md text-neutral-900 bg-blue-300">
            Sign In
          </div>
        </div>
      </div>
      <div className="flex border-b-2 pb-3 border-opacity-10 border-neutral-100">
        <div className="flex w-3/5 gap-3 justify-start pl-3 md:pl-40">
          <div className="w-fit rounded-2xl border-2 border-cyan-950 px-3 py-1 cursor-pointer">
            Images
          </div>
          <div className="w-fit rounded-2xl border-2 border-cyan-950 px-3 py-1 cursor-pointer">
            News
          </div>
          <div className="w-fit rounded-2xl border-2 border-cyan-950 px-3 py-1 cursor-pointer">
            Videos
          </div>
          <div className="w-fit rounded-2xl border-2 border-cyan-950 px-3 py-1 cursor-pointer">
            Videos
          </div>
        </div>
        <div className="hidden md:flex w-1/5 opacity-60 text-sm items-center">
          <div className="border-r-2 border-cyan-800 pr-3 flex w-full justify-end items-center">
            <div className="">All Filters</div>
            <div className="pl-1">
              <AiFillCaretDown className="flex" />
            </div>
          </div>
          <div className="pl-3">Tools</div>
        </div>
        <div className="hidden md:flex w-1/5 justify-end opacity-60 pr-3 text-sm items-center">
          <div className="">SafeSearch</div>
          <div className="pl-1">
            <AiFillCaretDown className="flex" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
