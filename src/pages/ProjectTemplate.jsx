import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import data from "../data/projects/1";
import Footer from "../components/Footer";
import LeftBox from "../components/LeftBox";
import PictureBox from "./../components/projectTemplate/PictureBox";
import RightBox from "../components/projectTemplate/RightBox";
const ProjectTemplate = () => {
    const { project_id } = useParams();
    const superdata = data[project_id - 1];
    // console.log(superdata);

    return (
        <>
            {superdata && (
                <>
                    <Navbar box_name={superdata.name} />
                    <div className="md:px-20">
                        <PictureBox
                            category={superdata.category}
                            name={superdata.name}
                            img1={superdata.img1}
                            img2={superdata.img2}
                            img3={superdata.img3}
                            mainimg={superdata.img}
                            img4={superdata.img4}
                        />
                        <div className="md:hidden pt-3">
                            <RightBox data={superdata.rightbox} />
                        </div>
                        <div className="px-3 md:px-24 flex flex-col md:flex-row pt-5">
                            <div className="md:w-3/5">
                                <LeftBox />
                            </div>
                            <div className="hidden md:block md:w-2/5">
                                <RightBox data={superdata.rightbox} />
                            </div>
                        </div>
                    </div>
                    <Footer />
                </>
            )}
        </>
    );
};

export default ProjectTemplate;
