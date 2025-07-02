import React from "react";
import Navbar from "../components/Navbar";
import PictureBox from "../components/PictureBox";
import LeftBox from "../components/LeftBox";
import RightBox from "../components/RightBox";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <Navbar box_name={"GHUFRAN MAHMOOD"} />
            <div className="md:px-20">
                <PictureBox
                    category={"Programmer and Web Developer"}
                    name={"Ghufran Mahmood"}
                />
                <div className="md:hidden pt-3">
                    <RightBox />
                </div>
                <div className="px-3 md:px-24 flex flex-col md:flex-row pt-5">
                    <div className="md:w-3/5">
                        <LeftBox />
                    </div>
                    <div className="hidden md:block md:w-2/5">
                        <RightBox />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;
