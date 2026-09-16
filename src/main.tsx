import { createRoot } from "react-dom/client";
import { Hero } from "./components/Hero";
import { ScrollReveal } from "./components/ScrollReveal";
import { Features } from "./components/Features";
import { Projects } from "./components/Projects";
import "./index.css";


function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      <h1 className="text-3xl font-bold">Portfolio en construcción</h1>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(<><Hero /><Features /> <Projects /></>);