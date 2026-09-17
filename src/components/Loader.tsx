import { useEffect, useState } from "react";

export function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1200);
    return () => clearTimeout(t);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[10000] bg-slate-950 flex items-center justify-center transition-opacity duration-500">
      <span className="text-white text-2xl font-bold animate-pulse">DC</span>
    </div>
  );
}