import { motion } from "motion/react";
import { GraduationCap, Award, BookOpen, Shield, Cpu } from "lucide-react";

const education = [
  {
    degree: "B-Tech in CSE",
    spec: "Specialization in Artificial Intelligence & Machine Learning",
    institution: "Oriental College of Technology",
    location: "Bhopal",
    period: "2023 – 2027",
    score: "CGPA: 8.2/10",
    scoreColor: "#c084fc",
    icon: Cpu,
    current: true,
  },
  {
    degree: "Higher Secondary (Grade 12)",
    spec: "",
    institution: "Sardar Patel Public School",
    location: "Bhopal",
    period: "2023",
    score: "67%",
    scoreColor: "#34d399",
    icon: BookOpen,
    current: false,
  },
  {
    degree: "High School (Grade 10)",
    spec: "",
    institution: "St. Mary's Convent Sr. Sec. School",
    location: "Bhopal",
    period: "2021",
    score: "82%",
    scoreColor: "#f472b6",
    icon: GraduationCap,
    current: false,
  },
];

const certifications = [
  { title: "Introduction to Data Science", issuer: "Cisco", icon: Shield, color: "#fbbf24" },
  { title: "Oracle Certified AI Foundations Associate", issuer: "Oracle", icon: Award, color: "#c084fc" },
  { title: "Introduction to Modern AI", issuer: "Cisco", icon: Cpu, color: "#34d399" },
];

export function Education() {
  return (
    <section
      id="education"
      style={{
        background: "linear-gradient(180deg, #020208 0%, #07070f 100%)",
        padding: "110px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", top: "30%", left: "-4%", width: "350px", height: "350px", borderRadius: "50%", background: "radial-gradient(circle, rgba(192,132,252,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "64px" }}
        >
          <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700, color: "#34d399", display: "block", marginBottom: "14px" }}>
            ✦ education & certifications
          </span>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#f8fafc" }}>
            Education
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Timeline */}
          <div className="lg:col-span-3">
            <div style={{ position: "relative", paddingLeft: "36px" }}>
              <div style={{ position: "absolute", left: "10px", top: "14px", bottom: "14px", width: "2px", background: "linear-gradient(180deg, #8b5cf6, rgba(139,92,246,0.08))" }} />
              {education.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  style={{ marginBottom: i < education.length - 1 ? "28px" : 0, position: "relative" }}
                >
                  <div style={{
                    position: "absolute", left: "-31px", top: "16px",
                    width: "13px", height: "13px", borderRadius: "50%",
                    background: edu.current ? edu.scoreColor : "#1e293b",
                    border: `2px solid ${edu.current ? edu.scoreColor : "#334155"}`,
                    boxShadow: edu.current ? `0 0 14px ${edu.scoreColor}88` : "none",
                  }} />
                  <div
                    style={{
                      background: "rgba(8,8,18,0.85)",
                      border: `1px solid ${edu.current ? `${edu.scoreColor}35` : "rgba(255,255,255,0.06)"}`,
                      borderRadius: "16px",
                      padding: "22px 26px",
                      position: "relative",
                      overflow: "hidden",
                      transition: "border-color 0.3s, box-shadow 0.3s",
                    }}
                    onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = `${edu.scoreColor}50`; el.style.boxShadow = `0 0 20px ${edu.scoreColor}14`; }}
                    onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = edu.current ? `${edu.scoreColor}35` : "rgba(255,255,255,0.06)"; el.style.boxShadow = "none"; }}
                  >
                    {edu.current && <div style={{ position: "absolute", top: 0, insetInline: 0, height: "2px", background: `linear-gradient(90deg, transparent, ${edu.scoreColor}, transparent)` }} />}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px" }}>
                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                          <edu.icon size={15} style={{ color: edu.scoreColor }} />
                          <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#f8fafc" }}>{edu.degree}</h3>
                          {edu.current && (
                            <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.65rem", fontWeight: 700, padding: "2px 8px", borderRadius: "5px", background: "rgba(192,132,252,0.14)", border: "1px solid rgba(192,132,252,0.3)", color: "#c084fc", textTransform: "uppercase", letterSpacing: "0.07em" }}>
                              Current
                            </span>
                          )}
                        </div>
                        {edu.spec && <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.82rem", color: edu.scoreColor, fontWeight: 600, marginBottom: "4px" }}>{edu.spec}</p>}
                        <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.82rem", color: "#475569", fontWeight: 500 }}>{edu.institution} · {edu.location}</p>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.1rem", fontWeight: 800, color: edu.scoreColor }}>{edu.score}</div>
                        <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.75rem", color: "#334155", fontWeight: 600 }}>{edu.period}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="lg:col-span-2">
            <h3 style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.14em", fontWeight: 700, color: "#475569", marginBottom: "20px" }}>
              Courses & Certifications
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {certifications.map(({ title, issuer, icon: Icon, color }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: 30, rotateY: 12 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformPerspective: "700px" }}
                >
                  <div
                    style={{
                      background: "rgba(8,8,18,0.85)",
                      border: `1px solid ${color}28`,
                      borderRadius: "16px",
                      padding: "18px 20px",
                      display: "flex",
                      gap: "14px",
                      alignItems: "center",
                      transition: "border-color 0.3s, box-shadow 0.3s, transform 0.2s",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = `${color}55`; el.style.boxShadow = `0 0 22px ${color}18`; el.style.transform = "translateY(-3px)"; }}
                    onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = `${color}28`; el.style.boxShadow = "none"; el.style.transform = "translateY(0)"; }}
                  >
                    <div style={{ width: "42px", height: "42px", borderRadius: "11px", background: `${color}16`, border: `1px solid ${color}38`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={18} style={{ color }} />
                    </div>
                    <div>
                      <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.88rem", fontWeight: 700, color: "#e2e8f0", marginBottom: "2px", lineHeight: 1.4 }}>{title}</p>
                      <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.75rem", color, fontWeight: 600 }}>{issuer}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
