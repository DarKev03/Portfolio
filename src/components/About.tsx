import { useEffect, useState } from "react";
import { FaBriefcase, FaGlassCheers } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Timeline from "./TimeLine";


export default function About() {
  const [activeTab, setActiveTab] = useState("sobre mí");
  const tabs = ["sobre mí", "trayectoria", "descargar CV"];
  const [image, setImage] = useState("perfil_2.JPEG");

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

  function changeImage(img: string) {
    setImage(img);
  }

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
            {`Soy desarrollador de software full stack. Me especializo en crear soluciones dinámicas, limpias y escalables ya sean web, móviles o multiplataforma.

Adapto mi stack tecnológico a las necesidades de cada proyecto. Para desarrollo web suelo trabajar con React y Spring Boot, mientras que en entornos móviles utilizo Flutter con Spring Boot. Me manejo con bases de datos relacionales y no relacionales, y me mantengo siempre al día con las últimas tendencias del sector.

Durante estos años he trabajado en diversos proyectos tanto personales como colaborativos. Esto me ha ayudado a crecer como profesional y alcanzar nuevos conocimientos que me gusta plasmar en cada cosa que hago.

He trabajado en empresas reconocidas como ViewNext e Idrica (donde actualmente desempeño mi labor), además de desarrollar soluciones a medida para distintos clientes de mi localidad. 

Esta experiencia me llevó a cofundar la consultora Métrica S.L., donde me desempeño activamente en el desarrollo y gestión de proyectos tecnológicos.

Hoy en día tengo como objetivo seguir creciendo y desarrollándome en mi área, intentando contribuir en proyectos que puedan aportar valor real que faciliten y traigan beneficio a la vida de las personas.`}
          </p>
          <div>
            <div className="relative w-40 h-40 md:w-100 md:h-100 overflow-hidden rounded-lg border-4 border-neutral-800">
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
            <div className="bg-neutral-800 p-4 rounded-lg shadow-md mt-2 flex flex-col gap-2">
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
                <FaGlassCheers className="text-lg" />
                <span>Viernes</span>
              </button>
            </div>
          </div>

        </div>
      )}
      {activeTab === "trayectoria" && (
        <Timeline />
      )}

    </section>
  );
}
