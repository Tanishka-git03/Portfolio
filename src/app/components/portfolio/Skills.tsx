import { motion } from "motion/react";

interface Skill {
  name: string;
  emoji: string;
}

interface SkillGroup {
  category: string;
  tagline: string;
  color: string;
  glow: string;
  bg: string;
  skills: Skill[];
}

const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    tagline: "Code I write",
    color: "#c084fc",
    glow: "rgba(192,132,252,0.3)",
    bg: "rgba(139,92,246,0.08)",
    skills: [
      { name: "Python", emoji: "🐍" },
      { name: "Java", emoji: "☕" },
    ],
  },
  {
    category: "AI & Data Libraries",
    tagline: "My AI toolkit",
    color: "#f472b6",
    glow: "rgba(244,114,182,0.3)",
    bg: "rgba(236,72,153,0.08)",
    skills: [
      { name: "NumPy", emoji: "🔢" },
      { name: "Pandas", emoji: "🐼" },
      { name: "Matplotlib", emoji: "📊" },
      { name: "Seaborn", emoji: "🎨" },
      { name: "Scikit learn", emoji: "🗳️" },
      { name: "Langchain", emoji: "⛓️‍💥" },
    ],
  },
  {
    category: "Tools & Platforms",
    tagline: "I build with these",
    color: "#34d399",
    glow: "rgba(52,211,153,0.3)",
    bg: "rgba(52,211,153,0.07)",
    skills: [
      { name: "Power BI", emoji: "⚡" },
      { name: "Jupyter", emoji: "📓" },
      { name: "Git", emoji: "🌿" },
      { name: "Google Colab", emoji: "👁️" },
      { name: "Gemini API", emoji: "✨" },
      { name: "Hugging Face", emoji: "💍" },
      { name: "Open AI", emoji: "🔮" },
    ],
  },
  {
    category: "Soft Skills",
    tagline: "How I show up",
    color: "#fbbf24",
    glow: "rgba(251,191,36,0.3)",
    bg: "rgba(245,158,11,0.07)",
    skills: [
      { name: "Leadership", emoji: "🚀" },
      { name: "Collaboration", emoji: "🤝" },
      { name: "Communication", emoji: "💬" },
      { name: "Project Mgmt", emoji: "📋" },
    ],
  },
];

function SkillChip({ name, emoji, color, glow, delay }: { name: string; emoji: string; color: string; glow: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{
        scale: 1.08,
        y: -4,
        boxShadow: `0 8px 30px ${glow}`,
        borderColor: color,
        transition: { duration: 0.2 },
      }}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "10px 18px",
        borderRadius: "12px",
        border: `1px solid ${color}35`,
        background: `${color}0d`,
        cursor: "default",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Shimmer sweep */}
      <motion.div
        initial={{ x: "-100%" }}
        whileHover={{ x: "200%" }}
        transition={{ duration: 0.5 }}
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(90deg, transparent, ${color}18, transparent)`,
          pointerEvents: "none",
        }}
      />
      <span style={{ fontSize: "1.05rem", lineHeight: 1 }}>{emoji}</span>
      <span
        style={{
          fontFamily: "'Manrope', sans-serif",
          fontSize: "0.88rem",
          fontWeight: 700,
          color: "#e2e8f0",
          whiteSpace: "nowrap",
        }}
      >
        {name}
      </span>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      style={{
        background: "#07070f",
        padding: "110px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient orbs */}
      <div style={{ position: "absolute", top: "15%", right: "-4%", width: "380px", height: "380px", borderRadius: "50%", background: "radial-gradient(circle, rgba(244,114,182,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "10%", left: "-5%", width: "320px", height: "320px", borderRadius: "50%", background: "radial-gradient(circle, rgba(52,211,153,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "72px" }}
        >
          <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700, color: "#34d399", display: "block", marginBottom: "14px" }}>
            ✦ technical expertise
          </span>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#f8fafc" }}>
            Skills & Tools
          </h2>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          {skillGroups.map(({ category, tagline, color, glow, bg, skills }, gi) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: gi % 2 === 0 ? -40 : 40, rotateY: gi % 2 === 0 ? -10 : 10 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: gi * 0.08, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformPerspective: "900px" }}
            >
              <div
                style={{
                  background: bg,
                  border: `1px solid ${color}22`,
                  borderRadius: "24px",
                  padding: "32px 36px",
                  position: "relative",
                  overflow: "hidden",
                  transition: "border-color 0.3s, box-shadow 0.3s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = `${color}45`;
                  el.style.boxShadow = `0 0 40px ${glow.replace("0.3", "0.12")}`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = `${color}22`;
                  el.style.boxShadow = "none";
                }}
              >
                {/* Top gradient bar */}
                <div style={{ position: "absolute", top: 0, insetInline: 0, height: "3px", background: `linear-gradient(90deg, transparent 0%, ${color} 30%, ${color} 70%, transparent 100%)`, opacity: 0.6 }} />

                {/* Right glow orb */}
                <div style={{ position: "absolute", right: "-30px", top: "50%", transform: "translateY(-50%)", width: "180px", height: "180px", borderRadius: "50%", background: `radial-gradient(circle, ${glow.replace("0.3", "0.12")} 0%, transparent 70%)`, pointerEvents: "none" }} />

                <div style={{ display: "flex", alignItems: "baseline", gap: "14px", marginBottom: "24px", flexWrap: "wrap" }}>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.15rem", color }}>
                    {category}
                  </h3>
                  <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.78rem", color: "#475569", fontStyle: "italic" }}>
                    {tagline}
                  </span>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {skills.map(({ name, emoji }, si) => (
                    <SkillChip
                      key={name}
                      name={name}
                      emoji={emoji}
                      color={color}
                      glow={glow}
                      delay={gi * 0.08 + si * 0.06}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extra floating tag cloud */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ marginTop: "48px" }}
        >
          {/* <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.72rem", color: "#334155", textTransform: "uppercase", letterSpacing: "0.14em", fontWeight: 700, marginBottom: "16px" }}>
            Also experienced with
          </p> */}
          {/* <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {["Gemini API", "REST APIs", "MetaMask / NFT", "Web Apps", "ML Pipelines", "Data Preprocessing", "CamScanner Docs", "Excel"].map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                whileHover={{ scale: 1.05, y: -2 }}
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  padding: "6px 16px",
                  borderRadius: "100px",
                  border: "1px solid rgba(139,92,246,0.2)",
                  background: "rgba(139,92,246,0.05)",
                  color: "#a78bfa",
                  cursor: "default",
                  transition: "all 0.2s",
                }}
              >
                {tag}
              </motion.span>
            ))} */}
          {/* </div> */}
        </motion.div>
      </div>
    </section>
  );
}
