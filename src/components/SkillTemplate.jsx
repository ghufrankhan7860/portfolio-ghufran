import React from "react";
import StarsTemplate from "./StarsTemplate";

const SkillTemplate = ({ skill }) => {
    return (
        <div className="flex cursor-pointer items-center  flex-col w-full">
            <div className="bg-neutral-50 bg-opacity-90 p-1 rounded-full">
                {/* icon img */}
                <img
                    src={skill.img}
                    alt="skill-icon"
                    className="w-20 h-20 object-contain rounded-full border-2 border-spacing-2 border-white border-opacity-20 "
                />
            </div>
            <div className="text-lg opacity-80 text-center h-7 overflow-clip">
                {skill.name}
            </div>
            <div className="">
                <StarsTemplate star={skill.star} />
            </div>
        </div>
    );
};

export default SkillTemplate;
