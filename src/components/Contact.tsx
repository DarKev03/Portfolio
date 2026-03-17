import { useState } from "react";
import emailjs from "emailjs-com";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub, FaPaperPlane, FaEnvelope } from "react-icons/fa";

export default function Contact() {
    const [status, setStatus] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            e.currentTarget,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        ).then(
            () => {
                setStatus("¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.");
                setIsSubmitting(false);
                (e.target as HTMLFormElement).reset();
            },
            () => {
                setStatus("Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.");
                setIsSubmitting(false);
            }
        );
    };

    return (
        <section id="contact" className="bg-neutral-900 py-24 px-6 relative overflow-hidden">
            {/* Background decorative element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-3xl mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-sky-400">Hablemos</h2>
                    <p className="text-neutral-400 text-lg">
                        ¿Tienes una idea, un proyecto o simplemente quieres saludar? Mi buzón está siempre abierto.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-neutral-800/30 backdrop-blur-xl border border-neutral-700/50 p-8 md:p-12 rounded-[2.5rem] shadow-2xl"
                >
                    <form onSubmit={sendEmail} className="space-y-6 text-left">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-neutral-500 uppercase tracking-widest px-1">Nombre</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    required
                                    placeholder="Tu nombre"
                                    className="w-full bg-neutral-900/50 border border-neutral-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-sky-500 transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-neutral-500 uppercase tracking-widest px-1">Email</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    required
                                    placeholder="tu@email.com"
                                    className="w-full bg-neutral-900/50 border border-neutral-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-sky-500 transition-all"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-neutral-500 uppercase tracking-widest px-1">Mensaje</label>
                            <textarea
                                name="message"
                                rows={5}
                                required
                                placeholder="¿Cómo puedo ayudarte?"
                                className="w-full bg-neutral-900/50 border border-neutral-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-sky-500 transition-all resize-none"
                            ></textarea>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            disabled={isSubmitting}
                            className={`w-full py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all ${
                                isSubmitting 
                                ? "bg-neutral-700 text-neutral-400" 
                                : "bg-sky-500 hover:bg-sky-400 text-white shadow-lg shadow-sky-500/20"
                            }`}
                        >
                            {isSubmitting ? (
                                "Enviando..."
                            ) : (
                                <>
                                    Enviar Mensaje <FaPaperPlane size={18} />
                                </>
                            )}
                        </motion.button>
                    </form>

                    <AnimatePresence>
                        {status && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className={`mt-6 p-4 rounded-xl text-sm font-medium ${
                                    status.includes("éxito") ? "bg-sky-500/10 text-sky-400 border border-sky-500/20" : "bg-red-500/10 text-red-400 border border-red-500/20"
                                }`}
                            >
                                {status}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                <div className="mt-12 flex justify-center gap-6">
                    <a href="mailto:kevin_garcia@métrica.sl" className="p-4 bg-neutral-800/50 rounded-2xl border border-neutral-700 hover:border-sky-400 hover:text-sky-400 transition-all text-neutral-400">
                        <FaEnvelope size={22} />
                    </a>
                    <a href="https://www.linkedin.com/in/kevin-r-garc%C3%ADa-hern%C3%A1ndez-5859b6173/" target="_blank" rel="noopener noreferrer" className="p-4 bg-neutral-800/50 rounded-2xl border border-neutral-700 hover:border-sky-400 hover:text-sky-400 transition-all text-neutral-400">
                        <FaLinkedin size={22} />
                    </a>
                    <a href="https://github.com/DarKev03" target="_blank" rel="noopener noreferrer" className="p-4 bg-neutral-800/50 rounded-2xl border border-neutral-700 hover:border-sky-400 hover:text-sky-400 transition-all text-neutral-400">
                        <FaGithub size={22} />
                    </a>
                </div>
            </div>
        </section>
    );
}
