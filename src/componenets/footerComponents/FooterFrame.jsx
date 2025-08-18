import React from "react";
import Right from "../../assets/bodySectionPNGs/Right.png";
import Down from "../../assets/bodySectionPNGs/Down.png";

const footerFrame = () => {
  return (
    <div className="p-2 flex flex-col items-center">
      <h2 className=" w-full py-8 flex flex-col gap-8 font-semibold text-3xl md:text-4xl lg:text-6xl leading-[4.6rem] text-[#263228] text-center">
        Pellentesque suscipit fringilla libero eu.
      </h2>
      <div className="py-2.5 sm:py-3.5 px-4 sm:px-8 flex items-center bg-primary rounded-sm gap-2 ">
        <button className="text-white leading-3 font-medium">Get a Demo</button>
        <img src={Down} alt="" className="w-4 h-4 text-white" />
      </div>
    </div>
  );
};

export default footerFrame;
