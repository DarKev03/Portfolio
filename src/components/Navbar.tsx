import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const sections = [
    { id: "hero", label: "Inicio" },
    { id: "skills", label: "Habilidades" },
    { id: "about", label: "Sobre mí" },
    { id: "projects", label: "Proyectos" },
    { id: "clients", label: "Clientes" },
    { id: "contact", label: "Contacto" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-4" : "py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`flex items-center justify-between md:justify-center px-6 py-3 rounded-2xl border transition-all duration-300 ${scrolled
              ? "bg-neutral-900/80 backdrop-blur-xl border-neutral-700/50 shadow-2xl"
              : "bg-transparent border-transparent"
            }`}
        >
          {/* Logo/Brand - Monochromatic */}
          <div className="md:hidden">
            <span className="text-xl font-bold text-sky-400">
              KG
            </span>
          </div>

          {/* Hamburger icon */}
          <button
            className="md:hidden flex flex-col gap-1.5 focus:outline-none z-50 p-2"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            <motion.span
              animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-6 bg-neutral-200"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="block h-0.5 w-6 bg-neutral-200"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-6 bg-neutral-200"
            />
          </button>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center gap-10">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="text-neutral-400 hover:text-white transition-all font-bold text-sm uppercase tracking-widest relative group"
                >
                  {s.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-500 transition-all group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-neutral-900/95 backdrop-blur-2xl border-b border-neutral-800 absolute top-full left-0 right-0 overflow-hidden shadow-2xl"
          >
            <ul className="flex flex-col px-8 py-10 gap-6">
              {sections.map((s, idx) => (
                <motion.li
                  key={s.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <a
                    href={`#${s.id}`}
                    className="text-2xl font-bold text-neutral-200 hover:text-sky-400 transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {s.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
