import React from "react";

const WebTemplate = ({ web }) => {
    return (
        <div className="w-full flex gap-5 py-3">
            <div className="w-4/5">
                <a
                    href={web.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center cursor-pointer hover:text-cyan-400"
                >
                    <div className="">
                        <img
                            className="w-8 h-8 object-cover rounded-full"
                            alt="icon"
                            src={web.img}
                        />
                    </div>
                    <div className="pl-3">
                        <div className="text-sm font-semibold opacity-90">
                            {web.name}
                        </div>
                        <div className="text-xs opacity-60">{web.link}</div>
                    </div>
                </a>

                <div className="text-xl pt-2 text-blue-400">Ghufran</div>

                <div className="opacity-80 text-sm text-justify max-h-[30dvh] line-clamp-5">
                    {web.desc === ""
                        ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est facere eveniet odio, laboriosam voluptate aliquid laborum ipsum natus id quia voluptatibus. Numquam amet similique voluptatibus quos laborum quocorrupti culpa?"
                        : web.desc}
                </div>
            </div>
            <div className="w-1/5 h-fit flex justify-center items-center bg-white rounded-full p-5 cursor-pointer hover:bg-[#efefef] hover:scale-105 transition-all duration-300">
                <a href={web.link} target="_blank" rel="noreferrer">
                    <img
                        src={web.img}
                        className="w-full object-contain rounded-xl "
                        alt="icon"
                    />
                </a>
            </div>
        </div>
    );
};

export default WebTemplate;
