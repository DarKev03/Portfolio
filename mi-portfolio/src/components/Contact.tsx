export default function Contact() {
    return (
        <section
            id="contact"
            className="w-screen min-h-screen bg-neutral-900 text-neutral-100 py-20 px-6 border-t border-neutral-800"
        >            
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-left">
                    Send your project information
                </h2>
                <form className="flex flex-col gap-4 text-left">
                    <div className="flex gap-4">
                        <input
                            type="text"
                            name="nombre"
                            placeholder="Nombre"
                            required
                            className="w-full p-3 rounded bg-neutral-800 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-sky-400"
                        />
                        <input
                            type="text"
                            name="apellido"
                            placeholder="Apellido"
                            required
                            className="w-full p-3 rounded bg-neutral-800 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-sky-400"
                        />
                    </div>
                    <input
                        type="text"
                        name="empresa"
                        placeholder="Nombre de empresa (opcional)"
                        className="w-full p-3 rounded bg-neutral-800 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-sky-400"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        className="w-full p-3 rounded bg-neutral-800 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-sky-400"
                    />
                    <textarea
                        name="mensaje"
                        placeholder="Cuerpo del mensaje"
                        required
                        rows={5}
                        className="w-full p-3 rounded bg-neutral-800 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-sky-400"
                    />
                    <button
                        type="submit"
                        className="bg-sky-500 hover:bg-sky-400 text-white font-bold py-3 px-6 rounded transition w-50 self-center"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </section>
    );
}
