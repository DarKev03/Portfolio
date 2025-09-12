const experiences = [
    {
        title: "FullStack Developer",
        company: "Metrica S.L – Founder & FullStack Developer.",
        date: "Apr 2025 – Current",
        description:
            "Launched my own software development company, delivering end-to-end solutions for mobile, web, and desktop. Clients include Valencia Outdoor, Gangazon, and JibilHedi. Focus on building scalable apps with React, .NET, and modern cloud infrastructures.",
        side: "right",
    },
    {
        title: "FullStack Developer",
        company: "Idrica",
        date: "Sep 2024 – Current",
        description:
            "Building mobile and backend solutions for smart water management systems. Tech stack: PostgreSQL, .NET MAUI, React, Couchbase. Delivered scalable services improving monitoring and control efficiency across multiple cities.",
        side: "left",
    },
    {
        title: "System Analyst",
        company: "University of Valencia - Pulsia",
        date: "Feb 2023 – Apr 2024",
        description:
            "Managed and optimized IT systems for the University of Valencia, improving reliability and performance of academic platforms.",
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
