import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function changeName(names: string[]) {
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
}

var names = ["Developer", "Creative", "Focused", "Problem Solver", "Innovator", "Tech Enthusiast", "Coder", "Designer"];

export default function Hero() {
    const [showName, setShowName] = useState(false);
    const [randomName, setRandomName] = useState("");

    useEffect(() => {
        setRandomName(changeName(names));
        const timer = setTimeout(() => {
            setShowName(true);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

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
                <span className="text-sky-400">
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
                Full Stack developer having fun crafting clean and efficient solutions.
            </motion.p>
        </section>
    );
}
