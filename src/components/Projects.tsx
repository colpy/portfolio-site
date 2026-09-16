import { ScrollReveal } from "./ScrollReveal";
import { TiltCard } from "./TiltCard";

const projects = [
  {
    name: "UI Kit",
    desc: "Librería de componentes React + TypeScript, open source.",
    url: "https://github.com/colpy/componet_colpy",
    demo: "https://componet-colpy.vercel.app",
  },
  {
    name: "Portfolio Site",
    desc: "Este mismo sitio: React, TypeScript, Tailwind y animaciones.",
    url: "https://github.com/colpy/portfolio-site",
  },
];

export function Projects() {
  return (
    <section className="bg-slate-900 text-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Proyectos</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (

            <ScrollReveal key={p.name}>
  <TiltCard className="bg-slate-900 rounded-xl p-6 border border-slate-800">
    <h3 className="text-xl font-bold mb-2">{p.name}</h3>
    <p className="text-slate-400">{p.desc}</p>

  </TiltCard>
</ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}