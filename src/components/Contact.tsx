import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

const contacts = [
    {
        label: "Email",
        value: "kevingarciah03@gmail.com",
        href: "mailto:kevingarciah03@gmail.com",
        icon: <FaEnvelope />,
    },
    {
        label: "LinkedIn",
        value: "Kevin R. García",
        href: "https://www.linkedin.com/in/kevin-r-garc%C3%ADa-hern%C3%A1ndez-5859b6173/",
        icon: <FaLinkedin />,
    },    
    {
        label: "Instagram",
        value: "_kev.0_",
        href: "https://www.instagram.com/_kev.0_/",
        icon: <FaInstagram />,
    },
];

export default function Contact() {
    return (
        <section id="contact" className="bg-neutral-900 py-28 px-6 relative overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-neutral-900 to-transparent pointer-events-none z-20" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-neutral-900 to-transparent pointer-events-none z-20" />

            <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-sky-400">¿Nos ponemos en contacto?</h2>
                    <p className="text-neutral-400 text-lg">
                        Puedes escribirme por correo o conectar conmigo en redes. Pasa con el cursor por aquí.
                    </p>
                </motion.div>
            </div>

            <div className="relative">
                <div className="overflow-hidden py-10">
                    <motion.div
                        className="flex gap-6"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear",
                        }}
                        style={{ width: "max-content" }}
                    >
                        {[...contacts, ...contacts, ...contacts, ...contacts].map((contact, idx) => (
                            <a
                                key={idx}
                                href={contact.href}
                                target={contact.href.startsWith("http") ? "_blank" : undefined}
                                rel="noopener noreferrer"
                                className="group flex flex-col items-center gap-4 bg-neutral-800/40 backdrop-blur-sm px-16 py-10 rounded-3xl border border-neutral-700/50 whitespace-nowrap hover:border-sky-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-500/10 cursor-pointer"
                            >
                                <div className="w-16 h-16 bg-sky-500/10 rounded-2xl flex items-center justify-center text-sky-400 text-3xl border border-sky-500/20 transition-all duration-300 group-hover:bg-sky-500 group-hover:text-neutral-900">
                                    {contact.icon}
                                </div>
                                <div className="text-center">
                                    <p className="text-neutral-500 text-xs font-bold uppercase tracking-widest mb-1">{contact.label}</p>
                                    <p className="text-lg font-bold text-neutral-200 group-hover:text-sky-400 transition-colors duration-300">{contact.value}</p>
                                </div>
                            </a>
                        ))}
                    </motion.div>
                </div>
            </div>
            
        </section>
    );
}
