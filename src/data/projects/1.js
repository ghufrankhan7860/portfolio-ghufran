import portfolio from "../../images/projects/portfolio.png";

import html_logo from "../../images/skills/html.png";
import css_logo from "../../images/skills/css.png";
import js_logo from "../../images/skills/js.png";
import tailwind_logo from "../../images/skills/tailwind.png";
import react_logo from "../../images/skills/react.png";
import express_logo from "../../images/skills/expressJs.png";
import mongo_logo from "../../images/skills/mongoDB.png";
import node_js_logo from "../../images/skills/node_js.png";
import next_js_logo from "../../images/skills/nextjs.png";
import c_plus_logo from "../../images/skills/c++.png";
import python_logo from "../../images/skills/python.png";
import graphql_logo from "../../images/skills/graphql_png.png";
import firebase_logo from "../../images/skills/firebase.png";

const skills = {
    html: { name: "HTML", img: html_logo, star: 4 },
    css: { name: "CSS", img: css_logo, star: 4 },
    javascript: { name: "JAVASCRIPT", img: js_logo, star: 3 },
    react: { name: "REACT", img: react_logo, star: 4 },
    nextJs: { name: "NextJS", img: next_js_logo, star: 3 },
    expressJs: { name: "ExpressJS", img: express_logo, star: 4 },
    mongoDB: { name: "MongoDB", img: mongo_logo, star: 4 },
    c_plus_plus: { name: "C++", img: c_plus_logo, star: 4 },
    python: { name: "PYTHON", img: python_logo, star: 4 },
    graphQL: { name: "GRAPHQL", img: graphql_logo, star: 3 },
    tailwind: { name: "TAILWIND CSS", img: tailwind_logo, star: 4 },
    firebase: { name: "FIREBASE", img: firebase_logo, star: 2 },
    nodeJS: { name: "NODE JS", img: node_js_logo, star: 3 },
};

const data = [
    {
        name: "Ghufran Mahmood | Portfolio",
        img: portfolio,
        link: "/",
        time: "Sep 2023",
        id: 4,
        category: "Frontend",
        mainimg: "",
        img1: "",
        img2: "",
        img3: "",
        img4: "",

        rightbox: {
            technology: [
                skills.react,
                skills.html,
                skills.javascript,
                skills.tailwind,
            ],
            projectInfo: "",
        },
    },
];

export default data;
