import projectsData from "../assets/projects.json";

type Project = {
    id: number;
    title: string;
    description: string;
    image: string;
    url: string;
    github: string;
};

const projects: Project[] = projectsData as Project[];

export default function Projects() {
    return (
        <section
            id="projects"
            className="bg-neutral-900 text-neutral-100 py-20 px-6 border-t border-neutral-800"
        >
            <h2 className="text-3xl font-bold mb-4 text-center">Projects</h2>
            <div className="flex flex-col md:flex-row flex-wrap gap-8 mx-auto justify-center">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="cursor-pointer bg-neutral-800 rounded-xl p-6 border border-neutral-700 shadow hover:border-sky-400 transition w-full md:w-1/4 flex flex-col"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-40 object-cover rounded mb-4 bg-neutral-700"
                        />
                        <h3 className="text-xl font-semibold mb-2">
                            {project.title}
                        </h3>
                        <p className="text-neutral-400 mb-2">
                            {project.description}
                        </p>
                        <div className="flex mt-auto justify-center gap-8 text-sm text-neutral-300">
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sky-400 underline"
                            >
                                Visit
                            </a>
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-neutral-400 underline"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
