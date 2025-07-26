import instaxore1 from "../../images/projects/instaxore/instaxore1.png";
import instaxore2 from "../../images/projects/instaxore/instaxore2.png";
import instaxore3 from "../../images/projects/instaxore/instaxore3.png";
import instaxore4 from "../../images/projects/instaxore/instaxore4.png";
import instaxore5 from "../../images/projects/instaxore/instaxore5.png";
import instaxore6 from "../../images/projects/instaxore/instaxore6.png";

import webtext from "../../images/projects/webtext.png";
import webtext1 from "../../images/projects/webtext/webtext1.png";
import webtext2 from "../../images/projects/webtext/webtext2.png";
import webtext3 from "../../images/projects/webtext/webtext3.png";
import webtext4 from "../../images/projects/webtext/webtext4.png";

import webNote1 from "../../images/projects/webnote/webnote1.png";
import webNote2 from "../../images/projects/webnote/webnote2.png";
import webNote3 from "../../images/projects/webnote/webnote3.png";
import webNote4 from "../../images/projects/webnote/webnote4.png";

import portfolio from "../../images/projects/portfolio.png";

import amazon from "../../images/projects/amazon.png";
import amazon1 from "../../images/projects/amazon/amazon1.png";
import amazon2 from "../../images/projects/amazon/amazon2.png";
import amazon3 from "../../images/projects/amazon/amazon3.png";
import amazon4 from "../../images/projects/amazon/amazon4.png";

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
        name: "WebText",
        img: webtext,
        link: "https://textutil-a1222.web.app/",
        time: "July 2023",
        id: 1,
        category: "FrontEnd",
        mainimg: "",
        img1: webtext1,
        img2: webtext2,
        img3: webtext3,
        img4: webtext4,

        rightbox: {
            technology: [skills.html, skills.css, skills.javascript],
            projectInfo: "",
        },
    },
    {
        name: "WebNote",
        img: webNote1,
        link: "https://webnote-4609d.web.app/",
        time: "July 2023",
        id: 2,
        category: "FrontEnd",
        mainimg: "",
        img1: webNote1,
        img2: webNote3,
        img3: webNote4,
        img4: webNote2,

        rightbox: {
            technology: [
                skills.html,
                skills.css,
                skills.javascript,
                skills.firebase,
                skills.react,
            ],
            projectInfo: "",
        },
    },
    {
        name: "InstaXore | Social App",
        img: instaxore6,
        link: "https://github.com/sonu-kumar-zero/insta",
        time: "Sep 2023",
        id: 3,
        category: "FullStack",
        mainimg: "",
        img1: instaxore1,
        img2: instaxore2,
        img3: instaxore3,
        img4: instaxore4,
        img5: instaxore5,
        img6: instaxore6,

        rightbox: {
            technology: [
                skills.html,
                skills.expressJs,
                skills.mongoDB,
                skills.nodeJS,
                skills.react,
                skills.tailwind,
                skills.javascript,
            ],
            projectInfo: "",
        },
    },
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
    {
        name: "storeXORE | Ecommerce",
        img: amazon,
        link: "https://store-zero-ecommerce.vercel.app/",
        // start data : 29th sep 2023
        time: "29th Sep 2023",
        id: 5,
        category: "Frontend",
        mainimg: "",
        img1: amazon1,
        img2: amazon2,
        img3: amazon3,
        img4: amazon4,

        rightbox: {
            technology: [skills.html, skills.tailwind],
            projectInfo: "",
        },
    },
];

export default data;
