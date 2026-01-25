import { useEffect, useState } from "react";
// import { FaBriefcase, FaUmbrellaBeach } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Timeline from "./TimeLine";


export default function About() {
  const [activeTab, setActiveTab] = useState("sobre mí");
  const tabs = ["sobre mí", "trayectoria", "descargar CV"];
  // const [image, setImage] = useState("perfil_2.JPEG");

  const image = "perfil.jpeg";

  const aboutMeText = `Soy desarrollador Full Stack especializado en crear soluciones dinámicas, limpias y escalables. Adapto mi stack tecnológico a las necesidades de cada proyecto para garantizar la máxima calidad y robustez, manteniéndome siempre a la vanguardia de las tendencias del sector.

Mi trayectoria incluye tanto proyectos colaborativos en empresas referentes como el desarrollo de soluciones a medida para negocios locales. Mi enfoque no es solo programar, sino optimizar procesos para aportar un valor real y tangible a cada negocio.

Sigo en constante crecimiento y evolución profesional. Si tienes una idea o un proceso que necesite digitalizarse, hablemos.`;

  useEffect(() => {
    if (activeTab === "descargar CV") {
      const link = document.createElement("a");
      link.href = "/CV_Kevin_Garcia.pdf";
      link.download = "CV_Kevin_Garcia.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setActiveTab("sobre mí");
    }
  }, [activeTab]);

  // function changeImage(img: string) {
  //   setImage(img);
  // }

  return (
    <section
      id="about"
      className="md:w-screen md:h-full bg-neutral-900 text-neutral-100 flex flex-col py-20 px-6 text-center border-t border-neutral-800"
    >
      <h2 className="text-3xl font-bold mb-4">Sobre mí</h2>
      {/* Tabs */}
      <div className="relative flex justify-center mb-8 gap-1.5 bg-gradient-to-r from-neutral-800 via-neutral-850 to-neutral-800 p-1 rounded-full w-full max-w-lg mx-auto shadow-lg border border-neutral-700/50">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`relative z-10 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 focus:outline-none cursor-pointer flex-1 ${activeTab === tab
              ? "text-white"
              : "text-neutral-400 hover:text-neutral-200"
              }`}
            onClick={() => setActiveTab(tab)}
          >
            <span className="relative z-10">
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </span>
            {activeTab === tab && (
              <span className="absolute inset-0 bg-gradient-to-r from-sky-500 to-cyan-400 rounded-full shadow-lg shadow-sky-500/50 animate-pulse-subtle" />
            )}
          </button>
        ))}
      </div>
      {/* Tab Content */}
      {activeTab === "sobre mí" && (
        <div className="flex flex-col md:flex-row items-center gap-20 md:gap-25 max-w-6xl mx-auto justify-between pb-4">
          <p className="text-lg text-neutral-400 text-left md:w-1/2 whitespace-pre-line">
            {aboutMeText}
          </p>
          <div>
            <div className="relative w-80 h-80 md:w-100 md:h-100 overflow-hidden rounded-lg border-4 border-neutral-800">
              <AnimatePresence mode="wait">
                <motion.img
                  key={image}
                  src={`/${image}`}
                  alt="Kevin García"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ 
                    duration: 0.4,
                    ease: "easeInOut"
                  }}
                />
              </AnimatePresence>
            </div>

            {/* <div className="bg-neutral-800 p-4 rounded-lg shadow-md mt-2 flex flex-col gap-2">
              <button 
                className={`text-sm font-semibold text-neutral-300 hover:text-neutral-100 bg-neutral-700 rounded-full px-4 py-2 flex items-center justify-center gap-2 transition cursor-pointer ${image === "perfil.jpeg" ? "ring-2 ring-sky-500" : ""}`} 
                onClick={() => changeImage("perfil.jpeg")}
              >
                <FaBriefcase className="text-lg" />
                <span>Lunes</span>
              </button>
              <button 
                className={`text-sm font-semibold text-neutral-300 hover:text-neutral-100 bg-neutral-700 rounded-full px-4 py-2 flex items-center justify-center gap-2 transition cursor-pointer ${image === "perfil_2.JPEG" ? "ring-2 ring-sky-500" : ""}`} 
                onClick={() => changeImage("perfil_2.JPEG")}
              >
                <FaUmbrellaBeach className="text-lg" />
                <span>Viernes</span>
              </button>
            </div> */}
            
          </div>

        </div>
      )}
      {activeTab === "trayectoria" && (
        <Timeline />
      )}

    </section>
  );
}
