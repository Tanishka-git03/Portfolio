import { motion } from "motion/react";
import { Zap, Users, Target, TrendingUp } from "lucide-react";

const traits = [
  { icon: Zap, title: "Fast Learner", desc: "Quickly adapts to new tools and technologies in the evolving AI landscape.", color: "#c084fc" },
  { icon: Users, title: "Team Leader", desc: "Led teams at SIH 2024 and Wyreflow Technologies, managing data ops.", color: "#f472b6" },
  { icon: Target, title: "Problem Solver", desc: "Builds automation solutions to tackle real-world challenges head-on.", color: "#34d399" },
  { icon: TrendingUp, title: "Impact Driven", desc: "Dashboards that cut reporting time by 65%; models with measurable accuracy.", color: "#fbbf24" },
];

export function About() {
  return (
    <section
      id="about"
      style={{
        background: "linear-gradient(180deg, #020208 0%, #07070f 100%)",
        padding: "110px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "-8%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)",
          transform: "translateY(-50%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "-5%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(236,72,153,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "64px", maxWidth: "700px" }}
        >
          <span
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: "0.72rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              fontWeight: 700,
              color: "#c084fc",
              display: "block",
              marginBottom: "14px",
            }}
          >
            ✦ about me
          </span>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "#f8fafc",
              marginBottom: "22px",
              lineHeight: 1.15,
            }}
          >
            Who I Am
          </h2>
          <p
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: "1.05rem",
              color: "#94a3b8",
              lineHeight: 1.9,
            }}
          >
            I'm a B-Tech student specialising in{" "}
            <span style={{ color: "#c084fc", fontWeight: 700 }}>Artificial Intelligence & Machine Learning</span>{" "}
            at Oriental College of Technology, Bhopal. I'm passionate about bridging the gap between cutting-edge
            AI research and{" "}
            <span style={{ color: "#f472b6", fontWeight: 700 }}>practical, deployable solutions</span>{" "}
            that create real value.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {traits.map(({ icon: Icon, title, desc, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 50, rotateX: -18 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformPerspective: "700px" }}
            >
              <div
                style={{
                  background: "rgba(10,10,20,0.85)",
                  border: `1px solid ${color}28`,
                  borderRadius: "20px",
                  padding: "30px 26px",
                  height: "100%",
                  position: "relative",
                  overflow: "hidden",
                  transition: "border-color 0.35s, box-shadow 0.35s, transform 0.2s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = `${color}60`;
                  el.style.boxShadow = `0 0 35px ${color}18`;
                  el.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = `${color}28`;
                  el.style.boxShadow = "none";
                  el.style.transform = "translateY(0)";
                }}
              >
                {/* Top accent line */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    insetInline: 0,
                    height: "2px",
                    background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
                    opacity: 0.7,
                  }}
                />
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "14px",
                    background: `${color}18`,
                    border: `1px solid ${color}35`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "18px",
                  }}
                >
                  <Icon size={22} style={{ color }} />
                </div>
                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "#f8fafc",
                    marginBottom: "10px",
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: "0.86rem",
                    color: "#64748b",
                    lineHeight: 1.75,
                  }}
                >
                  {desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
