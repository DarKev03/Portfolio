import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight, FaGlobe, FaGithub, FaReact } from "react-icons/fa";
import { SiFlutter, SiSpringboot, SiSupabase, SiTailwindcss, SiVite, SiTypescript } from "react-icons/si";
import { useState } from "react";
import type { ReactElement } from "react";

export type Project = {
    id: number;
    title: string;
    description: string;
    detailed_description?: string;
    technologies: string[];
    image: string;
    images?: string[];
    url: string;
    github: string;
};

const techIcons: { [key: string]: ReactElement } = {
    "Flutter": <SiFlutter className="inline mr-1" />,
    "Spring Boot": <SiSpringboot className="inline mr-1" />,
    "Supabase": <SiSupabase className="inline mr-1" />,
    "React": <FaReact className="inline mr-1" />,
    "Tailwind CSS": <SiTailwindcss className="inline mr-1" />,
    "Vite": <SiVite className="inline mr-1" />,
    "TypeScript": <SiTypescript className="inline mr-1" />,
};

interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        if (project.images) {
            setCurrentImageIndex((prev) =>
                prev === project.images!.length - 1 ? 0 : prev + 1
            );
        }
    };

    const prevImage = () => {
        if (project.images) {
            setCurrentImageIndex((prev) =>
                prev === 0 ? project.images!.length - 1 : prev - 1
            );
        }
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 flex items-center justify-center z-[100] p-4 bg-neutral-950/90 backdrop-blur-md"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    className="bg-neutral-900 border border-neutral-800 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex flex-col md:flex-row h-full">
                        {/* Left Side: Images */}
                        <div className="md:w-1/2 relative bg-neutral-950 flex flex-col">
                            <div className="relative flex-grow flex items-center justify-center p-4">
                                {project.images && project.images.length > 0 ? (
                                    <motion.img
                                        key={currentImageIndex}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        src={project.images[currentImageIndex]}
                                        alt={project.title}
                                        className="max-w-full max-h-[60vh] object-contain rounded-xl"
                                    />
                                ) : (
                                    <div className="flex flex-col items-center text-neutral-600">
                                        <div className="w-20 h-20 bg-neutral-800 rounded-full flex items-center justify-center mb-4">
                                            <FaTimes size={32} />
                                        </div>
                                        <p>Recursos confidenciales no mostrados</p>
                                    </div>
                                )}

                                {project.images && project.images.length > 1 && (
                                    <>
                                        <button
                                            onClick={prevImage}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-neutral-800/50 hover:bg-sky-500 text-white p-3 rounded-full backdrop-blur-md transition-all z-10"
                                        >
                                            <FaChevronLeft />
                                        </button>
                                        <button
                                            onClick={nextImage}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-neutral-800/50 hover:bg-sky-500 text-white p-3 rounded-full backdrop-blur-md transition-all z-10"
                                        >
                                            <FaChevronRight />
                                        </button>
                                    </>
                                )}
                            </div>
                            
                            {project.images && project.images.length > 1 && (
                                <div className="p-4 flex justify-center gap-2 overflow-x-auto">
                                    {project.images.map((img, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrentImageIndex(idx)}
                                            className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                                                idx === currentImageIndex ? 'border-sky-500 scale-110' : 'border-transparent opacity-50'
                                            }`}
                                        >
                                            <img src={img} alt="" className="w-full h-full object-cover" />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Right Side: Content */}
                        <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto bg-neutral-900 custom-scrollbar">
                            <div className="flex justify-between items-start mb-6">
                                <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                                <button onClick={onClose} className="text-neutral-500 hover:text-white transition-colors">
                                    <FaTimes size={24} />
                                </button>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.technologies.map((tech, idx) => (
                                    <span key={idx} className="bg-sky-500/10 text-sky-400 px-3 py-1 rounded-full text-xs font-bold border border-sky-500/20 flex items-center">
                                        {techIcons[tech]} {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="space-y-6 text-neutral-300">
                                <h4 className="text-xl font-semibold text-white">Resumen del Proyecto</h4>
                                <p className="leading-relaxed whitespace-pre-line">
                                    {project.detailed_description || project.description}
                                </p>
                            </div>

                            <div className="mt-12 flex gap-4">
                                {project.url && (
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 bg-sky-500 hover:bg-sky-400 text-white font-bold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20"
                                    >
                                        <FaGlobe /> Visitar proyecto
                                    </a>
                                )}
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 bg-neutral-800 hover:bg-neutral-700 text-white font-bold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-2 border border-neutral-700"
                                    >
                                        <FaGithub /> Ver código
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
