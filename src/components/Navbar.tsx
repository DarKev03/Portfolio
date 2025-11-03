import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const sections = [
    { id: "hero", label: "Inicio" },
    { id: "skills", label: "Habilidades" },
    { id: "about", label: "Sobre mí" },
    { id: "projects", label: "Proyectos" },
    { id: "contact", label: "Contacto" },
  ];
  return (
    <nav className="sticky top-0 z-50 bg-neutral-900 backdrop-blur border-b border-neutral-800">
      <div className="mx-auto flex items-center md:justify-center px-4 py-4">        
        {/* Hamburger icon */}
        <button
          className="md:hidden flex flex-col gap-1 focus:outline-none"
          aria-label="Abrir menú"
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`block h-0.5 w-6 bg-neutral-200 transition-all ${open ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-neutral-200 transition-all ${open ? 'opacity-0' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-neutral-200 transition-all ${open ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
        {/* Desktop menu */}
        <ul className="hidden md:flex justify-center gap-8">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="text-neutral-200 hover:text-sky-400 transition font-medium"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* Mobile menu */}
      {open && (
        <ul className="flex flex-col md:hidden bg-neutral-900 border-t border-neutral-800 px-8 py-4 gap-4 animate-fade-in">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="block text-neutral-200 hover:text-sky-400 transition font-medium py-2"
                onClick={() => setOpen(false)}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
