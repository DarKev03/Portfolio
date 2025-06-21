export default function About() {
  return (
    <section
      id="about"
      className="w-screen h-screen bg-neutral-900 text-neutral-100 flex flex-col items-center justify-center px-6 text-center border-t border-neutral-800"
    >
      <h2 className="text-3xl font-bold mb-4 align-middle">Sobre mí</h2>
      <p className="max-w-2xl mx-auto text-lg text-neutral-400">
        Breve resumen sobre tu experiencia y tu visión como dev. Directo y sencillo.
      </p>
    </section>
  );
}
