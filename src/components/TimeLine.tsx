const experiences = [
    {
        title: "Desarrollador FullStack",
        company: "Métrica S.L – Fundador y Desarrollador",
        date: "Abr 2025 – Actualidad",
        description:
            "Empresa de desarrollo de software en la que soy co-fundador, entregando soluciones completas para móvil, web y escritorio. Entre los clientes se incluyen nombres como Valencia Outdoor, Gangazon y JibilHedi. Me enfoco en crear aplicaciones escalables con React, Flutter e infraestructuras cloud modernas.",
        side: "left",
    },
    {
        title: "Desarrollador FullStack",
        company: "Idrica",
        date: "Sep 2024 – Actualidad",
        description:
            "Desarrollo frontend y backend de una aplicación móvil encargada de la gestión inteligente de ordenes de trabajo para operarios en campo. Se implementan funciones claves como la gestión de ordenes en tiempo real, telelecturas y multitenant.",
        side: "right",
    },
    {
        title: "Analista de Datos - Prácticas",
        company: "ViewNext",
        date: " Marz 2024 – Jun 2024",
        description:
            "Desarrollé cuadros de mando interactivos y automatizaciones de informes utilizando Power BI y Python. Estas herramientas optimizaron la toma de decisiones al proporcionar análisis de datos claros y procesables para clientes clave.",
        side: "left",
    },    
    {
        title: "Analista de Sistemas",
        company: "Universidad de Valencia - Pulsia",
        date: "Feb 2023 – Marz 2024",
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
