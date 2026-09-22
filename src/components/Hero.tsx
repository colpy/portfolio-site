import { useEffect, useRef } from "react";

export function Hero() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(59,130,246,0.25), transparent 70%)`;
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-950 text-white text-center px-6">
      <div ref={glowRef} className="absolute inset-0 -z-10 transition-all duration-200" />

      <h1 className="text-5xl md:text-7xl font-extrabold mb-4 animate-fade-in">
        Diego Colpy
      </h1>
      <p className="text-lg md:text-2xl text-slate-300 max-w-xl animate-fade-in-delay">
        Desarrollador web — React, TypeScript y diseño de interfaces modernas.
      </p>
    </section>
  );
}