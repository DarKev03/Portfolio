import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const experiences = [
    {
        title: "Desarrollador FullStack",
        company: "Métrica S.L – Fundador y Desarrollador",
        date: "Abr 2025 – Actualidad",
        description:
            "Empresa de desarrollo de software en la que soy co-fundador, entregando soluciones completas para móvil, web y escritorio. Entre los clientes se incluyen nombres como Valencia Outdoor, Gangazon y JibilHedi. Me enfoco en crear aplicaciones escalables con React, Flutter e infraestructuras cloud modernas.",
        side: "left",
        type: "work"
    },
    {
        title: "Desarrollador FullStack",
        company: "Idrica",
        date: "Sep 2024 – Actualidad",
        description:
            "Desarrollo frontend y backend de una aplicación móvil encargada de la gestión inteligente de ordenes de trabajo para operarios en campo. Se implementan funciones claves como la gestión de ordenes en tiempo real, telelecturas y multitenant.",
        side: "right",
        type: "work"
    },
    {
        title: "Analista de Datos - Prácticas",
        company: "ViewNext",
        date: "Marz 2024 – Jun 2024",
        description:
            "Desarrollé cuadros de mando interactivos y automatizaciones de informes utilizando Power BI y Python. Estas herramientas optimizaron la toma de decisiones al proporcionar análisis de datos claros y procesables para clientes clave.",
        side: "left",
        type: "work"
    },    
    {
        title: "Analista de Sistemas",
        company: "Universidad de Valencia - Pulsia",
        date: "Feb 2023 – Marz 2024",
        description:
            "Gestioné y optimicé sistemas informáticos para la Universidad de Valencia, mejorando la fiabilidad y rendimiento de las plataformas académicas.",
        side: "right",
        type: "work"
    },
];

export default function Timeline() {
    return (
        <div className="max-w-5xl mx-auto pt-12 relative px-4 md:px-0">
            {/* Línea vertical central - Monochromatic */}
            <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full w-px bg-sky-500/20 hidden md:block" />

            <div className="flex flex-col gap-12 relative z-10">
                {experiences.map((exp, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: exp.side === "left" ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        className={`flex w-full items-center ${exp.side === "left" ? "md:flex-row" : "md:flex-row-reverse"} flex-col md:justify-center`}
                    >
                        {/* Contenido (Tarjeta) */}
                        <div className={`md:w-[45%] w-full ${exp.side === "left" ? "md:text-right" : "md:text-left"} text-left`}>
                            <motion.div
                                whileHover={{ scale: 1.01 }}
                                className="bg-neutral-800/40 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-neutral-700/50 shadow-xl hover:border-sky-500/30 transition-all"
                            >
                                <span className="text-sky-400 font-bold text-sm mb-2 block tracking-widest uppercase">{exp.date}</span>
                                <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                                <p className="text-neutral-300 font-semibold mb-4 flex items-center gap-2 justify-start md:justify-end">
                                    {exp.side === "left" ? <>{exp.company} <FaBriefcase className="text-sky-500 opacity-40" /></> : <><FaBriefcase className="text-sky-500 opacity-40" /> {exp.company}</>}
                                </p>
                                <p className="text-neutral-400 leading-relaxed text-sm md:text-base">{exp.description}</p>
                            </motion.div>
                        </div>

                        {/* Punto central / Icono */}
                        <div className="hidden md:flex relative z-20 w-[10%] justify-center">
                            <div className="w-12 h-12 bg-neutral-900 border border-sky-500/30 rounded-full flex items-center justify-center text-sky-400 shadow-sm">
                                {exp.type === "work" ? <FaBriefcase size={20} /> : <FaGraduationCap size={20} />}
                            </div>
                        </div>

                        {/* Espaciador para el otro lado */}
                        <div className="md:w-[45%] hidden md:block" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
