"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  pulsePhase: number;
  pulseSpeed: number;
}

interface SignalPulse {
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
  progress: number; // 0 to 1
  speed: number;
  color: string;
}

export default function NeuronNetwork() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Respect reduced motion settings
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Mouse coordinates relative to hero canvas
    const mouse = {
      x: -1000,
      y: -1000,
      active: false,
    };

    let particles: Particle[] = [];
    let signalPulses: SignalPulse[] = [];

    // Colors matching portfolio palette
    const tealColor = "rgba(27, 160, 152, "; // #1BA098
    const indigoColor = "rgba(59, 74, 140, "; // #3B4A8C

    const initParticles = () => {
      dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      // Number of neurons scales with viewport size
      const count = Math.floor((width * height) / 12000);
      particles = [];
      signalPulses = [];

      for (let i = 0; i < Math.min(count, 70); i++) {
        const isTeal = Math.random() > 0.4;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: reducedMotion ? 0 : (Math.random() - 0.5) * 0.6,
          vy: reducedMotion ? 0 : (Math.random() - 0.5) * 0.6,
          radius: Math.random() * 1.5 + 1.5,
          color: isTeal ? tealColor : indigoColor,
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: 0.02 + Math.random() * 0.03,
        });
      }
    };

    const handleResize = () => {
      initParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = mouse.x >= 0 && mouse.x <= width && mouse.y >= 0 && mouse.y <= height;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    canvas.parentElement?.addEventListener("mouseleave", handleMouseLeave);

    initParticles();

    const maxConnectDistance = 140;
    const maxMouseDistance = 180;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Update and draw neurons (nodes)
      particles.forEach((p, i) => {
        if (!reducedMotion) {
          p.x += p.vx;
          p.y += p.vy;

          // Bounce off canvas boundaries
          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;

          p.pulsePhase += p.pulseSpeed;
        }

        // Draw neuron core
        const currentRadius = p.radius + Math.sin(p.pulsePhase) * 0.6;
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(1, currentRadius), 0, Math.PI * 2);
        ctx.fillStyle = p.color + "0.85)";
        ctx.fill();

        // Draw faint glowing aura around neuron
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(1, currentRadius * 2.5), 0, Math.PI * 2);
        ctx.fillStyle = p.color + "0.15)";
        ctx.fill();

        // Check distance to other neurons (synapses)
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectDistance) {
            const alpha = (1 - dist / maxConnectDistance) * 0.25;

            // Draw synaptic connection line
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p.color + alpha + ")";
            ctx.lineWidth = 1;
            ctx.stroke();

            // Randomly trigger an action potential (glowing signal pulse firing between neurons)
            if (!reducedMotion && Math.random() < 0.0015 && signalPulses.length < 25) {
              signalPulses.push({
                fromX: p.x,
                fromY: p.y,
                toX: p2.x,
                toY: p2.y,
                progress: 0,
                speed: 0.015 + Math.random() * 0.02,
                color: Math.random() > 0.3 ? "#1BA098" : "#3B4A8C",
              });
            }
          }
        }

        // Connect neurons to interactive cursor
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxMouseDistance) {
            const alpha = (1 - dist / maxMouseDistance) * 0.45;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(27, 160, 152, ${alpha})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();

            // Trigger mouse signal pulse
            if (!reducedMotion && Math.random() < 0.015 && signalPulses.length < 25) {
              signalPulses.push({
                fromX: p.x,
                fromY: p.y,
                toX: mouse.x,
                toY: mouse.y,
                progress: 0,
                speed: 0.03,
                color: "#1BA098",
              });
            }
          }
        }
      });

      // Update and render active signal pulses (action potentials moving along synapses)
      for (let i = signalPulses.length - 1; i >= 0; i--) {
        const pulse = signalPulses[i];
        pulse.progress += pulse.speed;

        if (pulse.progress >= 1) {
          signalPulses.splice(i, 1);
          continue;
        }

        const currX = pulse.fromX + (pulse.toX - pulse.fromX) * pulse.progress;
        const currY = pulse.fromY + (pulse.toY - pulse.fromY) * pulse.progress;

        // Draw signal pulse particle
        ctx.beginPath();
        ctx.arc(currX, currY, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = pulse.color;
        ctx.shadowColor = pulse.color;
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      canvas.parentElement?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-60 dark:opacity-80 transition-opacity duration-500"
      />
    </div>
  );
}
