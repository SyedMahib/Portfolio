import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted! (Connect backend or EmailJS)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="md:container mx-auto bg-gradient-to-br from-gray-950 via-blue-900/10 to-gray-950 text-white py-16 px-4 sm:px-6 md:px-12 lg:px-20 md:rounded-3xl">
      <h2 className="text-3xl font-bold mb-12 text-center">
        <span className="text-blue-500">//</span> Contact Me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Contact Info */}
        <div className="space-y-4">
          <p className="text-lg text-gray-300">
            Feel free to reach out — I’m open to freelance work, collaborations,
            and tech talk!
          </p>
          <div className="flex items-center gap-3 text-gray-400">
            <FaEnvelope className="text-xl" />
            <a href="mailto:your@email.com" className="hover:text-white break-all">
              your@email.com
            </a>
          </div>
          <div className="flex items-center gap-3 text-gray-400">
            <FaPhone className="text-xl" />
            <span>+880 1234 567890</span>
          </div>
          <div className="flex gap-4 mt-6 text-2xl">
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
              <FaGithub className="hover:text-white transition" />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:text-white transition" />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="px-10 py-3 rounded-lg text-lg font-semibold bg-blue-500 text-white transition-all duration-300 ease-in-out hover:bg-blue-700 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
