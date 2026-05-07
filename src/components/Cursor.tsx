import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 350, damping: 28 });
  const sy = useSpring(y, { stiffness: 350, damping: 28 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a,button,[data-cursor]"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y]);

  return (
    <>
      <motion.div
        style={{ translateX: sx, translateY: sy }}
        className="pointer-events-none fixed left-0 top-0 z-[100] -ml-1.5 -mt-1.5 w-3 h-3 rounded-full bg-primary mix-blend-difference hidden md:block"
      />
      <motion.div
        style={{ translateX: x, translateY: y, scale: hover ? 1.6 : 1 }}
        className="pointer-events-none fixed left-0 top-0 z-[99] -ml-5 -mt-5 w-10 h-10 rounded-full border border-primary/60 transition-transform hidden md:block"
      />
    </>
  );
}
