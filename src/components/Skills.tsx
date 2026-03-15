import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaDocker } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiVite, SiNextdotjs, SiFlutter, SiMysql, SiDotnet, SiFirebase, SiSpringboot, SiSupabase } from "react-icons/si";
import { TbApi, TbPalette } from "react-icons/tb";
import { MdOutlineGroupWork } from "react-icons/md";
import type { ReactElement } from "react";

const skillIcons: { [key: string]: ReactElement } = {
    'React': <FaReact />,
    'TypeScript': <SiTypescript />,
    'Tailwind': <SiTailwindcss />,
    'Node.js': <FaNodeJs />,
    'Vite': <SiVite />,
    'Next.js': <SiNextdotjs />,
    'Flutter': <SiFlutter />,
    'SQL': <SiMysql />,
    '.NET': <SiDotnet />,
    'Firebase': <SiFirebase />,
    'Spring Boot': <SiSpringboot />,
    'APIs REST': <TbApi />,
    'Git': <FaGitAlt />,
    'Docker': <FaDocker />,
    'Metodologías Ágiles': <MdOutlineGroupWork />,
    'Diseño UI/UX': <TbPalette />,
    'Supabase': <SiSupabase />,
};

const skills = ['React', 'TypeScript', 'Tailwind', 'Node.js', 'Vite', 'Next.js', 'Flutter', 'SQL', '.NET', 'Firebase', 'Spring Boot', 'APIs REST', 'Git', 'Docker', 'Metodologías Ágiles', 'Diseño UI/UX'];

export default function Skills() {
    return (
        <section
            id="skills"
            className="bg-neutral-900 text-neutral-100 py-24 px-6 relative overflow-hidden"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-7xl mx-auto"
            >
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-sky-400 inline-block">
                        Habilidades y Tecnologías
                    </h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
                        Dominio de herramientas modernas para construir productos digitales escalables y de alta calidad.
                    </p>
                </div>

                {/* Marquee - Monochromatic */}
                <div className="relative mb-24">
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-neutral-900 to-transparent z-10" />
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-neutral-900 to-transparent z-10" />
                    
                    <div className="overflow-hidden py-4">
                        <motion.div
                            className="flex gap-8"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 40,
                                ease: "linear",
                            }}
                            style={{ width: "max-content" }}
                        >
                            {[...skills, ...skills].map((skill, idx) => (
                                <div
                                    key={idx}
                                    className="bg-neutral-800/40 backdrop-blur-sm px-8 py-3 rounded-2xl text-base font-bold text-neutral-300 border border-neutral-700/50 whitespace-nowrap flex items-center gap-3 hover:border-sky-500/30 hover:text-white transition-colors cursor-default"
                                >
                                    <span className="text-sky-400 text-xl">{skillIcons[skill]}</span>
                                    {skill}
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Stacks Principales - Monochromatic */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Web Stack */}
                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="bg-neutral-800/30 backdrop-blur-md p-8 rounded-3xl border border-neutral-700/50 shadow-xl"
                    >
                        <div className="w-12 h-12 bg-sky-500/10 rounded-2xl flex items-center justify-center text-sky-400 mb-6 border border-sky-500/20">
                            <TbApi size={24} />
                        </div>
                        <h4 className="text-2xl font-bold mb-6 text-white text-left">Ecosistema Web</h4>
                        <div className="flex flex-wrap gap-3">
                            {['React', 'Spring Boot', 'Supabase', 'TypeScript', 'Tailwind'].map((s) => (
                                <span key={s} className="bg-neutral-900/50 px-4 py-2 rounded-xl text-sm font-semibold text-neutral-400 border border-neutral-800 flex items-center gap-2">
                                    <span className="text-sky-400">{skillIcons[s]}</span> {s}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Mobile Stack */}
                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="bg-neutral-800/30 backdrop-blur-md p-8 rounded-3xl border border-neutral-700/50 shadow-xl"
                    >
                        <div className="w-12 h-12 bg-sky-500/10 rounded-2xl flex items-center justify-center text-sky-400 mb-6 border border-sky-500/20">
                            <SiFlutter size={24} />
                        </div>
                        <h4 className="text-2xl font-bold mb-6 text-white text-left">Soluciones Móviles</h4>
                        <div className="flex flex-wrap gap-3">
                            {['Flutter', 'Spring Boot', 'Supabase', 'Firebase', 'APIs REST'].map((s) => (
                                <span key={s} className="bg-neutral-900/50 px-4 py-2 rounded-xl text-sm font-semibold text-neutral-400 border border-neutral-800 flex items-center gap-2">
                                    <span className="text-sky-400">{skillIcons[s]}</span> {s}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
