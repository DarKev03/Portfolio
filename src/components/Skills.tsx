import { motion } from "framer-motion";

const skills = ['React', 'TypeScript', 'Tailwind', 'Node.js', 'Vite', 'Next.js', 'Flutter', 'SQL', '.NET', 'Firebase', 'GraphQL', 'REST APIs', 'Git', 'Docker', 'Agile Methodologies', 'UI/UX Design'];

export default function Skills() {
    return (
        <section
            id="skills"
            className="bg-neutral-900 text-neutral-100 py-20 px-6 text-center border-t border-neutral-800"
        >
            <h2 className="text-3xl font-bold mb-8">Skills</h2>
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
                            className="bg-neutral-800 px-6 py-2 rounded-full text-base font-semibold text-neutral-300 border border-neutral-700 whitespace-nowrap"
                        >
                            {skill}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
