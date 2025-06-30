import Lottie from "lottie-react";
import React from "react";
import aboutLottie from "../../assets/about.json";

const About = () => {
  return (
    <section className="md:container mx-auto md:rounded-3xl bg-gradient-to-br from-gray-950 via-blue-900/10 to-gray-950 text-white py-16 px-6 md:px-20 mb-10 ">
      <h2 className="text-3xl font-bold mb-8 text-center">
        <span className="text-blue-500">//</span> About Me
      </h2>

      <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
        {/* Left: Narrative */}
        <div className="md:w-2/3 bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-lg shadow-blue-900/80">
          <p className="text-gray-300 text-lg leading-relaxed">
            <span className="text-blue-400">// Developer's Log:</span>
            <br />
            <br />
            I’m <span className="text-blue-500 font-semibold">Syed Mahib</span>,
            a passionate full-stack developer with a love for solving real-world
            problems with elegant code. My journey began with curiosity and
            late-night debugging, and now I turn ideas into digital experiences.
            <br />
            <br />I enjoy working with the MERN stack, crafting intuitive UI,
            and learning new technologies every day. Whether it's a scalable web
            app or a fun side project — I build with purpose and precision.
          </p>
        </div>

        {/* Animation */}
        {/* <div className="absolute top-200 right-250 -inset-4 z-0 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.3),transparent_30%)] blur-2xl"></div> */}
        <div className="relative z-10">
          <Lottie className="md:w-96 w-80" animationData={aboutLottie}></Lottie>
        </div>
      </div>
    </section>
  );
};

export default About;
