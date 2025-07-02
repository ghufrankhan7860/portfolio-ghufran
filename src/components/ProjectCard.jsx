import React from "react";
import { Link } from "react-router-dom";
import icon1 from "../images/profiles/github.png";

const ProjectCard = ({ project }) => {
    return (
        <Link
            to={project.link}
            target="_blank"
            rel="noreferrer"
            className="min-w-fit cursor-pointer "
        >
            <div className="w-80 h-60 hover:shadow-[#454545] hover:shadow-md transition-all duration-300 bg-neutral-800 mx-1 rounded-xl">
                <div className="h-44 w-full">
                    <img
                        src={project.img === "" ? icon1 : project.img}
                        className=" rounded-xl w-full h-full object-contain"
                        alt="icon"
                    />
                </div>
                <div className="h-16 pl-3">
                    <div className="h-7 text-ellipsis overflow-clip opacity-80">
                        {project.name}
                    </div>
                    <div className="opacity-50">{project.time}</div>
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;
