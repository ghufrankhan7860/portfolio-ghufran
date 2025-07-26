import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const StarsTemplate = ({ star }) => {
    return (
        <>
            {star === 0 ? (
                <>
                    <div className="flex">
                        <AiOutlineStar className="text-cyan-400" />
                        <AiOutlineStar className="text-cyan-400" />
                        <AiOutlineStar className="text-cyan-400" />
                        <AiOutlineStar className="text-cyan-400" />
                        <AiOutlineStar className="text-cyan-400" />
                    </div>
                </>
            ) : (
                ""
            )}
            {star === 1 ? (
                <>
                    <div className="flex">
                        <AiFillStar className="text-cyan-400" />
                        <AiOutlineStar className="text-cyan-400" />
                        <AiOutlineStar className="text-cyan-400" />
                        <AiOutlineStar className="text-cyan-400" />
                        <AiOutlineStar className="text-cyan-400" />
                    </div>
                </>
            ) : (
                ""
            )}
            {star === 2 ? (
                <>
                    <div className="flex">
                        <AiFillStar className="text-cyan-400" />
                        <AiFillStar className="text-cyan-400" />
                        <AiOutlineStar className="text-cyan-400" />
                        <AiOutlineStar className="text-cyan-400" />
                        <AiOutlineStar className="text-cyan-400" />
                    </div>
                </>
            ) : (
                ""
            )}

            {star === 3 ? (
                <>
                    <div className="flex">
                        <AiFillStar className="text-cyan-400" />
                        <AiFillStar className="text-cyan-400" />
                        <AiFillStar className="text-cyan-400" />
                        <AiOutlineStar className="text-cyan-400" />
                        <AiOutlineStar className="text-cyan-400" />
                    </div>
                </>
            ) : (
                ""
            )}
            {star === 4 ? (
                <>
                    <div className="flex">
                        <AiFillStar className="text-cyan-400" />
                        <AiFillStar className="text-cyan-400" />
                        <AiFillStar className="text-cyan-400" />
                        <AiFillStar className="text-cyan-400" />
                        <AiOutlineStar className="text-cyan-400" />
                    </div>
                </>
            ) : (
                ""
            )}
            {star === 5 ? (
                <>
                    <div className="flex">
                        <AiFillStar className="text-cyan-400" />
                        <AiFillStar className="text-cyan-400" />
                        <AiFillStar className="text-cyan-400" />
                        <AiFillStar className="text-cyan-400" />
                        <AiFillStar className="text-cyan-400" />
                    </div>
                </>
            ) : (
                ""
            )}
        </>
    );
};

export default StarsTemplate;
