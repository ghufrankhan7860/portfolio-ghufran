import React from "react";
import { BiRightArrow } from "react-icons/bi";
import SkillTemplate from "../SkillTemplate";
// import SocialMediaTemplate from "./SocialMediaTemplate";
import SocialMediaTemplate from "../SocialMediaTemplate";
// import skills from "../../data/skills";
import profiles from "../../data/profiles";

const RightBox = ({ data }) => {
//   console.log(data);
  return (
    <>
      {data && (
        <div className="ml-3 w-full border-l-0 md:border-l-2 md:border-opacity-20 md:border-white md:px-3">
          <div className="">
            <div className="flex justify-between items-center">
              <div className="text-xl font-semibold opacity-80">Technology</div>
              <div className="border-2 flex rounded-full mr-5 md:mr-0 p-2 border-opacity-10 border-white">
                <BiRightArrow className="flex" />
              </div>
            </div>

            <div className="grid grid-cols-4 gap-3 p-3 border-b-2 border-white border-opacity-10">
              {data &&
                data.technology &&
                data.technology.map((skill, index) => {
                  return <SkillTemplate key={index} skill={skill} />;
                })}
            </div>

            <div className="pt-3">
              <div className="text-2xl opacity-70">About</div>
              <div className="text-sm opacity-60">
                {data.projectInfo}
              </div>
              {/* <div className="pt-2 text-sm pb-3 border-b-2 border-opacity-10 border-white">
                <div className="">
                  Highest Education :{" "}
                  <span className="text-cyan-400">B.TECH.</span>
                </div>
                <div className="">
                  Age : <span className="text-cyan-400">20</span>
                </div>
              </div> */}
            </div>

            <div className="pt-3">
              <div className="text-2xl opacity-70">Profiles</div>
              <div className="grid grid-cols-5 gap-3 p-3 border-b-2 border-white border-opacity-10 pb-5">
                {profiles.map((profile, index) => {
                  return <SocialMediaTemplate key={index} profile={profile} />;
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RightBox;
