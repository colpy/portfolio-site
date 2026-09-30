import { ScrollReveal } from "./ScrollReveal";
import { TiltCard } from "./TiltCard";

const projects = [
  {
    name: "UI Kit",
    desc: "Librería de componentes React + TypeScript, open source.",
    url: "https://componet-colpy.vercel.app",
    image: "/projects/ui-kit.jpg",
  },
  {
    name: "Portfolio Site",
    desc: "Este mismo sitio: React, TypeScript, Tailwind y animaciones.",
    url: "https://github.com/colpy/portfolio-site",
    image: "/projects/portfolio.jpg",
  },  

  {
  name: "Mi sitio administrado",
  desc: "Descripción breve de qué es este sitio.",
  url: "https://dgoestudio.cl/",
  image: "/projects/sitio1.jpg",
},

{
    name: "Javier Pinto Company",
    desc: "Sitio web de la empresa Javier Pinto Company, con información sobre sus servicios y contacto.",
    url: "https://javierpintocompany.com/",
    image: "/projects/pinto.jpg",
  },
];

export function Projects() {
  return (
    <section id="projects" className="bg-slate-900 text-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Proyectos</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <ScrollReveal key={p.name}>
              <TiltCard className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-slate-500">
                <a href={p.url} target="_blank" rel="noreferrer" className="block">
                  <img src={p.image} alt={p.name} className="w-full h-44 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{p.name}</h3>
                    <p className="text-slate-400 mb-3">{p.desc}</p>
                    <span className="text-sm text-blue-400">Ver proyecto →</span>
                  </div>
                </a>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}