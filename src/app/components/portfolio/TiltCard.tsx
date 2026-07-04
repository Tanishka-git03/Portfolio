import { useRef } from "react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export function TiltCard({ children, className = "", intensity = 12 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateX(${(-y * intensity).toFixed(2)}deg) rotateY(${(x * intensity).toFixed(2)}deg) scale3d(1.03, 1.03, 1.03)`;
    const shine = el.querySelector<HTMLElement>(".tilt-shine");
    if (shine) {
      shine.style.background = `radial-gradient(circle at ${(x + 0.5) * 100}% ${(y + 0.5) * 100}%, rgba(168,85,247,0.18) 0%, transparent 60%)`;
    }
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform =
      "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    const shine = el.querySelector<HTMLElement>(".tilt-shine");
    if (shine) shine.style.background = "transparent";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        transition: "transform 0.15s ease",
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
    >
      <div className="tilt-shine absolute inset-0 rounded-[inherit] pointer-events-none z-10 transition-all duration-300" />
      {children}
    </div>
  );
}
