import React from "react";
// import icon from "../images/PROFILEIMG.jpeg";
// import icon2 from "../images/projects/portfolio.png";
// import icon3 from "../images/projects/amazon.png";

const PictureBox = ({name,category,mainimg,img1,img2,img3,img4}) => {
  return (
    <>
      <div className=" px-3 md:px-24 bg-gradient-to-b from-neutral-900 via-neutral-900 to-blue-950 pb-5">
        <div className="pt-2 opacity-50 text-sm">
          About 12,70,00,000 results (0.73 seconds)
        </div>
        <div className="flex flex-col md:flex-row pt-3 md:items-center">
          <div className="flex md:items-start flex-col md:w-4/12">
            <div className="text-3xl opacity-80">{name}</div>
            <div className="opacity-50 text-sm md:pl-0">
              {category}
            </div>
          </div>
          <div className="flex md:w-8/12 md:justify-end">
            <div className="flex gap-3 w-full pt-1 md:pt-0 md:justify-end">
              <div className="w-fit bg-blue-800 bg-opacity-50 border-2 opacity-70 px-3 py-1 rounded-3xl  cursor-pointer text-lg">
                Overview
              </div>
              <div className="w-fit bg-blue-800 bg-opacity-50 border-2 border-transparent opacity-70 px-3 py-1 rounded-3xl cursor-pointer text-lg hover:border-white">
                Hobbies
              </div>
              <div className="w-fit bg-blue-800 bg-opacity-50 border-2 border-transparent opacity-70 px-3 py-1 rounded-3xl cursor-pointer text-lg hover:border-white">
                Project
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full md:flex-row flex-col md:h-80 mt-3 gap-3">
          <div className="flex md:w-1/2 gap-1">
            <div className="w-7/12">
              <img
                src={mainimg}
                alt="icon"
                className="h-full rounded-l-3xl object-cover w-full"
              />
            </div>
            <div className="w-5/12 flex flex-col">
              <div className="h-1/2">
                <img
                  src={img1}
                  alt="icon"
                  className="h-full pb-1 rounded-tr-3xl object-cover w-full"
                />
              </div>
              <div className="h-1/2">
                <img
                  src={img2}
                  alt="icon"
                  className="h-full rounded-br-3xl object-cover w-full"
                />
              </div>
            </div>
          </div>
          <div className="flex md:w-1/2 gap-3">
            <div className="w-1/2 hidden md:block bg-blue-900 bg-opacity-30 rounded-3xl">
              <div className="h-3/5">
                {/* project that has been completed recently */}
                <img
                  src={img3}
                  className="rounded-t-3xl w-full h-full object-cover"
                  alt="icon"
                  loading="lazy"
                />
              </div>
              <div className="h-2/5 p-3 overflow-clip">
                {/*  */}
                Recently , I have completed my Portfolio and it is working
                good...
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="h-1/2 gap-3 flex pb-3">
                <div className="w-1/2 bg-blue-900 bg-opacity-30 p-3 rounded-3xl flex flex-col justify-between py-5">
                  <div className="overflow-clip">Current Working Tech</div>
                  <div className="text-xl text-teal-500">Next JS</div>
                </div>
                <div className="w-1/2 bg-blue-900 bg-opacity-30 rounded-3xl p-3 py-5 flex flex-col justify-between">
                  <div className="">Current Project</div>
                  <div className="text-xl overflow-clip text-teal-500">
                    storeXORE | Ecommerce
                  </div>
                </div>
              </div>
              <div className="h-1/2">
                <div className="h-full w-full">
                  <img
                    src={img4}
                    alt="icon"
                    className="h-full object-cover w-full rounded-xl border border-opacity-50 border-white md:border-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PictureBox;
