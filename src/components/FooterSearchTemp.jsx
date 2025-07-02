import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const FooterSearchTemp = ({ foot }) => {
    return (
        <div className="flex items-center bg-neutral-800 px-3 py-2 rounded-full">
            <div className="">
                <AiOutlineSearch className="flex text-xl" />
            </div>
            <div className="pl-5">
                <span className="opacity-50 text-sm md:text-base">ghufran</span>
                <span className="pl-1 opacity-80 text-sm font-semibold  md:text-base ">
                    {foot.ques}
                </span>
            </div>
        </div>
    );
};

export default FooterSearchTemp;
