import projectsData from "../assets/projects.json";
import { FaGithub, FaGlobe, FaReact } from "react-icons/fa";
import { SiFlutter, SiSpringboot, SiSupabase, SiTailwindcss, SiVite, SiTypescript } from "react-icons/si";
import { useState } from "react";
import type { ReactElement } from "react";
import { motion } from "framer-motion";
import ProjectModal from "./ProjectModal";
import type { Project } from "./ProjectModal";

const projects: Project[] = (projectsData as any[]).filter(p => p.isFeatured) as Project[];

const techIcons: { [key: string]: ReactElement } = {
    "Flutter": <SiFlutter className="inline mr-1" />,
    "Spring Boot": <SiSpringboot className="inline mr-1" />,
    "Supabase": <SiSupabase className="inline mr-1" />,
    "React": <FaReact className="inline mr-1" />,
    "Tailwind CSS": <SiTailwindcss className="inline mr-1" />,
    "Vite": <SiVite className="inline mr-1" />,
    "TypeScript": <SiTypescript className="inline mr-1" />,
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        } as any,
    },
};

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section
            id="projects"
            className="bg-neutral-900 text-neutral-100 py-24 px-6 relative overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-sky-500/10 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-sky-400 inline-block">
                        Proyectos Destacados
                    </h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
                        Una selección de mis trabajos más significativos y soluciones técnicas complejas.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:px-20"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            whileHover={{ y: -10, transition: { duration: 0.2 } }}
                            className="group cursor-pointer bg-neutral-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-neutral-700/50 hover:border-sky-500/50 shadow-xl transition-all flex flex-col h-full"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="relative h-56 overflow-hidden bg-neutral-800">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-neutral-800 flex items-center justify-center">
                                        <span className="text-neutral-500 italic">Vista previa no disponible</span>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-60" />
                                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                                    <div className="flex gap-2">
                                        {project.technologies.slice(0, 3).map((tech, idx) => (
                                            <span key={idx} className="bg-neutral-900/80 backdrop-blur-md p-2 rounded-lg text-sky-400 border border-neutral-700">
                                                {techIcons[tech] || tech.charAt(0)}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-sky-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-neutral-400 mb-6 line-clamp-2 leading-relaxed text-left">
                                    {project.description}
                                </p>

                                <div className="mt-auto flex items-center justify-between">
                                    <div className="flex gap-4">
                                        {project.url && (
                                            <a
                                                href={project.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="text-neutral-400 hover:text-sky-400 transition-colors"
                                            >
                                                <FaGlobe size={20} />
                                            </a>
                                        )}
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="text-neutral-400 hover:text-sky-400 transition-colors"
                                            >
                                                <FaGithub size={20} />
                                            </a>
                                        )}
                                    </div>
                                    <span className="text-sky-400 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                                        Ver detalles <span>→</span>
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {selectedProject && (
                <ProjectModal 
                    project={selectedProject} 
                    onClose={() => setSelectedProject(null)} 
                />
            )}
        </section>
    );
}
