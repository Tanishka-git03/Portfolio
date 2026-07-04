import { motion } from "motion/react";
import { Trophy, Leaf, Recycle ,Mail } from "lucide-react";
import { TiltCard } from "./TiltCard";

const projects = [
  {
    id: 1,
    title: "Krishi Kalp",
    subtitle: "AI-Driven Crop Disease Prediction & Management",
    period: "Aug – Sept 2024",
    event: "Smart India Hackathon 2024",
    icon: Leaf,
    accentColor: "#34d399",
    glowColor: "rgba(52,211,153,0.3)",
    borderColor: "rgba(52,211,153,0.35)",
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGZhcm0lMjB0ZWNobm9sb2d5JTIwQUklMjBjcm9wJTIwZmllbGQlMjBhZXN0aGV0aWN8ZW58MXx8fHwxNzgzMTc3MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    bullets: [
      "Led a team for Smart India Hackathon 2024 to develop a robust web app",
      "Crop Disease Detection using Image Recognition via Gemini API",
      "Integrated texts & voice support, weather forecasts, market price analysis",
      "Developed and fine-tuned ML models for prediction accuracy and reliability",
      "Conducted comprehensive data collection and preprocessing with various APIs",
    ],
    tags: ["Python", "Gemini API", "ML Models", "Image Recognition", "REST APIs"],
  },
  {
    id: 2,
     title: "Smart Waste Management",
    subtitle: "AI-Based Cleanliness Detection with Blockchain Rewards",
    period: "April 2025",
    event: "BIST Hackathon",
    icon: Recycle,
    accentColor: "#8b5cf6",
    glowColor: "rgba(139,92,246,0.3)",
    borderColor: "rgba(139,92,246,0.35)",
    image: "https://images.unsplash.com/photo-1760553120312-2821bf54e767?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGNpdHklMjB3YXN0ZSUyMG1hbmFnZW1lbnQlMjBmdXR1cmlzdGljJTIwdGVjaG5vbG9neSUyMGFlc3RoZXRpY3xlbnwxfHx8fDE3ODMxNzcwMDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    bullets: [
      "Built AI-based cleanliness detection model using custom-trained YOLO on user-uploaded images",
      "Created real-time dashboard with city rankings, contributor stats & gamified leaderboards",
      "Integrated NFT reward distribution via MetaMask and automated email recognition",
      "Gained strong hands-on experience at the BIST Hackathon",
    ],
    tags: ["YOLO", "Computer Vision", "Blockchain", "NFT", "MetaMask", "Dashboard"],
  },
  {
    id: 3,
    title: "Email Operational Agent",
    subtitle: "AI-Powered Email Automation & Productivity Assistant",
    period: "March 2026",
    event: "AI Productivity Project",
    icon: Mail,
  accentColor: "#06b6d4",
glowColor: "rgba(6,182,212,0.3)",
borderColor: "rgba(6,182,212,0.35)",
    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    bullets: [
    "Developed an AI Email Operations Agent to automate repetitive email management workflows for professionals and business teams.",
    "Implemented priority email detection, conversation summarization, action item extraction, and personalized response drafting.",
    "Enabled intelligent follow-ups, meeting scheduling, and conversational email search for faster communication.",
    "Reduced email overload by minimizing manual effort and improving productivity through AI-driven automation.",
  ],
  tags: [
    "AI",
    "LLM",
    "Email Automation",
    "NLP",
    "Productivity",
    "Workflow",
  ],
  }
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      style={{
        background: "linear-gradient(180deg, #07070f 0%, #020208 100%)",
        padding: "110px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", top: "40%", left: "40%", transform: "translate(-50%,-50%)", width: "700px", height: "400px", background: "radial-gradient(ellipse, rgba(139,92,246,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "72px" }}
        >
          <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700, color: "#c084fc", display: "block", marginBottom: "14px" }}>
            ✦ selected projects
          </span>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#f8fafc" }}>
            Projects
          </h2>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
          {projects.map((proj, i) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 70, rotateX: -8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformPerspective: "1200px" }}
            >
              <TiltCard intensity={5} className="relative rounded-[24px] overflow-hidden">
                <div
                  style={{
                    background: "rgba(8,8,18,0.97)",
                    border: `1px solid ${proj.borderColor}`,
                    borderRadius: "24px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <div className="grid md:grid-cols-5">
                    {/* ── Image pane ── */}
                    <div style={{ position: "relative", overflow: "hidden", minHeight: "260px" }} className="md:col-span-2">
                      <img
                        src={proj.image}
                        alt={proj.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover", minHeight: "260px", filter: "brightness(0.55) saturate(1.4)" }}
                      />
                      {/* Colour overlay */}
                      <div style={{ position: "absolute", inset: 0, background: `linear-gradient(160deg, ${proj.glowColor.replace("0.3", "0.45")} 0%, rgba(5,5,14,0.7) 100%)` }} />
                      {/* Right edge fade */}
                      <div className="hidden md:block" style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, transparent 50%, rgba(8,8,18,0.97) 100%)" }} />

                      {/* Centred overlay content */}
                      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "14px" }}>
                        <motion.div
                          animate={{ y: [0, -6, 0] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                          style={{
                            width: "80px",
                            height: "80px",
                            borderRadius: "22px",
                            background: "rgba(5,5,14,0.7)",
                            border: `2px solid ${proj.borderColor}`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: `0 0 40px ${proj.glowColor}`,
                            backdropFilter: "blur(8px)",
                          }}
                        >
                          <proj.icon size={36} style={{ color: proj.accentColor }} />
                        </motion.div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "7px",
                            padding: "6px 14px",
                            borderRadius: "100px",
                            background: "rgba(0,0,0,0.55)",
                            border: "1px solid rgba(255,255,255,0.12)",
                            backdropFilter: "blur(8px)",
                          }}
                        >
                          <Trophy size={12} style={{ color: "#fbbf24" }} />
                          <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.72rem", color: "#fbbf24", fontWeight: 700 }}>
                            {proj.event}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* ── Content pane ── */}
                    <div style={{ padding: "36px 36px 36px 28px", position: "relative" }} className="md:col-span-3">
                      {/* Top accent */}
                      <div style={{ position: "absolute", top: 0, insetInline: 0, height: "3px", background: `linear-gradient(90deg, ${proj.accentColor}, transparent)`, opacity: 0.7 }} />

                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "6px" }}>
                        <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.35rem", fontWeight: 800, color: "#f8fafc" }}>
                          {proj.title}
                        </h3>
                        <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.75rem", color: "#475569", fontWeight: 600 }}>
                          {proj.period}
                        </span>
                      </div>
                      <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.88rem", color: proj.accentColor, marginBottom: "22px", fontWeight: 700 }}>
                        {proj.subtitle}
                      </p>

                      <ul style={{ display: "flex", flexDirection: "column", gap: "9px", marginBottom: "26px" }}>
                        {proj.bullets.map((b, bi) => (
                          <li key={bi} style={{ display: "flex", gap: "11px", alignItems: "flex-start" }}>
                            <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: proj.accentColor, flexShrink: 0, marginTop: "8px", boxShadow: `0 0 6px ${proj.glowColor}` }} />
                            <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.87rem", color: "#94a3b8", lineHeight: 1.65 }}>{b}</span>
                          </li>
                        ))}
                      </ul>

                      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                        {proj.tags.map((tag) => (
                          <span
                            key={tag}
                            style={{
                              fontFamily: "'Manrope', sans-serif",
                              fontSize: "0.74rem",
                              fontWeight: 700,
                              padding: "5px 13px",
                              borderRadius: "8px",
                              background: `${proj.glowColor.replace("0.3", "0.1")}`,
                              border: `1px solid ${proj.borderColor.replace("0.35", "0.25")}`,
                              color: proj.accentColor,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
