import Lottie from "lottie-react";
import React from "react";
import aboutLottie from "../../assets/about.json";

const About = () => {
  return (
    <section className="w-full lg:container mx-auto bg-gradient-to-br from-gray-950 via-blue-900/10 to-gray-950 text-white py-12 px-4 sm:py-16 sm:px-6 md:rounded-3xl md:px-20 md:py-16 mb-10">
      <h2 data-aos="fade-down" className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
        <span className="text-blue-500">//</span> About Me
      </h2>

      <div className="flex flex-col md:flex-row-reverse gap-6 sm:gap-10 items-center">
        <div 
          data-aos="fade-left"
          className="w-full md:w-2/3 bg-white/5 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-white/10 shadow-lg shadow-blue-900/80"
        >
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            <span className="text-blue-400">// Developer's Log:</span>
            <br />
            <br />
            I'm <span className="text-blue-500 font-semibold">Syed Mahib</span>,
            a passionate full-stack developer with a love for solving real-world
            problems with elegant code. My journey began with curiosity and
            late-night debugging, and now I turn ideas into digital experiences.
            <br />
            <br />
            I enjoy working with the MERN stack, crafting intuitive UI,
            and learning new technologies every day. Whether it's a scalable web
            app or a fun side project — I build with purpose and precision.
          </p>
        </div>

        <div data-aos="fade-right" className="relative z-10 w-64 sm:w-80 md:w-96">
          <Lottie animationData={aboutLottie} />
        </div>
      </div>
    </section>
  );
};

export default About;