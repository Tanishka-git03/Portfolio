import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2 } from "lucide-react";

interface Form { name: string; email: string; message: string }
interface Errors { name?: string; email?: string; message?: string }

export function ContactSection() {
  const [form, setForm] = useState<Form>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (): Errors => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = "Name required";
    if (!form.email.trim()) e.email = "Email required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Message required";
    return e;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    setErrors((p) => ({ ...p, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  };

  const inputStyle = (err?: string): React.CSSProperties => ({
    width: "100%",
    padding: "13px 16px",
    borderRadius: "12px",
    border: `1px solid ${err ? "rgba(239,68,68,0.55)" : "rgba(139,92,246,0.22)"}`,
    background: "rgba(8,8,18,0.8)",
    color: "#f1f5f9",
    fontFamily: "'Manrope', sans-serif",
    fontWeight: 500,
    fontSize: "0.9rem",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
    boxSizing: "border-box",
  });

  const contacts = [
    { icon: Mail, label: "Email", value: "tanishkajain0311@gmail.com", href: "mailto:tanishkajain0311@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91-8109405069", href: "tel:+918109405069" },
    { icon: MapPin, label: "Location", value: "Bhopal, India", href: null },
  ];

  const socials = [
    { icon: Github, label: "GitHub", href: "https://github.com/Tanishka-git03", color: "#f8fafc" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/tanishka-jain03", color: "#34d399" },
  ];

  return (
    <section
      id="contact"
      style={{
        background: "linear-gradient(180deg, #07070f 0%, #020208 100%)",
        padding: "110px 0 90px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", bottom: 0, right: 0, width: "450px", height: "450px", background: "radial-gradient(circle at bottom right, rgba(52,211,153,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "10%", left: "-5%", width: "350px", height: "350px", background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "64px" }}
        >
          <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700, color: "#34d399", display: "block", marginBottom: "14px" }}>
            ✦ get in touch
          </span>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#f8fafc", marginBottom: "16px" }}>
            Contact Me
          </h2>
          <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "1rem", color: "#64748b", maxWidth: "440px", lineHeight: 1.7 }}>
            Open to internships, collaborations, and AI projects. Let's build something impactful together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -40, rotateY: -10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
            style={{ transformPerspective: "1000px" }}
          >
            <div style={{ background: "rgba(8,8,18,0.92)", border: "1px solid rgba(139,92,246,0.22)", borderRadius: "24px", padding: "38px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, insetInline: 0, height: "3px", background: "linear-gradient(90deg, #8b5cf6, #ec4899, #34d399)", opacity: 0.8 }} />

              {sent ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: "center", padding: "44px 0" }}>
                  <div style={{ width: "72px", height: "72px", borderRadius: "50%", background: "rgba(52,211,153,0.12)", border: "1px solid rgba(52,211,153,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                    <CheckCircle2 size={36} style={{ color: "#34d399" }} />
                  </div>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.3rem", fontWeight: 800, color: "#f8fafc", marginBottom: "8px" }}>Message Sent!</h3>
                  <p style={{ fontFamily: "'Manrope', sans-serif", color: "#64748b", fontSize: "0.9rem" }}>Thanks! I'll get back to you soon.</p>
                  <button
                    onClick={() => { setSent(false); setForm({ name: "", email: "", message: "" }); }}
                    style={{ marginTop: "24px", padding: "10px 24px", borderRadius: "10px", background: "rgba(52,211,153,0.12)", border: "1px solid rgba(52,211,153,0.3)", color: "#34d399", fontFamily: "'Manrope', sans-serif", fontSize: "0.85rem", fontWeight: 700, cursor: "pointer" }}
                  >
                    Send another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {["name", "email"].map((field) => (
                    <div key={field}>
                      <label style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.82rem", fontWeight: 700, color: "#64748b", display: "block", marginBottom: "7px", textTransform: "capitalize" }}>{field}</label>
                      <input
                        name={field}
                        type={field === "email" ? "email" : "text"}
                        value={form[field as keyof Form]}
                        onChange={handleChange}
                        placeholder={field === "name" ? "Your name" : "your@email.com"}
                        style={inputStyle(errors[field as keyof Errors])}
                        onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(192,132,252,0.6)"; (e.target as HTMLElement).style.boxShadow = "0 0 0 3px rgba(192,132,252,0.08)"; }}
                        onBlur={(e) => { (e.target as HTMLElement).style.borderColor = errors[field as keyof Errors] ? "rgba(239,68,68,0.55)" : "rgba(139,92,246,0.22)"; (e.target as HTMLElement).style.boxShadow = "none"; }}
                      />
                      {errors[field as keyof Errors] && <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.75rem", color: "#ef4444", marginTop: "4px" }}>{errors[field as keyof Errors]}</p>}
                    </div>
                  ))}
                  <div>
                    <label style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.82rem", fontWeight: 700, color: "#64748b", display: "block", marginBottom: "7px" }}>Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell me about your project or opportunity…"
                      style={{ ...inputStyle(errors.message), resize: "none" }}
                      onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(192,132,252,0.6)"; (e.target as HTMLElement).style.boxShadow = "0 0 0 3px rgba(192,132,252,0.08)"; }}
                      onBlur={(e) => { (e.target as HTMLElement).style.borderColor = errors.message ? "rgba(239,68,68,0.55)" : "rgba(139,92,246,0.22)"; (e.target as HTMLElement).style.boxShadow = "none"; }}
                    />
                    {errors.message && <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.75rem", color: "#ef4444", marginTop: "4px" }}>{errors.message}</p>}
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      display: "inline-flex", alignItems: "center", gap: "9px", padding: "14px 30px",
                      borderRadius: "12px", background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
                      color: "#fff", fontFamily: "'Manrope', sans-serif", fontSize: "0.92rem", fontWeight: 800,
                      cursor: loading ? "not-allowed" : "pointer", border: "none",
                      boxShadow: "0 0 26px rgba(139,92,246,0.4)", opacity: loading ? 0.65 : 1,
                      transition: "opacity 0.2s, box-shadow 0.2s", alignSelf: "flex-start",
                    }}
                    onMouseEnter={(e) => { if (!loading) (e.currentTarget as HTMLElement).style.boxShadow = "0 0 44px rgba(139,92,246,0.65)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 26px rgba(139,92,246,0.4)"; }}
                  >
                    {loading ? (
                      <><svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" opacity="0.25" /><path fill="currentColor" opacity="0.75" d="M4 12a8 8 0 018-8v8z" /></svg> Sending…</>
                    ) : (
                      <><Send size={15} /> Send Message</>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-2"
            style={{ display: "flex", flexDirection: "column", gap: "14px" }}
          >
            {contacts.map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                style={{ background: "rgba(8,8,18,0.8)", border: "1px solid rgba(139,92,246,0.18)", borderRadius: "16px", padding: "18px 20px", display: "flex", gap: "14px", alignItems: "center", transition: "border-color 0.3s, transform 0.2s" }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(192,132,252,0.4)"; el.style.transform = "translateX(4px)"; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(139,92,246,0.18)"; el.style.transform = "translateX(0)"; }}
              >
                <div style={{ width: "42px", height: "42px", borderRadius: "11px", background: "rgba(139,92,246,0.12)", border: "1px solid rgba(192,132,252,0.22)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon size={17} style={{ color: "#c084fc" }} />
                </div>
                <div>
                  <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.7rem", color: "#334155", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700, marginBottom: "2px" }}>{label}</p>
                  {href ? (
                    <a href={href} style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.88rem", color: "#e2e8f0", fontWeight: 600, textDecoration: "none" }}>{value}</a>
                  ) : (
                    <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.88rem", color: "#e2e8f0", fontWeight: 600 }}>{value}</p>
                  )}
                </div>
              </div>
            ))}

            <div style={{ background: "rgba(8,8,18,0.8)", border: "1px solid rgba(139,92,246,0.18)", borderRadius: "16px", padding: "22px 20px" }}>
              <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.8rem", color: "#475569", fontWeight: 600, marginBottom: "14px" }}>Find me online</p>
              <div style={{ display: "flex", gap: "10px" }}>
                {socials.map(({ icon: Icon, label, href, color }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    style={{ width: "44px", height: "44px", borderRadius: "11px", background: "rgba(8,8,18,0.6)", border: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", justifyContent: "center", color, transition: "all 0.22s", textDecoration: "none" }}
                    onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = `${color}55`; el.style.background = `${color}14`; el.style.transform = "translateY(-3px)"; }}
                    onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(255,255,255,0.07)"; el.style.background = "rgba(8,8,18,0.6)"; el.style.transform = "translateY(0)"; }}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div style={{ borderRadius: "16px", padding: "24px 22px", background: "linear-gradient(135deg, rgba(139,92,246,0.18), rgba(236,72,153,0.12))", border: "1px solid rgba(192,132,252,0.25)" }}>
              <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#f8fafc", marginBottom: "6px" }}>Open to opportunities</p>
              <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.83rem", color: "#94a3b8", lineHeight: 1.7 }}>
                Currently seeking internships and AI project collaborations. If you're building something meaningful, let's talk.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ marginTop: "64px", paddingTop: "28px", borderTop: "1px solid rgba(139,92,246,0.12)", textAlign: "center" }}
        >
          <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.82rem", color: "#1e293b" }}>
            © 2026 Tanishka Jain ·
            <span style={{ color: "#c084fc" }}>AI Enthusiast & Developer</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
