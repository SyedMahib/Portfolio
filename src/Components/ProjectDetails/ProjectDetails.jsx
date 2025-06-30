import React, { use } from "react";
import { Link, useParams } from "react-router";
import {
  SiReact,
  SiTailwindcss,
  SiFirebase,
  SiDaisyui,
  SiExpress,
  SiMongodb,
  SiNodedotjs,
  SiNextdotjs,
  SiFramer,
  SiReactrouter,
  SiJsonwebtokens,
} from "react-icons/si";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/effect-fade';

const iconMap = {
  React: <SiReact className="text-cyan-400" size={20}/>,
  TailwindCSS: <SiTailwindcss className="text-sky-400" size={20}/>,
  Firebase: <SiFirebase className="text-yellow-400" size={20}/>,
  DaisyUI: <SiDaisyui className="text-pink-400" size={20}/>,
  Express: <SiExpress className="text-gray-300" size={20}/>,
  MongoDB: <SiMongodb className="text-green-400" size={20}/>,
  "Node.js": <SiNodedotjs className="text-lime-400" size={20}/>,
  "Next.js": <SiNextdotjs className="text-white" size={20}/>,
  "Framer Motion": <SiFramer className="text-pink-500" size={20}/>,
  "React-Router": <SiReactrouter className="text-pink-500" size={20}/>,
  JWT: <SiJsonwebtokens className="text-pink-500" size={20}/>
};

const projectDataPromise = fetch("/Projects.json").then((res) => res.json());

const ProjectDetails = () => {
  const { id } = useParams();
  const projectData = use(projectDataPromise);
  const project = projectData.find((p) => p.id === id);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <Link
        to="/"
        className="btn rounded-lg font-semibold bg-blue-500 text-white transition-all duration-300 ease-in-out hover:bg-blue-700 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 mb-10 items-center"
      >
        <FaArrowLeft size={18}/>
        Go back{" "}
      </Link>
      <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
      <div className="w-full pb-5">
        <Swiper
                effect={'fade'}
                centeredSlides={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, EffectFade]}
                className="h-64 md:h-[500px] rounded-lg shadow-lg"
              >
                {project.image.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={`CribConnect screenshot ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
      </div>
      <p className="mb-4 text-lg text-white">{project.mainDescription}</p>
      <h4 className="text-xl font-semibold mt-6 mb-2">Features:</h4>
      <ul className="list-disc ml-6 mb-4 text-shadow-amber-200">
        {project.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-3">
        {project.techStack.map((tech, idx) => (
          <span
            key={idx}
            className="flex items-center gap-1 px-3 py-1 bg-blue-600/20 text-blue-100 rounded  cursor-pointer font-semibold transition-all ease-in-out duration-300 hover:scale-110"
          >
            {iconMap[tech] || "🛠"} {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-3 mt-6">
        {project.liveLink && project.liveLink !== "#" && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn rounded-lg font-semibold bg-blue-500 text-white transition-all duration-300 ease-in-out hover:bg-blue-700 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
          >
            <FaExternalLinkAlt /> Live Site
          </a>
        )}
        {project.githubLink && project.githubLink !== "#" && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn rounded-lg font-semibold bg-gray-500 text-white transition-all duration-300 ease-in-out hover:bg-gray-700 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75"
          >
            <FaGithub /> GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
