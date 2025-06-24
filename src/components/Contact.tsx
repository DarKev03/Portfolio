import { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
    const form = useRef<HTMLFormElement>(null);
    const [sending, setSending] = useState(false);
    const [feedback, setFeedback] = useState<string | null>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!form.current) return;

        setSending(true);
        setFeedback(null);

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                (result) => {
                    setFeedback("¡Message correctly send!");
                    form.current?.reset();
                },
                (error) => {
                    setFeedback("It seems to have failed. Try again");
                }
            )
            .finally(() => setSending(false));
    };

    return (
        <section
            id="contact"
            className="w-screen min-h-screen bg-neutral-900 text-neutral-100 py-20 px-6 border-t border-neutral-800"
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-left">
                    Send your project information
                </h2>
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="flex flex-col gap-4 text-left"
                >
                    <div className="flex gap-4">
                        <input
                            type="text"
                            name="nombre"
                            placeholder="Name"
                            required
                            className="w-full p-3 rounded bg-neutral-800 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-sky-400"
                        />
                        <input
                            type="text"
                            name="apellido"
                            placeholder="Last Name"
                            required
                            className="w-full p-3 rounded bg-neutral-800 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-sky-400"
                        />
                    </div>
                    <input
                        type="text"
                        name="empresa"
                        placeholder="Company (If applicable)"
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
                        placeholder="Body of the message"
                        required
                        rows={5}
                        className="w-full p-3 rounded bg-neutral-800 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-sky-400"
                    />
                    <div className="pt-4 justify-center flex">
                        <button
                            type="submit"
                            className="bg-sky-500 hover:bg-sky-400 text-white font-bold py-3 px-6 rounded transition w-50 cursor-pointer disabled:opacity-50"
                            disabled={sending}
                        >
                            {sending ? "Sending..." : "Send"}
                        </button>
                    </div>
                    {feedback && (
                        <p className={`text-center mt-2 ${feedback.startsWith("¡") ? "text-green-400" : "text-red-400"}`}>
                            {feedback}
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}
