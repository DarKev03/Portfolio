export default function Navbar() {
  const sections = [
    { id: "hero", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "about", label: "About me" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];
  return (
    <nav className="sticky top-0 z-50 bg-neutral-900 backdrop-blur border-b border-neutral-800">
      <ul className="flex justify-center gap-8 py-4">
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
    </nav>
  );
}
