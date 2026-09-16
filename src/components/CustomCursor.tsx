import { useEffect, useState } from "react";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHover(!!target.closest("a, button"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-white mix-blend-difference transition-transform duration-150 ease-out"
      style={{
        width: hover ? 48 : 20,
        height: hover ? 48 : 20,
        transform: `translate(${pos.x - (hover ? 24 : 10)}px, ${pos.y - (hover ? 24 : 10)}px)`,
      }}
    />
  );
}