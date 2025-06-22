import { motion } from "framer-motion";

export default function Hero() {
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
                Hi, I'm <span className="text-sky-400">Kevin García</span>
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
