import React from "react";
import { NavLink } from "react-router";
import DarkThemeToggle from "../DarkModeToggoler/DarkThemeToggle";
import logo from "../../assets/logo.png";
import { Link as ScrollLink } from "react-scroll";
import "./navbar.css"

const Navbar = () => {
  const navLinks = (
    <>
     <ScrollLink
        to="home"
        smooth={true}
        duration={500}
        offset={-70}
        spy={true}
        activeClass="active"
        className="link cursor-pointer px-4 py-2 text-white transition-all"
      >
        Home
      </ScrollLink>

      <ScrollLink
        to="about"
        smooth={true}
        duration={500}
        offset={-70}
        spy={true}
        activeClass="active"
        className="link cursor-pointer px-4 py-2 text-white transition-all"
      >
        About
      </ScrollLink>

       <ScrollLink
        to="projects"
        smooth={true}
        duration={500}
        offset={-70}
        spy={true}
        activeClass="active"
        className="link cursor-pointer px-4 py-2 text-white transition-all"
      >
        Projects
      </ScrollLink>

       <ScrollLink
        to="skills"
        smooth={true}
        duration={500}
        offset={-70}
        spy={true}
        activeClass="active"
        className="link cursor-pointer px-4 py-2 text-white transition-all"
      >
        Skills
      </ScrollLink>

       <ScrollLink
        to="contact"
        smooth={true}
        duration={500}
        offset={-70}
        spy={true}
        activeClass="active"
        className="link cursor-pointer px-4 py-2 text-white transition-all"
      >
        Contact
      </ScrollLink>
    </>
  );

  return (
    <div className="pt-6 sticky top-0 z-50">
      <div className=" md:container mx-auto navbar bg-gradient-to-br from-gray-900/50 to-gray-800/60 backdrop-blur-lg border border-gray-700/30 shadow-xl shadow-black/20 text-white rounded-3xl md:px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <div className="flex items-center gap-3 -ms-3">
            <img className="w-[50px]" src={logo} alt="" />
            <a className="btn btn-ghost -ms-6 text-2xl">Mahib</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <button className="btn rounded-lg font-semibold bg-blue-500 text-white transition-all duration-300 ease-in-out hover:bg-blue-700 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75">Resume</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
