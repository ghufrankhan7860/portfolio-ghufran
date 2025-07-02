import React from "react";
import { BiRightArrow } from "react-icons/bi";
import SkillTemplate from "./SkillTemplate";
import SocialMediaTemplate from "./SocialMediaTemplate";
import skills from "../data/skills";
import profiles from "../data/profiles";

const RightBox = () => {
  return (
    <div className="ml-3 w-full border-l-0 md:border-l-2 md:border-opacity-20 md:border-white md:px-3">
      <div className="">
        <div className="flex justify-between items-center">
          <div className="text-xl font-semibold opacity-80">Skills</div>
          <div className="border-2 flex rounded-full mr-5 md:mr-0 p-2 border-opacity-10 border-white">
            <BiRightArrow className="flex" />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-3 p-3 border-b-2 border-white border-opacity-10">
          {skills.map((skill, index) => {
            return <SkillTemplate key={index} skill={skill} />;
          })}
        </div>

        <div className="pt-3">
          <div className="text-2xl opacity-70">About</div>
          <div className="text-sm opacity-60 text-justify">
            Hii, My name is Sonu Kumar . I am a highly skilled and passionate
            fresher engineer with a strong foundation in software development,
            system architecture, and electronics. With expertise in backend
            technologies like Node.js, React.js, Vite, PostgreSQL, MongoDB, and
            Prisma ORM, I specialize in building scalable and efficient
            applications.
            <br /> Beyond software, I have a deep interest in electronics and
            computer architecture. I have worked on designing a 16-bit CPU based
            on the RISC-V architecture, focusing on instruction set
            implementation, memory-mapped I/O, and pipeline optimization. My
            skills extend to hardware programming, circuit design, and
            microcontroller-based systems, allowing me to integrate software and
            hardware seamlessly.
            <br /> I am driven by a passion for innovation and problem-solving,
            constantly seeking opportunities to apply my technical skills to
            real-world challenges. With a strong grasp of modern technologies
            and a keen eye for optimization, I am eager to contribute to
            cutting-edge projects and grow as a technology professional.
          </div>
          <div className="pt-2 text-sm pb-3 border-b-2 border-opacity-10 border-white">
            <div className="">
              Highest Education : <span className="text-cyan-400">B.TECH.</span>
            </div>
            <div className="">
              Age : <span className="text-cyan-400">22</span>
            </div>
          </div>
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
  );
};

export default RightBox;
