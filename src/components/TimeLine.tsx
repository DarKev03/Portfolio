const experiences = [
    {
        title: "Desarrollador FullStack",
        company: "Métrica S.L – Fundador y Desarrollador FullStack.",
        date: "Abr 2025 – Actualidad",
        description:
            "Lancé mi propia empresa de desarrollo de software, entregando soluciones completas para móvil, web y escritorio. Los clientes incluyen Valencia Outdoor, Gangazon y JibilHedi. Enfoque en crear aplicaciones escalables con React, .NET e infraestructuras cloud modernas.",
        side: "right",
    },
    {
        title: "Desarrollador FullStack",
        company: "Idrica",
        date: "Sep 2024 – Actualidad",
        description:
            "Desarrollo de soluciones móviles y backend para sistemas inteligentes de gestión del agua. Stack tecnológico: PostgreSQL, .NET MAUI, React, Couchbase. Entregué servicios escalables que mejoran la eficiencia de monitoreo y control en múltiples ciudades.",
        side: "left",
    },
    {
        title: "Analista de Sistemas",
        company: "Universidad de Valencia - Pulsia",
        date: "Feb 2023 – Abr 2024",
        description:
            "Gestioné y optimicé sistemas informáticos para la Universidad de Valencia, mejorando la fiabilidad y rendimiento de las plataformas académicas.",
        side: "right",
    },
];

export default function Timeline() {
    return (
        <div className="max-w-4xl mx-auto pt-12 relative">
            {/* Línea vertical */}
            <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full w-1 bg-cyan-400 z-0" />

            <div className="flex flex-col gap-20 relative z-10">
                {experiences.map((exp, idx) => (
                    <div
                        key={idx}
                        className={`flex w-full ${exp.side === "left" ? "md:justify-start justify-center" : "md:justify-end justify-center"}`}
                    >
                        <div className="md:w-1/2 w-full relative flex">

                            {/* Tarjeta */}
                            <div
                                className={`border-1 border-transparent hover:border-cyan-400 bg-neutral-800 p-6 rounded-xl shadow-lg text-white relative z-10 ${exp.side === "left" ? "md:mr-10 md:ml-0" : "md:ml-10 md:mr-0"} mx-auto w-full md:w-auto`}
                                style={{ minWidth: '260px', maxWidth: '100%' }}
                            >
                                <h3 className="text-xl font-bold">{exp.title}</h3>
                                <p className="text-sm text-gray-400">{exp.company}</p>
                                <p className="text-sm text-gray-400">{exp.date}</p>
                                <p className="mt-2">{exp.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
