import React from "react";
import Marquee from "react-fast-marquee";
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiFirebase,
  SiExpress,
  SiMongodb,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiVite,
  SiFigma,
  SiAxios,
  SiJsonwebtokens,
  SiReactquery,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <SiHtml5 className="text-orange-500" size={50}/> },
  { name: "CSS", icon: <SiCss3 className="text-blue-500" size={50}/> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" size={50}/> },
  { name: "React", icon: <SiReact className="text-cyan-400" size={50}/> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400" size={50}/> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500" size={50}/> },
  { name: "Express", icon: <SiExpress className="text-gray-300" size={50}/> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" size={50}/> },
  { name: "Node.js", icon: <SiNodedotjs className="text-lime-400" size={50}/> },
  { name: "Git", icon: <SiGit className="text-orange-400" size={50}/> },
  { name: "GitHub", icon: <SiGithub className="text-white" size={50}/> },
  { name: "Vite", icon: <SiVite className="text-purple-400" size={50}/> },
  { name: "Figma", icon: <SiFigma className="text-pink-400" size={50}/> },
  { name: "JWT", icon: <SiJsonwebtokens className="text-green-500" size={50}/> },
  { name: "Axios", icon: <SiAxios className="text-sky-300" size={50}/> },
  { name: "TanStack Query", icon: <SiReactquery className="text-red-400" size={50}/> },
];

const Skills = () => {
  return (
    <section data-aos="zoom-out-down" className="my-25 bg-gradient-to-br from-gray-950 via-blue-900/10 to-gray-950 text-white py-[50px] px-6 md:px-20">
      <h2 className="text-3xl font-bold mb-8 text-center">
        <span className="text-blue-500">//</span> My Skills
      </h2>

      <Marquee gradient={false} speed={50} autoFill className="space-x-6 mb-5">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-2 my-2 px-6 py-4 mx-3 bg-white/5 border border-white/10 rounded-xl shadow-md min-w-[100px] md:min-w-[200px] hover:scale-110 transition-transform duration-300"
          >
            <div className="text-4xl">{skill.icon}</div>
            <p className="text-sm font-bold text-gray-300">{skill.name}</p>
          </div>
        ))}
      </Marquee>
      <Marquee
      
        gradient={false}
        speed={50}
        autoFill={true}
        direction="right"
        className="space-x-6"
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-2 my-2 px-6 py-4 mx-3 bg-white/5 border border-white/10 rounded-xl shadow-md min-w-[100px] md:min-w-[200px] hover:scale-110 transition-transform duration-300"
          >
            <div className="text-4xl">{skill.icon}</div>
            <p className="text-sm font-bold text-gray-300">{skill.name}</p>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default Skills;
