import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function changeName(names: string[]) {
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
}



var names = ["Developer", "Creative", "Focused", "Problem Solver", "Innovative", "Passionate", "Coder"];

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
        if (contador >= 8) {
            setShowName(true);
            if (intervalRef.current) clearInterval(intervalRef.current);
        }
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
            className="w-full h-screen min-h-[60vh] flex flex-col justify-center items-center text-center bg-neutral-900 text-neutral-100"
        >
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2.5 }}
                className="text-4xl md:text-6xl font-bold mb-4"
            >
                Hi, I'm{" "}
                <span className="text-sky-400 cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    {!showName ? (
                        <motion.span
                            key={randomName}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {randomName}
                        </motion.span>
                    ) : (
                        <motion.span
                            key="Kevin García"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            Kevin García
                        </motion.span>
                    )}
                </span>
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2.5, delay: 0.2 }}
                className="text-xl md:text-2xl max-w-xl text-neutral-400"
            >
                Desarrollador Full Stack, me divierto creando soluciones limpias y eficientes.
            </motion.p>
            <div className="flex flex-row text-neutral-400 gap-12 text-2xl max-w-6xl pt-12 w-full justify-center">
                <a
                    href="https://www.linkedin.com/in/kevin-r-garc%C3%ADa-hern%C3%A1ndez-5859b6173/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="hover:text-sky-400 transition hover:scale-110"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://github.com/DarKev03"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="hover:text-sky-400 transition hover:scale-110"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.instagram.com/_kev.0_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="hover:text-sky-400 transition hover:scale-110"
                >
                    <FaInstagram />
                </a>
            </div>
        </section>
    );
}
