import { ScrollReveal } from "./ScrollReveal";

const stack = ["React", "TypeScript", "Tailwind", "Vite", "Node.js", "Git"];

export function About() {
  return (
    <section className="bg-slate-900 text-white py-24 px-6">
      <ScrollReveal>
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-24 h-24 mx-auto rounded-full bg-blue-600 flex items-center justify-center text-2xl font-bold mb-6">
            DC
          </div>
          <h2 className="text-3xl font-bold mb-4">Sobre mí</h2>
          <p className="text-slate-400 mb-8">
            Soy Diego Colpy, desarrollador web enfocado en interfaces modernas
            y performantes. Construyo productos con React y TypeScript,
            y comparto componentes open source para la comunidad.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {stack.map((tech) => (
              <span key={tech} className="bg-slate-800 border border-slate-700 rounded-full px-4 py-1 text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}