import React from "react";

const SocialMediaTemplate = ({ profile }) => {
    return (
        <a
            target="_blank"
            rel="noreferrer"
            href={profile.link}
            className="flex flex-col items-center cursor-pointer"
        >
            <div className="flex justify-center bg-neutral-50 rounded-full bg-opacity-80">
                <img
                    alt="icon"
                    className="border-2 p-1 border-white border-opacity-10 w-12 h-12 rounded-full "
                    about="social-icon"
                    src={profile.img}
                />
            </div>
            <div className="text-xs opacity-50">{profile.name}</div>
        </a>
    );
};

export default SocialMediaTemplate;
