import React from "react";
import { IoLogoReact } from "react-icons/io5";
import { AiFillGithub, AiOutlineJavaScript } from "react-icons/ai";
import { BiLogoFirebase, BiLogoTailwindCss } from "react-icons/bi";
import { Link } from "react-router";
import { TiSocialLinkedin } from "react-icons/ti";
import { RiTwitterXFill } from "react-icons/ri";
import pfp from "../../assets/pfp.jpg";

const Banner = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 py-8 md:py-12 lg:py-16">
      {/* Text content - full width on mobile, 50% on desktop */}
      <div className="w-full lg:w-1/2 order-2 lg:order-1 mt-8 lg:mt-0">
        {/* Name and designation */}
        <div className="space-y-3 md:space-y-4 lg:space-y-5">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#F5F5F5] leading-tight">
            Syed Mahib
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Full Stack Developer
          </h2>
          <p className="text-base sm:text-lg text-white">
            A passionate full-stack web developer with a dedicated focus on
            building performant and scalable applications. When I'm not coding,
            you'll find me exploring cutting-edge web technologies or
            contributing to open source.
          </p>
          
          {/* Buttons and social links */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6 md:mt-8">
            <Link 
              className="px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-base sm:text-lg font-semibold bg-blue-500 text-white 
                transition-all duration-300 ease-in-out hover:bg-blue-700 
                hover:scale-105 hover:shadow-lg focus:outline-none 
                focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75
                w-full sm:w-auto text-center"
            >
              Resume
            </Link>
            <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
              <Link
                className="rounded-full bg-gray-900 p-2 font-bold cursor-pointer
                  transition-all duration-300 ease-in-out
                  hover:shadow-[0_0_15px_rgba(33,150,243,0.7)] hover:-translate-y-1
                  w-10 h-10 flex items-center justify-center"
                to="https://github.com/SyedMahib"
              >
                <AiFillGithub size={100} className="text-white" />
              </Link>
              <Link
                className="rounded-full bg-gray-900 p-2 font-bold cursor-pointer
                  transition-all duration-300 ease-in-out
                  hover:shadow-[0_0_15px_rgba(33,150,243,0.7)] hover:-translate-y-1
                  w-10 h-10 flex items-center justify-center"
                to="https://www.linkedin.com/"
              >
                <TiSocialLinkedin size={100} className="text-[#0077B5]" />
              </Link>
              <Link
                className="rounded-full bg-gray-900 p-2 font-bold cursor-pointer
                  transition-all duration-300 ease-in-out
                  hover:shadow-[0_0_15px_rgba(33,150,243,0.7)] hover:-translate-y-1
                  w-10 h-10 flex items-center justify-center"
                to="https://x.com/?lang=en"
              >
                <RiTwitterXFill size={100} className="text-white" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Image content - full width on mobile, 50% on desktop */}
      <div className="w-full lg:w-1/2 order-1 lg:order-2 flex items-center justify-center h-auto sm:h-[300px] md:h-[400px] lg:h-[500px]">
        <img 
          className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 border-4 border-white/20 rounded-full object-cover shadow-xl"
          src={pfp} 
          alt="Syed Mahib" 
        />
      </div>
    </div>
  );
};

export default Banner;