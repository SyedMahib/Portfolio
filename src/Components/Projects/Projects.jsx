import React, { use } from "react";
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
import { FaExternalLinkAlt, FaGithub, FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const iconMap = {
  React: <SiReact className="text-cyan-400" size={20} />,
  TailwindCSS: <SiTailwindcss className="text-sky-400" size={20} />,
  Firebase: <SiFirebase className="text-yellow-400" size={20} />,
  DaisyUI: <SiDaisyui className="text-pink-400" size={20} />,
  Express: <SiExpress className="text-gray-300" size={20} />,
  MongoDB: <SiMongodb className="text-green-400" size={20} />,
  "Node.js": <SiNodedotjs className="text-lime-400" size={20} />,
  "Next.js": <SiNextdotjs className="text-white" size={20} />,
  "Framer Motion": <SiFramer className="text-pink-500" size={20} />,
  "React-Router": <SiReactrouter className="text-red-500" size={20} />,
  JWT: <SiJsonwebtokens className="text-pink-500" size={20} />,
};

const projectDataPromise = fetch("/Projects.json").then((res) => res.json());

const Projects = () => {
  const projectData = use(projectDataPromise);

  return (
    <section 
      data-aos="fade-down" 
      className="w-full lg:container mx-auto mt-16 bg-gradient-to-br from-gray-950 via-blue-900/10 to-gray-950 text-white py-10 px-4 sm:py-12 sm:px-6 md:rounded-3xl md:px-8 lg:px-20"
    >
      <h2 data-aos="fade-up" className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
        <span className="text-blue-500">//</span> Projects
      </h2>
      <div className="space-y-6 sm:space-y-8 md:space-y-12">
        {projectData.map((project, index) => (
          <div
            data-aos="fade-up"
            key={index}
            className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8 bg-white/5 p-4 sm:p-6 md:p-8 rounded-xl border border-white/10 shadow-md"
          >
            {/* Image Slider */}
            <div className="w-full md:w-1/2 lg:w-1/2">
              <Swiper
                effect={'fade'}
                centeredSlides={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, EffectFade]}
                className="h-48 sm:h-64 md:h-72 lg:h-80 rounded-lg shadow-lg"
              >
                {project.image.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Project Details */}
            <div className="w-full md:w-1/2 lg:w-2/3 space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">
                {project.description}
              </p>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="flex items-center gap-1 px-2 sm:px-3 py-1 bg-blue-600/20 text-blue-100 rounded text-xs sm:text-sm font-medium hover:scale-105 transition-transform"
                  >
                    {iconMap[tech] || "🛠"} {tech}
                  </span>
                ))}
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 pt-2">
                <Link
                  to={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs sm:text-sm"
                >
                  <FaExternalLinkAlt size={14} /> Live
                </Link>
                <Link
                  to={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg text-xs sm:text-sm"
                >
                  <FaGithub size={14} /> GitHub
                </Link>
                <Link
                  to={`/projects/${project.id}`}
                  className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs sm:text-sm"
                >
                  <FaInfoCircle size={14} /> Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;