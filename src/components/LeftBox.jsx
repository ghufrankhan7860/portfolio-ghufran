import React from "react";
import { BiRightArrow } from "react-icons/bi";
import ProjectCard from "./ProjectCard";
import WebTemplate from "./WebTemplate";
import FooterSearchTemp from "./FooterSearchTemp";
import projects from "../data/projects";
import footsearch from "../data/footseraches";
import websearch from "../data/websearch";

const LeftBox = () => {
    return (
        <div className="w-full">
            <div className="w-full">
                <div className="w-full flex items-center">
                    <div className="text-2xl">Projects</div>
                    <div className="pl-1 flex ">
                        <BiRightArrow className="flex opacity-50" />
                    </div>
                </div>

                <div className="flex projectBOX gap-3 pt-2 mb-8 overflow-x-scroll py-3 pl-3">
                    {projects.map((project, index) => {
                        return <ProjectCard key={index} project={project} />;
                    })}
                </div>
                {websearch.map((web, index) => {
                    return <WebTemplate key={index} web={web} />;
                })}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 py-3">
                    {footsearch.map((foot, index) => {
                        return <FooterSearchTemp key={index} foot={foot} />;
                    })}
                </div>

                <div className="flex justify-center text-3xl">
                    <div className="">G</div>
                    <div className="">
                        <div className="">o</div>
                        <div className="text-xs text-cyan-400 ml-1">1</div>
                    </div>
                    <div className="">
                        <div className="">o</div>
                        <div className="text-xs text-cyan-400 ml-1">2</div>
                    </div>
                    <div className="">
                        <div className="">o</div>
                        <div className="text-xs text-cyan-400 ml-1">3</div>
                    </div>
                    <div className="">
                        <div className="">o</div>
                        <div className="text-xs text-cyan-400 ml-1">4</div>
                    </div>
                    <div className="">g</div>
                    <div className="">l</div>
                    <div className="">e</div>
                </div>

                <div className="flex justify-around py-5">
                    <div className="text-cyan-400 text-sm ">Google Home</div>
                    <div className="text-cyan-400 hidden md:block text-sm ">
                        Advertising Buisness Solution
                    </div>
                    <div className="text-cyan-400 text-sm "></div>
                    <div className="text-cyan-400 text-sm ">
                        Privacy And Terms
                    </div>
                    <div className="text-cyan-400 text-sm">About Google</div>
                </div>
            </div>
        </div>
    );
};

export default LeftBox;
