import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaChevronDown } from "react-icons/fa";

function changeName(names: string[]) {
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
}

const names = [
    "Fullstack Developer",
    "Problem Solver",
    "Bug Hunter",
    "Late Night Debugger",
    "Builder of Things",
    "Innovator",
    "Programmer",
    "Designer"
];

export default function Hero() {
    const [showName, setShowName] = useState(false);
    const [randomName, setRandomName] = useState(changeName(names));
    const [contador, setContador] = useState(0);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        if (!showName) {
            intervalRef.current = setInterval(() => {
                setRandomName(changeName(names));
                setContador((prev) => prev + 1);
            }, 1500);
        }
        // if (contador >= 8) {
        //     setShowName(true);
        //     if (intervalRef.current) clearInterval(intervalRef.current);
        // }
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [showName, contador]);

    const handleMouseEnter = () => {
        setShowName(true);
        if (intervalRef.current) clearInterval(intervalRef.current);
    };

    const handleMouseLeave = () => {
        setShowName(false);
        setContador(0);
    };

    return (
        <section
            id="hero"
            className="w-full h-screen min-h-[60vh] flex flex-col justify-center items-center text-center bg-neutral-900 text-neutral-100 relative overflow-hidden"
        >
            {/* Background decorative elements - Simplified */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-sky-500/10 rounded-full blur-[150px]"
                />
            </div>

            <div className="relative z-10 space-y-8 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
                        Hola, soy{" "}
                        <span
                            className="text-sky-400 cursor-pointer inline-block"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <AnimatePresence mode="wait">
                                {!showName ? (
                                    <motion.span
                                        key={randomName}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {randomName}
                                    </motion.span>
                                ) : (
                                    <motion.span
                                        key="Kevin García"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        Kevin García
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-xl md:text-2xl max-w-2xl text-neutral-400 px-6 leading-relaxed"
                >
                    Desarrollador Full Stack apasionado por crear experiencias digitales innovadoras, escalables y visualmente impactantes.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-row text-neutral-400 gap-8 pt-8"
                >
                    <a
                        href="https://www.linkedin.com/in/kevin-r-garc%C3%ADa-hern%C3%A1ndez-5859b6173/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-neutral-800/50 rounded-2xl border border-neutral-700 hover:border-sky-400 hover:text-sky-400 transition-all hover:-translate-y-1 shadow-lg"
                    >
                        <FaLinkedin size={24} />
                    </a>
                    <a
                        href="https://github.com/DarKev03"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-neutral-800/50 rounded-2xl border border-neutral-700 hover:border-white hover:text-white transition-all hover:-translate-y-1 shadow-lg"
                    >
                        <FaGithub size={24} />
                    </a>
                    <a
                        href="https://www.instagram.com/_kev.0_/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-neutral-800/50 rounded-2xl border border-neutral-700 hover:border-sky-500 hover:text-sky-500 transition-all hover:-translate-y-1 shadow-lg"
                    >
                        <FaInstagram size={24} />
                    </a>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-500"
            >
                <span className="text-xs uppercase tracking-[0.2em]">Desliza</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <FaChevronDown />
                </motion.div>
            </motion.div>
        </section>
    );
}
