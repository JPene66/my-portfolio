"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false);

  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Disable on touch devices and if reduced motion is requested
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouch || reducedMotion) {
      setEnabled(false);
      return;
    }

    setEnabled(true);

    const handleMouseMove = (e: MouseEvent) => {
      const heroElement = document.getElementById("hero-container");
      if (!heroElement) return;

      const rect = heroElement.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute -inset-0 z-0 overflow-hidden"
    >
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="absolute w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(27,160,152,0.14)_0%,rgba(59,74,140,0.08)_40%,transparent_70%)] blur-2xl transition-opacity duration-500"
      />
    </motion.div>
  );
}
