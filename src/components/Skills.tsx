import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaDocker } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiVite, SiNextdotjs, SiFlutter, SiMysql, SiDotnet, SiFirebase, SiSpringboot, SiSupabase } from "react-icons/si";
import { TbApi, TbPalette } from "react-icons/tb";
import { MdOutlineGroupWork } from "react-icons/md";
import type { ReactElement } from "react";

const skillIcons: { [key: string]: ReactElement } = {
    'React': <FaReact className="inline mr-1.5" />,
    'TypeScript': <SiTypescript className="inline mr-1.5" />,
    'Tailwind': <SiTailwindcss className="inline mr-1.5" />,
    'Node.js': <FaNodeJs className="inline mr-1.5" />,
    'Vite': <SiVite className="inline mr-1.5" />,
    'Next.js': <SiNextdotjs className="inline mr-1.5" />,
    'Flutter': <SiFlutter className="inline mr-1.5" />,
    'SQL': <SiMysql className="inline mr-1.5" />,
    '.NET': <SiDotnet className="inline mr-1.5" />,
    'Firebase': <SiFirebase className="inline mr-1.5" />,
    'Spring Boot': <SiSpringboot className="inline mr-1.5" />,
    'REST APIs': <TbApi className="inline mr-1.5" />,
    'Git': <FaGitAlt className="inline mr-1.5" />,
    'Docker': <FaDocker className="inline mr-1.5" />,
    'Agile Methodologies': <MdOutlineGroupWork className="inline mr-1.5" />,
    'UI/UX Design': <TbPalette className="inline mr-1.5" />,
    'Supabase': <SiSupabase className="inline mr-1.5" />,
};

const skills = ['React', 'TypeScript', 'Tailwind', 'Node.js', 'Vite', 'Next.js', 'Flutter', 'SQL', '.NET', 'Firebase', 'Spring Boot', 'REST APIs', 'Git', 'Docker', 'Agile Methodologies', 'UI/UX Design'];

export default function Skills() {
    return (
        <section
            id="skills"
            className="bg-neutral-900 text-neutral-100 py-20 px-6 text-center border-t border-neutral-800"
        >
            <h2 className="text-3xl font-bold mb-8">Habilidades</h2>
            <div className="overflow-hidden max-w-6xl mx-auto">
                <motion.div
                    className="flex gap-6"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 60,
                        ease: "linear",
                    }}
                    style={{ width: "max-content" }}
                >
                    {[...skills, ...skills, ...skills].map((skill, idx) => (
                        <span
                            key={idx}
                            className="bg-neutral-800 px-6 py-2 rounded-full text-base font-semibold text-neutral-300 border border-neutral-700 whitespace-nowrap flex items-center"
                        >
                            {skillIcons[skill]}
                            {skill}
                        </span>
                    ))}
                </motion.div>
            </div>

            {/* Stack Principal */}
            <div className="max-w-6xl mx-auto mt-16">
                <div className="flex flex-col md:flex-row gap-15 justify-center">
                    {/* Web Stack */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-sky-400">Web</h4>
                        <div className="flex flex-wrap gap-3 justify-center">
                            <span className="bg-neutral-800 px-2 py-1 md:px-6 md:py-2 rounded-full text-sm md:text-base font-semibold text-neutral-300 border border-neutral-700 whitespace-nowrap flex items-center">
                                {skillIcons['React']}
                                React
                            </span>
                            <span className="bg-neutral-800 px-2 py-1 md:px-6 md:py-2 rounded-full text-sm md:text-base font-semibold text-neutral-300 border border-neutral-700 whitespace-nowrap flex items-center">
                                {skillIcons['Spring Boot']}
                                Spring Boot
                            </span>
                            <span className="bg-neutral-800 px-2 py-1 md:px-6 md:py-2 rounded-full text-sm md:text-base font-semibold text-neutral-300 border border-neutral-700 whitespace-nowrap flex items-center">
                                {skillIcons['Supabase']}
                                Supabase
                            </span>
                        </div>
                    </div>

                    {/* Mobile Stack */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-sky-400">Mobile</h4>
                        <div className="flex flex-wrap gap-3 justify-center">
                            <span className="bg-neutral-800 px-2 py-1 md:px-6 md:py-2 rounded-full text-sm md:text-base font-semibold text-neutral-300 border border-neutral-700 whitespace-nowrap flex items-center">
                                {skillIcons['Flutter']}
                                Flutter
                            </span>
                            <span className="bg-neutral-800 px-2 py-1 md:px-6 md:py-2 rounded-full text-sm md:text-base font-semibold text-neutral-300 border border-neutral-700 whitespace-nowrap flex items-center">
                                {skillIcons['Spring Boot']}
                                Spring Boot
                            </span>
                            <span className="bg-neutral-800 px-2 py-1 md:px-6 md:py-2 rounded-full text-sm md:text-base font-semibold text-neutral-300 border border-neutral-700 whitespace-nowrap flex items-center">
                                {skillIcons['Supabase']}
                                Supabase
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
