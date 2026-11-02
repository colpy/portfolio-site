import { useState, FormEvent } from "react";

const EMAIL = "diego.colpy@gmail.com";
const env = (import.meta as any).env;

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Campo trampa anti-spam: los bots lo llenan, las personas no lo ven
    if (data.get("website")) return;

    setStatus("sending");
    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: env.VITE_EMAILJS_SERVICE_ID,
          template_id: env.VITE_EMAILJS_TEMPLATE_ID,
          user_id: env.VITE_EMAILJS_PUBLIC_KEY,
          template_params: {
            from_name: data.get("name"),
            reply_to: data.get("email"),
            message: data.get("message"),
          },
        }),
      });
      if (!res.ok) throw new Error("Envío fallido");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  const field =
    "w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors";

  return (
    <section id="contact" className="bg-slate-950 text-white py-24 px-6">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contacto</h2>
        <p className="text-slate-400 mb-8">¿Tienes un proyecto en mente? Cuéntame y te respondo a la brevedad.</p>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <input name="name" type="text" required placeholder="Tu nombre" className={field} />
          <input name="email" type="email" required placeholder="Tu correo" className={field} />
          <textarea name="message" required rows={5} placeholder="Cuéntame sobre tu proyecto" className={field} />
          <input name="website" type="text" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-60 transition-colors px-8 py-3 rounded-full font-semibold"
          >
            {status === "sending" ? "Enviando..." : "Enviar mensaje"}
          </button>

          {status === "sent" && <p className="text-green-400 text-sm text-center">¡Mensaje enviado! Te responderé pronto.</p>}
          {status === "error" && (
            <p className="text-red-400 text-sm text-center">No se pudo enviar. Escríbeme directo a {EMAIL}.</p>
          )}
        </form>

        <button onClick={handleCopy} className="mt-8 text-sm text-slate-400 hover:text-white transition-colors">
          {copied ? "¡Copiado!" : `o copia mi correo: ${EMAIL}`}
        </button>
      </div>
    </section>
  );
}