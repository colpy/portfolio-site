import { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-slate-950/70 backdrop-blur-md border-b border-slate-800" : "bg-transparent"
      }`}
    >
      <div className="max-w-4xl mx-auto flex items-center justify-between px-6 py-4 text-white">
        <span className="font-bold">Diego Colpy</span>
        <div className="flex gap-6 text-sm text-slate-300">
          <a href="#about" className="hover:text-white transition-colors">Sobre mí</a>
          <a href="#projects" className="hover:text-white transition-colors">Proyectos</a>
          <a href="#contact" className="hover:text-white transition-colors">Contacto</a>
        </div>
      </div>
    </nav>
  );
}