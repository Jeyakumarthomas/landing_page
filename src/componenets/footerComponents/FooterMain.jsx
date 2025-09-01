import React from "react";
import FooterLogo from "../../assets/FooterLogo.png";
import Ball from "../../assets/footerSocialLinks/ball.png";
import Instagram from "../../assets/footerSocialLinks/instagram.png";
import Twitter from "../../assets/footerSocialLinks/twitter.png";
import Youtube from "../../assets/footerSocialLinks/youtube.png";
import Send from "../../assets/footerSocialLinks/send1.png";

const FooterMain = () => {
  return (
    <div className="w-full py-8 md:py-12 xl:py-16 px-10 md:px-30 xl:px-40 flex flex-col xl:flex-row gap-8 lg:16 xl:gap-32 bg-[#263238] max-sm:relative">
      {/* RightSide */}
      <div className=" w-1/3">
        <div className=" flex flex-col  gap-4 sm:gap-10">
          <a href="#">
            <img src={FooterLogo} alt="" className="  object-fill " />
          </a>

          <div className="max-sm:mx-auto flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <p className=" text-white">CopyRight &copy; 2020 Nexcent ltd.</p>
              <p className=" text-white">All rights reserved</p>
            </div>
            <div className="flex gap-4 text-white">
              <a
                className="w-8 h-8 bg-gray-600 flex items-center justify-center rounded-full"
                href="instagram logo"
              >
                <img src={Instagram} alt="" />
              </a>
              <a
                className="w-8 h-8 bg-gray-600 flex items-center justify-center rounded-full"
                href=""
              >
                <img src={Ball} alt="" />
              </a>
              <a
                className="w-8 h-8 bg-gray-600 flex items-center justify-center rounded-full"
                href="twitter logo"
              >
                <img src={Twitter} alt="" />
              </a>
              <a
                className="w-8 h-8 bg-gray-600 flex items-center justify-center rounded-full"
                href="youtube logo"
              >
                <img src={Youtube} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Left Side */}
      <div className=" sm:w-2/3 flex flex-col lg:flex-row gap-8 max-sm:pb-20">
        {/* 1 */}
        <div className=" flex flex-col gap-6  text-white">
          <h4 className="  w-[160px] h-[28px] font-semibold text-xl leading-5 ">
            Company
          </h4>
          <div className="flex flex-col gap-3 ">
            <p className="">About us</p>
            <p className="">Blog</p>
            <p className="">Contact us</p>
            <p className="">Pricing</p>
            <p className="">Testimonials</p>
          </div>
        </div>
        {/* 2 */}
        <div className=" flex flex-col gap-6  text-white">
          <h4 className="  w-[160px] h-[28px] font-semibold text-xl leading-5 ">
            Support
          </h4>
          <div className="flex flex-col gap-3 ">
            <p className="">Help center</p>
            <p className="">Terms of services</p>
            <p className="">Legal</p>
            <p className="">Privacy policy</p>
            <p className="">Status</p>
          </div>
        </div>
        {/* 3 */}

        <div className="min-h-24 w-3xs flex flex-col gap-6 max-sm:absolute max-sm:bottom-0 max-sm:left-5">
          <h4 className="font-semibold text-xl leading-7 text-white">
            Stay up to date
          </h4>
          <div className="bg-gray-600 w-3xs flex justify-between rounded-lg items-center">
            <input
              className="bg-gray-600 p-2 font-normal text-sm text-white outline-none rounded-lg"
              type="email"
              placeholder="Your email address"
            />
            <img className="h-4 w-4 mr-2" src={Send} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMain;
