import { ScrollReveal } from "./ScrollReveal";
import { TiltCard } from "./TiltCard";

const items = [
  { title: "React + TypeScript", desc: "Interfaces tipadas, mantenibles y escalables." },
  { title: "Componentes propios", desc: "Librería open source: github.com/colpy/componet_colpy" },
  { title: "Animaciones modernas", desc: "Microinteracciones inspiradas en agencias creativas." },
];

export function Features() {
  return (
    <section className="bg-slate-950 text-white py-24 px-6">
      <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-3">
        {items.map((item) => (
          <ScrollReveal key={item.title}>

             <TiltCard className="bg-slate-900 rounded-xl p-6 border border-slate-800">
    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
    <p className="text-slate-400">{item.desc}</p>
  </TiltCard>

          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}