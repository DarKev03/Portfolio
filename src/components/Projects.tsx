import projectsData from "../assets/projects.json";
import { FaGithub, FaGlobe, FaTimes, FaChevronLeft, FaChevronRight, FaReact } from "react-icons/fa";
import { SiFlutter, SiSpringboot, SiSupabase, SiTailwindcss } from "react-icons/si";
import { useState } from "react";
import type { ReactElement } from "react";

type Project = {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    image: string;
    images?: string[];
    url: string;
    github: string;
};

const projects: Project[] = projectsData as Project[];

// Mapeo de tecnologías a iconos
const techIcons: { [key: string]: ReactElement } = {
    "Flutter": <SiFlutter className="inline mr-1" />,
    "Spring Boot": <SiSpringboot className="inline mr-1" />,
    "Supabase": <SiSupabase className="inline mr-1" />,
    "React": <FaReact className="inline mr-1" />,
    "Tailwind CSS": <SiTailwindcss className="inline mr-1" />,
};

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openModal = (project: Project) => {
        setSelectedProject(project);
        setCurrentImageIndex(0);
    };

    const closeModal = () => {
        setSelectedProject(null);
        setCurrentImageIndex(0);
    };

    const nextImage = () => {
        if (selectedProject?.images) {
            setCurrentImageIndex((prev) =>
                prev === selectedProject.images!.length - 1 ? 0 : prev + 1
            );
        }
    };

    const prevImage = () => {
        if (selectedProject?.images) {
            setCurrentImageIndex((prev) =>
                prev === 0 ? selectedProject.images!.length - 1 : prev - 1
            );
        }
    };

    return (
        <section
            id="projects"
            className="bg-neutral-900 text-neutral-100 py-20 px-6 border-t border-neutral-800"
        >
            <h2 className="text-3xl font-bold mb-4 text-center">Proyectos destacados</h2>
            <div className="flex flex-col md:flex-row flex-wrap gap-8 mx-auto justify-center pt-2">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="cursor-pointer bg-neutral-800 rounded-xl p-6 border border-neutral-700 shadow hover:border-sky-400 transition w-full md:w-1/4 flex flex-col"
                        onClick={() => openModal(project)}
                    >
                        {project.image ? (
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-40 object-contain p-3 rounded mb-4 bg-neutral-200"
                            />
                        ) : (
                            <div className="w-full h-40 bg-neutral-700 rounded mb-4 flex items-center justify-center">
                                <span className="text-neutral-500">Sin imagen disponible</span>
                            </div>
                        )}
                        <h3 className="text-xl font-semibold mb-2">
                            {project.title}
                        </h3>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-3">
                            {project.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="bg-neutral-800 px-4 py-1 rounded-full text-xs font-semibold text-neutral-300 border border-neutral-700 whitespace-nowrap flex items-center"
                                >
                                    {techIcons[tech]}
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <p className="text-neutral-400 mb-2 line-clamp-3">
                            {project.description}
                        </p>

                        <div className="flex mt-auto justify-center gap-8 text-neutral-300 text-2xl py-2">
                            {project.url ? (
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-neutral-400 hover:text-sky-400 transition hover:scale-110"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <FaGlobe />
                                </a>
                            ) : (
                                <span className="text-neutral-700 cursor-not-allowed opacity-50">
                                    <FaGlobe />
                                </span>
                            )}
                            {project.github ? (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-neutral-400 hover:text-sky-400 transition hover:scale-110"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <FaGithub />
                                </a>
                            ) : (
                                <span className="text-neutral-700 cursor-not-allowed opacity-50">
                                    <FaGithub />
                                </span>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedProject && (
                <div
                    className="fixed inset-0 flex items-center justify-center z-50 p-4"
                    style={{ backgroundColor: '#171717' }}
                    onClick={closeModal}
                >
                    <div
                        className="bg-neutral-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative">
                            <button
                                onClick={closeModal}
                                className="absolute top-8 right-8 text-neutral-400 hover:text-white z-10 cursor-pointer"
                            >
                                <FaTimes size={24} />
                            </button>

                            <div className="p-6">
                                {/* Image carousel */}
                                <div className="relative mb-6">
                                    {selectedProject.images && selectedProject.images.length > 0 ? (
                                        <>
                                            <img
                                                src={selectedProject.images[currentImageIndex]}
                                                alt={selectedProject.title}
                                                className="w-full h-full md:h-96 object-contain rounded-lg"
                                            />

                                            {selectedProject.images.length > 1 && (
                                                <>
                                                    <button
                                                        onClick={prevImage}
                                                        className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-neutral-900 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition cursor-pointer"
                                                    >
                                                        <FaChevronLeft />
                                                    </button>
                                                    <button
                                                        onClick={nextImage}
                                                        className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-neutral-900 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition cursor-pointer"
                                                    >
                                                        <FaChevronRight />
                                                    </button>

                                                    {/* Image indicators */}
                                                    <div className="flex justify-center mt-4 gap-2">
                                                        {selectedProject.images.map((_, index) => (
                                                            <button
                                                                key={index}
                                                                onClick={() => setCurrentImageIndex(index)}
                                                                className={`w-2 h-2 rounded-full transition ${index === currentImageIndex
                                                                    ? 'bg-sky-400'
                                                                    : 'bg-neutral-600 hover:bg-neutral-500'
                                                                    }`}
                                                            />
                                                        ))}
                                                    </div>
                                                </>
                                            )}
                                        </>
                                    ) : (
                                        <div className="w-full h-64 md:h-96 bg-neutral-700 rounded-lg flex items-center justify-center">
                                            <span className="text-neutral-500">Sin imagen disponible</span>
                                        </div>
                                    )}
                                </div>

                                {/* Project info */}
                                <h3 className="text-2xl md:text-3xl font-bold mb-4">{selectedProject.title}</h3>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-3 mb-6">
                                    {selectedProject.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="bg-neutral-800 px-6 py-2 rounded-full text-base font-semibold text-neutral-300 border border-neutral-700 whitespace-nowrap flex items-center"
                                        >
                                            {techIcons[tech]}
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <p className="text-neutral-300 mb-6 text-lg leading-relaxed">
                                    {selectedProject.description}
                                </p>

                                {/* Links */}
                                <div className="flex justify-center gap-8 text-3xl">
                                    {selectedProject.url ? (
                                        <a
                                            href={selectedProject.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-neutral-400 hover:text-sky-400 transition hover:scale-110"
                                        >
                                            <FaGlobe />
                                        </a>
                                    ) : (
                                        <span className="text-neutral-700 cursor-not-allowed opacity-50">
                                            <FaGlobe />
                                        </span>
                                    )}
                                    {selectedProject.github ? (
                                        <a
                                            href={selectedProject.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-neutral-400 hover:text-sky-400 transition hover:scale-110"
                                        >
                                            <FaGithub />
                                        </a>
                                    ) : (
                                        <span className="text-neutral-700 cursor-not-allowed opacity-50">
                                            <FaGithub />
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
