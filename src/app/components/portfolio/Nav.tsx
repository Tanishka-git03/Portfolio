import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(`#${e.target.id}`); });
      },
      { threshold: 0.4 }
    );
    links.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      style={{
        background: scrolled ? "rgba(2,2,8,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(139,92,246,0.18)" : "none",
        transition: "all 0.35s ease",
        position: "fixed",
        top: 0,
        insetInline: 0,
        zIndex: 100,
      }}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <motion.button
          onClick={() => scrollTo("#about")}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "10px" }}
        >
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 16px rgba(139,92,246,0.5)",
            }}
          >
            <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "0.85rem", color: "#fff" }}>TJ</span>
          </div>
          <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.8rem", color: "#475569", fontWeight: 600 }}>/ portfolio</span>
        </motion.button>

        {/* Desktop */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center gap-1"
        >
          {links.map(({ href, label }) => (
            <button
              key={href}
              onClick={() => scrollTo(href)}
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "0.84rem",
                fontWeight: 600,
                padding: "6px 14px",
                borderRadius: "8px",
                color: active === href ? "#c084fc" : "#64748b",
                background: active === href ? "rgba(192,132,252,0.1)" : "transparent",
                border: active === href ? "1px solid rgba(192,132,252,0.28)" : "1px solid transparent",
                transition: "all 0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                if (active !== href) {
                  (e.target as HTMLElement).style.color = "#e2e8f0";
                  (e.target as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                }
              }}
              onMouseLeave={(e) => {
                if (active !== href) {
                  (e.target as HTMLElement).style.color = "#64748b";
                  (e.target as HTMLElement).style.background = "transparent";
                }
              }}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contact")}
            style={{
              marginLeft: "10px",
              padding: "8px 20px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
              color: "#fff",
              fontFamily: "'Manrope', sans-serif",
              fontSize: "0.84rem",
              fontWeight: 700,
              cursor: "pointer",
              border: "none",
              boxShadow: "0 0 18px rgba(139,92,246,0.4)",
              transition: "box-shadow 0.2s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(139,92,246,0.65)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 18px rgba(139,92,246,0.4)"; }}
          >
            Hire me
          </button>
        </motion.div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden"
          style={{ color: "#c084fc", padding: "4px", background: "none", border: "none", cursor: "pointer" }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{ background: "rgba(2,2,8,0.97)", borderBottom: "1px solid rgba(139,92,246,0.18)", overflow: "hidden" }}
          >
            <div className="px-5 py-4 flex flex-col gap-2">
              {links.map(({ href, label }) => (
                <button
                  key={href}
                  onClick={() => scrollTo(href)}
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    textAlign: "left",
                    padding: "10px 14px",
                    borderRadius: "10px",
                    color: active === href ? "#c084fc" : "#64748b",
                    background: active === href ? "rgba(192,132,252,0.08)" : "transparent",
                    cursor: "pointer",
                    border: "none",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
