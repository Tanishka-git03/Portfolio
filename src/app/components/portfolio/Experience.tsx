import { motion } from "motion/react";
import { Briefcase, Award, TrendingUp, Users, Database, Star } from "lucide-react";

const highlights = [
  { icon: TrendingUp, text: "Built dashboards that improved reporting speed by 65%", color: "#34d399" },
  { icon: Database, text: "Delivered insights on real client datasets using Power BI, Python & Excel", color: "#c084fc" },
  { icon: Users, text: "Led a team of senior interns to manage data ops & timely delivery", color: "#f472b6" },
  { icon: Star, text: "Worked with business-critical data, received direct mentorship from the CEO", color: "#fbbf24" },
  { icon: Award, text: "Earned Certificate of Completion & Letter of Recommendation for outstanding performance", color: "#34d399" },
];

export function Experience() {
  return (
    <section
      id="experience"
      style={{
        background: "#020208",
        padding: "110px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", bottom: 0, right: "8%", width: "500px", height: "280px", background: "radial-gradient(ellipse, rgba(139,92,246,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "20%", left: "-5%", width: "300px", height: "300px", background: "radial-gradient(circle, rgba(244,114,182,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "64px" }}
        >
          <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700, color: "#fbbf24", display: "block", marginBottom: "14px" }}>
            ✦ work experience
          </span>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#f8fafc" }}>
            Experience
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50, rotateY: -12 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformPerspective: "1100px" }}
        >
          <div
            style={{
              background: "rgba(8,8,18,0.92)",
              border: "1px solid rgba(139,92,246,0.28)",
              borderRadius: "24px",
              padding: "42px",
              position: "relative",
              overflow: "hidden",
              transition: "box-shadow 0.3s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 50px rgba(139,92,246,0.1)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
          >
            {/* Top gradient */}
            <div style={{ position: "absolute", top: 0, insetInline: 0, height: "3px", background: "linear-gradient(90deg, #8b5cf6, #ec4899, #fbbf24)", opacity: 0.8 }} />
            {/* Corner glow */}
            <div style={{ position: "absolute", top: 0, left: 0, width: "250px", height: "200px", background: "radial-gradient(circle at top left, rgba(139,92,246,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />

            {/* Header */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "32px" }}>
              <div style={{ display: "flex", gap: "18px", alignItems: "center" }}>
                <div
                  style={{
                    width: "58px",
                    height: "58px",
                    borderRadius: "16px",
                    background: "linear-gradient(135deg, rgba(139,92,246,0.3), rgba(236,72,153,0.2))",
                    border: "1px solid rgba(192,132,252,0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    boxShadow: "0 0 20px rgba(139,92,246,0.25)",
                  }}
                >
                  <Briefcase size={24} style={{ color: "#c084fc" }} />
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.3rem", color: "#f8fafc", marginBottom: "4px" }}>
                    Data Analytics Intern
                  </h3>
                  <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.95rem", color: "#c084fc", fontWeight: 700 }}>
                    Wyreflow Technologies
                  </span>
                </div>
              </div>

              <div style={{ textAlign: "right" }}>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: "6px", padding: "5px 14px", borderRadius: "100px",
                  background: "rgba(251,191,36,0.1)", border: "1px solid rgba(251,191,36,0.3)", marginBottom: "6px",
                }}>
                  <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.8rem", color: "#fbbf24", fontWeight: 700 }}>Aug – Nov 2025</span>
                </div>
                <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.78rem", color: "#475569", fontWeight: 600 }}>Onsite · Bhopal</div>
              </div>
            </div>

            {/* Highlights */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {highlights.map(({ icon: Icon, text, color }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.09 }}
                  style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}
                >
                  <div style={{
                    width: "32px", height: "32px", borderRadius: "9px",
                    background: `${color}18`, border: `1px solid ${color}30`,
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "1px",
                  }}>
                    <Icon size={14} style={{ color }} />
                  </div>
                  <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.92rem", color: "#94a3b8", lineHeight: 1.7 }}>
                    {text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Tags */}
            <div style={{ marginTop: "32px", paddingTop: "26px", borderTop: "1px solid rgba(139,92,246,0.12)", display: "flex", flexWrap: "wrap", gap: "9px" }}>
              {["Power BI", "Python", "Excel", "Data Analytics", "Team Leadership"].map((tag) => (
                <span key={tag} style={{
                  fontFamily: "'Manrope', sans-serif", fontSize: "0.77rem", fontWeight: 700,
                  padding: "5px 14px", borderRadius: "8px", background: "rgba(139,92,246,0.08)",
                  border: "1px solid rgba(139,92,246,0.22)", color: "#a78bfa",
                }}>{tag}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
