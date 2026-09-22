export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-950 text-white text-center px-6">
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-3xl top-[-100px] left-[-100px] animate-blob" />
        <div className="absolute w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-3xl bottom-[-150px] right-[-100px] animate-blob-slow" />
        <div className="absolute w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-3xl top-1/3 left-1/2 animate-blob-delay" />
      </div>

      <h1 className="text-5xl md:text-7xl font-extrabold mb-4 animate-fade-in">
        Diego Colpy
      </h1>
      <p className="text-lg md:text-2xl text-slate-300 max-w-xl animate-fade-in-delay">
        Desarrollador web — React, TypeScript y diseño de interfaces modernas.
      </p>
    </section>
  );
}