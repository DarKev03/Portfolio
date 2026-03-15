import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Timeline from "./TimeLine";

export default function About() {
  const [activeTab, setActiveTab] = useState("sobre mí");
  const tabs = ["sobre mí", "trayectoria", "descargar CV"];
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

  return (
    <section
      id="about"
      className="bg-neutral-900 text-neutral-100 flex flex-col py-24 px-6 text-center relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto w-full"
      >
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
          Creando soluciones <span className="text-neutral-500">digitales</span> con propósito.
        </h3>

        {/* Tabs - Monochromatic */}
        <div className="relative flex justify-center mb-16 gap-2 bg-neutral-800/50 p-1.5 rounded-2xl w-full max-w-lg mx-auto shadow-xl border border-neutral-700/50 backdrop-blur-md">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`relative z-10 px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 focus:outline-none cursor-pointer flex-1 ${activeTab === tab
                ? "text-white"
                : "text-neutral-400 hover:text-neutral-200"
                }`}
              onClick={() => setActiveTab(tab)}
            >
              <span className="relative z-20">
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </span>
              {activeTab === tab && (
                <motion.span
                  layoutId="activeTab"
                  className="absolute inset-0 bg-sky-500 rounded-xl shadow-lg shadow-sky-500/20"
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === "sobre mí" ? (
            <motion.div
              key="about-me"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center gap-12 lg:gap-24 max-w-6xl mx-auto justify-between"
            >
              <div className="text-lg text-neutral-400 text-left md:w-3/5 space-y-6 leading-relaxed">
                <p className="text-neutral-400 text-lg leading-relaxed whitespace-pre-line text-left">
                  {aboutMeText}
                </p>
                <div className="space-y-6 text-left">
                  <div className="flex gap-4 items-start">
                    <div className="w-1 h-12 bg-sky-500/20 rounded-full mt-2" />
                    <div>
                      <h4 className="text-white font-bold text-xl">+3 años</h4>
                      <p className="text-neutral-500">Desarrollando productos digitales de alto impacto.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-1 h-12 bg-sky-500/20 rounded-full mt-2" />
                    <div>
                      <h4 className="text-white font-bold text-xl">Enfoque Full Stack</h4>
                      <p className="text-neutral-500">Especializado en backends robustos e interfaces fluidas.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-2/5 flex justify-center">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-sky-500 rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden rounded-2xl border border-neutral-700 bg-neutral-800 shadow-2xl">
                    <img
                      src={`/${image}`}
                      alt="Kevin García"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ) : activeTab === "trayectoria" ? (
            <motion.div
              key="timeline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Timeline />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
