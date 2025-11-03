import { useEffect, useState } from "react";
import Timeline from "./TimeLine";

export default function About() {
  const [activeTab, setActiveTab] = useState("sobre mí");
  const tabs = ["sobre mí", "trayectoria", "descargar CV"];

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
          <img
            src="/perfil.jpeg"
            alt="Kevin García"
            className="border-4 border-neutral-800 w-40 md:w-100 rounded-lg object-cover"
            loading="lazy"
          />
        </div>
      )}
      {activeTab === "trayectoria" && (
        <Timeline />
      )}

    </section>
  );
}
