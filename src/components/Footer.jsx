import React from "react";
import { AiFillSetting } from "react-icons/ai";
import useIP from "../hooks/useIP";

const Footer = () => {
    const IP = useIP() || "127.0.0.1";

    return (
        <>
            <div className="px-3 md:px-44 bg-neutral-950 py-3 border-white border-opacity-10 border-b-2">
                <div className="flex gap-3 text-sm">
                    <div className="border-r-2 pr-3 border-white border-opacity-10 opacity-60">
                        India
                    </div>
                    <div className="opacity-80">
                        {" "}
                        New Delhi, Delhi{" "}
                        <span className="text-cyan-400">
                            . From Your IP address{" "}
                            <span className="font-bold text-white">{IP}</span>.
                            Update Location
                        </span>
                    </div>
                </div>
            </div>
            <div className=" px-3 md:px-44 text-sm opacity-80 flex bg-neutral-950 py-3 ">
                More Options in{" "}
                <span className="flex items-center pl-1 text-cyan-400">
                    Quick Settings [<AiFillSetting className="flex" />]
                </span>
            </div>
        </>
    );
};

export default Footer;
