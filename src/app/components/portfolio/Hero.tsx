import { motion } from "motion/react";
import { Github, Linkedin, Mail, ChevronDown, Download, Cpu, Brain } from "lucide-react";
import { ParticleCanvas } from "./ParticleCanvas";
import profileImg from "../../../imports/profile.jpeg.jpeg";
import resumePdf from "../../../imports/Tanishka_Jain_Resume_new.pdf";

const floatingBadges = [
  { icon: Brain, label: "AI & ML", delay: 0.9, top: "8%", left: "8%" },
  { icon: Cpu, label: "Python", delay: 1.1, top: "80%", left: "5%" },
];

export function Hero() {
  const scrollDown = () =>
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(ellipse 90% 70% at 60% -5%, rgba(139,92,246,0.22) 0%, transparent 65%), radial-gradient(ellipse 60% 50% at 10% 80%, rgba(236,72,153,0.1) 0%, transparent 60%), #020208",
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <ParticleCanvas />

      {/* Subtle grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(139,92,246,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.035) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: 0,
          insetInline: 0,
          height: "180px",
          background: "linear-gradient(transparent, #020208)",
          pointerEvents: "none",
        }}
      />

      <div
        className="max-w-7xl mx-auto px-5 sm:px-8 w-full"
        style={{ paddingTop: "90px", paddingBottom: "60px", position: "relative", zIndex: 10 }}
      >
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* ── Left: Text ── */}
          <div>
            {/* Availability pill */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 16px",
                borderRadius: "100px",
                border: "1px solid rgba(196,132,252,0.4)",
                background: "rgba(139,92,246,0.1)",
                marginBottom: "28px",
              }}
            >
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "#34d399",
                  boxShadow: "0 0 10px #34d399",
                  display: "inline-block",
                  animation: "pulse-dot 2s infinite",
                }}
              />
              <span
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: "#c084fc",
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                }}
              >
                AI Enthusiast & Developer
              </span>
            </motion.div>

            {/* Name */}
            <div style={{ overflow: "hidden", marginBottom: "6px" }}>
              <motion.h1
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "clamp(2rem, 5vw, 3.2rem)",
                  fontWeight: 800,
                  lineHeight: 1.0,
                  background:
                    "linear-gradient(135deg, #f8fafc 0%, #c084fc 45%, #f472b6 80%, #fb923c 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                TANISHKA
              </motion.h1>
            </div>
            <div style={{ overflow: "hidden", marginBottom: "24px" }}>
              <motion.h1
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "clamp(2rem, 4.8vw, 3.2rem)",
                  fontWeight: 800,
                  lineHeight: 1.0,
                  color: "#f8fafc",
                }}
              >
                JAIN
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "1.05rem",
                color: "#94a3b8",
                lineHeight: 1.8,
                maxWidth: "480px",
                marginBottom: "36px",
              }}
            >
              Focused on building{" "}
              <span style={{ color: "#c084fc", fontWeight: 700 }}>automation solutions</span> using
              modern AI tools. B-Tech student from CSE{" "}
              <span style={{ color: "#f472b6", fontWeight: 700 }}>AI & ML.</span> Proactive and fast learner with strong collaboration and leadership skills.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "44px" }}
            >
              <a
                href="mailto:tanishkajain0311@gmail.com"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "13px 26px",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
                  color: "#fff",
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  boxShadow: "0 0 28px rgba(139,92,246,0.45)",
                  transition: "all 0.25s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = "0 0 48px rgba(139,92,246,0.7)";
                  el.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = "0 0 28px rgba(139,92,246,0.45)";
                  el.style.transform = "translateY(0)";
                }}
              >
                <Mail size={15} /> Get in touch
              </a>

              <a
                href={resumePdf}
                download="Tanishka_Jain_Resume.pdf"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "13px 24px",
                  borderRadius: "12px",
                  border: "1px solid rgba(52,211,153,0.5)",
                  background: "rgba(52,211,153,0.08)",
                  color: "#34d399",
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  transition: "all 0.25s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "rgba(52,211,153,0.16)";
                  el.style.borderColor = "rgba(52,211,153,0.8)";
                  el.style.boxShadow = "0 0 20px rgba(52,211,153,0.25)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "rgba(52,211,153,0.08)";
                  el.style.borderColor = "rgba(52,211,153,0.5)";
                  el.style.boxShadow = "none";
                }}
              >
                <Download size={15} /> Download Resume
              </a>

              <a
                href="https://github.com/Tanishka-git03"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "13px 22px",
                  borderRadius: "12px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.04)",
                  color: "#94a3b8",
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  transition: "all 0.25s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(255,255,255,0.25)";
                  el.style.color = "#f8fafc";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(255,255,255,0.1)";
                  el.style.color = "#94a3b8";
                }}
              >
                <Github size={15} /> GitHub
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              style={{ display: "flex", gap: "28px" }}
            >
              {[
                { val: "8.9", label: "SGPA" },
                { val: "4+", label: "Projects" },
                { val: "3+", label: "Certs" },
              ].map(({ val, label }) => (
                <div key={label}>
                  <div
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "1.8rem",
                      fontWeight: 800,
                      background: "linear-gradient(135deg, #c084fc, #f472b6)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {val}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: "0.7rem",
                      color: "#64748b",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      fontWeight: 600,
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Large Photo ── */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotateY: 20 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              transformPerspective: "1000px",
            }}
          >
            {/* Decorative glow blob behind photo */}
            <div
              style={{
                position: "absolute",
                inset: "-20px",
                background:
                  "radial-gradient(ellipse 80% 90% at 50% 50%, rgba(139,92,246,0.25) 0%, rgba(236,72,153,0.12) 50%, transparent 70%)",
                filter: "blur(30px)",
                pointerEvents: "none",
                borderRadius: "32px",
              }}
            />

            {/* Corner accents */}
            {[
              { top: -6, left: -6, borderTop: "2px solid #8b5cf6", borderLeft: "2px solid #8b5cf6", borderRadius: "12px 0 0 0" },
              { top: -6, right: -6, borderTop: "2px solid #ec4899", borderRight: "2px solid #ec4899", borderRadius: "0 12px 0 0" },
              { bottom: -6, left: -6, borderBottom: "2px solid #ec4899", borderLeft: "2px solid #ec4899", borderRadius: "0 0 0 12px" },
              { bottom: -6, right: -6, borderBottom: "2px solid #8b5cf6", borderRight: "2px solid #8b5cf6", borderRadius: "0 0 12px 0" },
            ].map((s, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  width: "36px",
                  height: "36px",
                  ...s,
                  zIndex: 20,
                }}
              />
            ))}

            {/* Photo frame */}
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "460px",
                borderRadius: "24px",
                overflow: "hidden",
                border: "1px solid rgba(139,92,246,0.3)",
                boxShadow:
                  "0 0 0 1px rgba(139,92,246,0.1), 0 30px 80px rgba(0,0,0,0.6), 0 0 60px rgba(139,92,246,0.2)",
              }}
            >
              <img
                src={profileImg}
                alt="Tanishka Jain"
                style={{
                  width: "100%",
                  display: "block",
                  objectFit: "cover",
                  objectPosition: "center top",
                  maxHeight: "580px",
                  minHeight: "400px",
                }}
              />
              {/* Bottom gradient fade */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  insetInline: 0,
                  height: "120px",
                  background:
                    "linear-gradient(transparent, rgba(2,2,8,0.85))",
                  pointerEvents: "none",
                }}
              />
              {/* Name tag on photo */}
              <div
                style={{
                  position: "absolute",
                  bottom: "18px",
                  left: "18px",
                  right: "18px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 800,
                      fontSize: "1rem",
                      color: "#f8fafc",
                    }}
                  >
                    Tanishka Jain
                  </p>
                  <p
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: "0.75rem",
                      color: "#c084fc",
                      fontWeight: 600,
                    }}
                  >
                    AI & ML Engineer
                  </p>
                </div>
                <a
                  href="https://www.linkedin.com/in/tanishka-jain03"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: "6px 14px",
                    borderRadius: "8px",
                    background: "rgba(139,92,246,0.3)",
                    border: "1px solid rgba(139,92,246,0.5)",
                    color: "#c084fc",
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    textDecoration: "none",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <Linkedin size={12} style={{ display: "inline", marginRight: "4px", verticalAlign: "middle" }} />
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Floating badges (only 2, no Data Science) */}
            {floatingBadges.map(({ icon: Icon, label, delay, top, left }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay }}
                style={{
                  position: "absolute",
                  top,
                  left,
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "7px 14px",
                  borderRadius: "10px",
                  background: "rgba(10,10,22,0.88)",
                  border: "1px solid rgba(196,132,252,0.35)",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 4px 20px rgba(139,92,246,0.2)",
                  animation: `float-badge 3s ease-in-out infinite alternate`,
                }}
              >
                <Icon size={13} style={{ color: "#c084fc" }} />
                <span
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: "0.73rem",
                    fontWeight: 700,
                    color: "#e2e8f0",
                    whiteSpace: "nowrap",
                  }}
                >
                  {label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          onClick={scrollDown}
          style={{
            position: "absolute",
            bottom: -10,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4px",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#475569",
          }}
        >
          <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            Explore
          </span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown size={18} />
          </motion.div>
        </motion.button>
      </div>

      <style>{`
        @keyframes pulse-dot { 0%,100%{opacity:1;box-shadow:0 0 10px #34d399;} 50%{opacity:0.5;box-shadow:0 0 4px #34d399;} }
        @keyframes float-badge { from{transform:translateY(0);} to{transform:translateY(-7px);} }
      `}</style>
    </section>
  );
}
