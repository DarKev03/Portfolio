export default function Projects() {
    return (
        <section
            id="projects"
            className="bg-neutral-900 text-neutral-100 py-20 px-6 border-t border-neutral-800"
        >
            <h2 className="text-3xl font-bold mb-4 text-center">Projects</h2>
            <div className="flex md:flex-row gap-8 max-w-6xl mx-auto justify-center">
                {[1, 2].map((i) => (
                    <div
                        key={i}
                        className="cursor-pointer bg-neutral-800 rounded-xl p-6 border border-neutral-700 shadow hover:border-sky-400 transition"
                    >
                        <h3 className="text-xl font-semibold mb-2">Proyecto {i}</h3>
                        <p className="text-neutral-400">
                            Breve descripción de lo que hiciste y tecnologías usadas.
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
