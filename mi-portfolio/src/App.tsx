import { useEffect, type JSX } from "react";
import { motion } from "framer-motion";

interface Section {
  id: string;
  label: string;
}

const sections: Section[] = [
  { id: "hero", label: "Inicio" },
  { id: "about", label: "Sobre mí" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Proyectos" },
  { id: "contact", label: "Contacto" },
];

export default function App(): JSX.Element {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="bg-slate-900 text-slate-100 font-sans">
      <nav className="sticky top-0 z-50 bg-slate-900 bg-opacity-70 backdrop-blur p-4 shadow-lg">
        <ul className="flex justify-center gap-6 text-sm">
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="hover:text-sky-400 transition">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <section id="hero" className="h-screen flex flex-col justify-center items-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Hola, soy TuNombre
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-2xl max-w-xl"
        >
          Desarrollador de software creando soluciones modernas con estilo.
        </motion.p>
      </section>

      <section id="about" className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Sobre mí</h2>
        <p>Breve historia sobre ti, tu experiencia, tecnologías que amas y tu visión como dev.</p>
      </section>

      <section id="skills" className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-4">
          {['React', 'Node.js', 'Tailwind', 'TypeScript', 'Vite', 'Next.js'].map((skill: string) => (
            <span
              key={skill}
              className="bg-slate-800 px-3 py-1 rounded-full text-sm hover:bg-sky-700 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="projects" className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2].map((i: number) => (
            <div
              key={i}
              className="bg-slate-800 rounded-xl p-4 shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2">Proyecto {i}</h3>
              <p className="text-sm">Descripción del proyecto y tecnologías utilizadas.</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Contacto</h2>
        <p>
          Puedes escribirme a{' '}
          <a href="mailto:tuemail@example.com" className="text-sky-400 underline">
            tuemail@example.com
          </a>{' '}
          o encontrarme en mis redes sociales.
        </p>
      </section>

      <footer className="text-center py-6 text-sm text-slate-500">
        &copy; {new Date().getFullYear()} TuNombre. Todos los derechos reservados.
      </footer>
    </div>
  );
}
