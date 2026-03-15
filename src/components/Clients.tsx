import { motion } from "framer-motion";
import projectsData from "../assets/projects.json";
import { useState } from "react";
import ProjectModal from "./ProjectModal";
import type { Project } from "./ProjectModal";

type LocalProject = {
    id: number;
    title: string;
    description: string;
    detailed_description?: string;
    technologies: string[];
    image: string;
    images?: string[];
    url: string;
    github: string;
    isFeatured: boolean;
};

const clientProjects = (projectsData as LocalProject[]).filter(p => !p.isFeatured);

export default function Clients() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section id="clients" className="bg-neutral-900 py-20 px-6 relative">
            <div className="max-w-7xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Marcas que confían</h2>
                    <div className="h-1 w-20 bg-sky-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {clientProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -5 }}
                            viewport={{ once: true }}
                            onClick={() => setSelectedProject(project)}
                            className="group cursor-pointer flex flex-col items-center justify-center p-8 bg-neutral-800/20 rounded-3xl border border-neutral-700/50 hover:border-sky-500/50 transition-all aspect-square md:aspect-auto md:h-48"
                        >
                            <div className="relative w-full h-full max-h-24 flex items-center justify-center filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-40 group-hover:opacity-100">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                            <span className="mt-4 text-xs font-bold text-neutral-500 uppercase tracking-widest group-hover:text-sky-400 transition-colors">
                                Ver trabajo
                            </span>
                        </motion.div>
                    ))}
                </div>
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
