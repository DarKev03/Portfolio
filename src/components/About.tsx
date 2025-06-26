import { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function About() {
  const [activeTab, setActiveTab] = useState("about");
  return (
    <section
      id="about"
      className="md:w-screen md:h-full bg-neutral-900 text-neutral-100 flex flex-col py-20 px-6 text-center border-t border-neutral-800"
    >
      <h2 className="text-3xl font-bold mb-4">About me</h2>
      {/* Tabs */}
      <div className="flex justify-center mb-8 gap-4 bg-neutral-800 rounded-full w-full max-w-xl mx-auto">
        <button
          className={`px-6 py-2 rounded-xl font-semibold transition-colors duration-200 focus:outline-none hover:bg-neutral-700 cursor-pointer ${
            activeTab === "about"
              ? "bg-neutral-700 text-sky-400"
              : "bg-neutral-800 text-neutral-400"
          }`}
          onClick={() => setActiveTab("about")}
        >
          About Me
        </button>
        <button
          className={`px-6 py-2 rounded-xl font-semibold transition-colors duration-200 focus:outline-none hover:bg-neutral-700 cursor-pointer ${
            activeTab === "career"
              ? "bg-neutral-700 text-sky-400"
              : "bg-neutral-800 text-neutral-400"
          }`}
          onClick={() => setActiveTab("career")}
        >
          Career
        </button>
      </div>
      {/* Tab Content */}
      {activeTab === "about" && (
        <div className="flex flex-col md:flex-row items-center gap-20 md:gap-25 max-w-6xl mx-auto justify-between pb-4">
          <p className="text-lg text-neutral-400 text-left md:w-1/2 whitespace-pre-line">
            {`I'm a passionate software developer who thrives on turning ideas into robust, user-friendly digital products. I specialize in modern web technologies, both frontend and backend, and enjoy building applications that combine clean code, thoughtful design, and seamless user experience.
          
          My development philosophy is simple: keep things clear, efficient, and maintainable. I value transparent communication, agile teamwork, and continuous improvement. For me, every project is a chance to create something meaningful—whether it’s a beautiful interface, a scalable API, or a complete end-to-end system.

          If you’re looking for someone who’s detail-oriented, resourceful, and genuinely invested in building quality digital experiences, I’d love to connect and help bring your next project to life.`}
          </p>
          <img
            src="/perfil.jpeg"
            alt="Kevin García"
            className="border-4 border-neutral-800 w-40 md:w-100 rounded-lg object-cover"
            loading="lazy"
          />
        </div>
      )}
      {activeTab === "career" && (
        <div className="max-w-4xl mx-auto text-left text-neutral-400 text-lg pb-4">
          {/*Pestaña con información sobre mi carrera la laboral*/}
        </div>
      )}
      <div className="flex flex-row mt-auto text-neutral-400 gap-12 mx-auto text-2xl max-w-6xl pt-12 w-full justify-between">
        <a
          href="https://www.linkedin.com/in/kevin-r-garc%C3%ADa-hern%C3%A1ndez-5859b6173/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-sky-400 transition hover:scale-110"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/DarKev03"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-sky-400 transition hover:scale-110"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/_kev.0_/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-sky-400 transition hover:scale-110"
        >
          <FaInstagram />
        </a>
      </div>
    </section>
  );
}
