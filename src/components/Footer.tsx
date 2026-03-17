export default function Footer() {
    return (
        <footer className="py-12 px-6 border-t border-neutral-800 bg-neutral-900 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />

            <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
                <p className="text-neutral-500 text-sm">
                    © {new Date().getFullYear()} <span className="text-neutral-300 font-bold">Kevin García</span>. Ningún derecho reservado.
                </p>
                <p className="text-neutral-600 text-xs">
                    Construido con <span className="text-sky-400">React</span> + <span className="text-sky-400">Framer Motion</span> + <span className="text-sky-400">Tailwind</span>
                </p>
            </div>
        </footer>
    );
}
