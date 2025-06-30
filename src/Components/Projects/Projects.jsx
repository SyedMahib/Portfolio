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
import 'swiper/css/pagination'
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
    <section data-aos="fade-down" className=" md:container mx-auto mt-25 bg-gradient-to-br from-gray-950 via-blue-900/10 to-gray-950 text-white py-16 px-6 md:px-20 md:rounded-3xl">
      <h2 data-aos="fade-up" className="text-3xl font-bold mb-8 text-center">
        <span className="text-blue-500">//</span> Projects
      </h2>
      <div className="space-y-12">
        {projectData.map((project, index) => (
          <div
          data-aos="fade-up"
            key={index}
            className="flex flex-col md:flex-row items-center gap-8 bg-white/5 p-5 md:p-10 rounded-xl border border-white/10 shadow-md"
          >
            <div className="w-full md:w-1/2">
              <Swiper
               effect={'fade'}
                centeredSlides={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay, EffectFade]}
                className="h-64 md:h-96 rounded-lg shadow-lg"
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
            <div className="md:w-2/3">
              <h3 className="text-3xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="flex items-center gap-1 px-3 py-1 bg-blue-600/20 text-blue-100 rounded font-semibold transition-all ease-in-out duration-300 hover:scale-110 cursor-pointer"
                  >
                    {iconMap[tech] || "🛠"} {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 mt-4">
                <Link
                  to={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 transition text-white rounded-lg text-sm"
                >
                  <FaExternalLinkAlt /> Live
                </Link>
                <Link
                  to={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-900 transition text-white rounded-lg text-sm"
                >
                  <FaGithub /> GitHub
                </Link>
                <Link
                  to={`/projects/${project.id}`}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 transition text-white rounded-lg text-sm"
                >
                  <FaInfoCircle /> Details
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
