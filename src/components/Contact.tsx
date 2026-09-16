import { useState } from "react";

const EMAIL = "diego.colpy@gmail.com";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="bg-slate-950 text-white py-24 px-6">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contacto</h2>
        <p className="text-slate-400 mb-8">¿Quieres trabajar conmigo o colaborar? Escríbeme.</p>
        <button
          onClick={handleCopy}
          className="bg-blue-600 hover:bg-blue-500 transition-colors px-8 py-3 rounded-full font-semibold"
        >
          {copied ? "¡Copiado!" : EMAIL}
        </button>
      </div>
    </section>
  );
}