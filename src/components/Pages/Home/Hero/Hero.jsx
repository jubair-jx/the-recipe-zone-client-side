import React from "react";
import "./Hero.css";
import SideImg from "../../../../assets/plate.png";
const Hero = () => {
  return (
    <div className="hero-area">
      <div className="grid md:grid-cols-2 md:px-28 md:py-14 px-6 py-6">
        <div>
          <h2 className="md:text-6xl sm:text-5xl text-5xl font-bold mt-10">
            Welcome To The <span className="text-orange-400">Food Recipe</span>{" "}
            World....
          </h2>

          <p className="text-sm mt-5 ">
            Here is our food recipe website, where culinary inspiration and
            creativity meet! From delicious and easy weeknight dinners to
            gourmet meals for special occasions, we have a vast collection of
            recipes. You can find awesome chef in our website....
          </p>

          <button className="px-4 flex gap-1 items-center py-3 font-medium bg-orange-400 rounded-md mt-4 text-white ">
            Meet Our Chef
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
              />
            </svg>
          </button>
        </div>
        <div>
          <img className="w-[480px] md:ml-20 mt-5" src={SideImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
