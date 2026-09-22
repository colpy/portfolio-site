import { useEffect, useState } from "react";

const slides = [
  "radial-gradient(circle at 30% 30%, #1e3a8a, #0f172a 70%)",
  "radial-gradient(circle at 70% 40%, #581c87, #0f172a 70%)",
  "radial-gradient(circle at 50% 70%, #0e7490, #0f172a 70%)",
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden text-white text-center">
      {slides.map((bg, i) => (
        <div
          key={i}
          className={`absolute inset-0 -z-10 transition-opacity duration-[1500ms] ${
            i === index ? "opacity-100 animate-kenburns" : "opacity-0"
          }`}
          style={{ background: bg }}
        />
      ))}

      <div className="px-6">
        <h1 className="text-6xl md:text-8xl font-extrabold mb-4 tracking-tight">
          Diego Colpy
        </h1>
        <p className="text-lg md:text-2xl text-slate-300 max-w-xl mx-auto">
          Desarrollador web — React, TypeScript y diseño de interfaces modernas.
        </p>
      </div>

      <div className="absolute bottom-8 flex gap-2">
        {slides.map((_, i) => (
          <span key={i} className={`w-2 h-2 rounded-full ${i === index ? "bg-white" : "bg-white/30"}`} />
        ))}
      </div>
    </section>
  );
}