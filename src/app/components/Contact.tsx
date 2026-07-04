import { useState } from "react";
import {
  Mail,
  MapPin,
  Clock,
  Github,
  Linkedin,
  Twitter,
  Send,
  CheckCircle2,
} from "lucide-react";
import { motion } from "motion/react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function Contact() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass = (hasError?: string) =>
    `w-full px-4 py-3 rounded-xl border transition-colors bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 ${
      hasError
        ? "border-destructive focus:ring-destructive/30"
        : "border-border focus:ring-primary/30 focus:border-primary"
    }`;

  const contactInfo = [
    {
      Icon: Mail,
      label: "Email",
      value: "alex@example.com",
      href: "mailto:alex@example.com",
    },
    {
      Icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: null,
    },
    {
      Icon: Clock,
      label: "Availability",
      value: "Mon–Fri, 9am–6pm PT",
      href: null,
    },
  ];

  const socials = [
    { Icon: Github, label: "GitHub", href: "#" },
    { Icon: Linkedin, label: "LinkedIn", href: "#" },
    { Icon: Twitter, label: "Twitter", href: "#" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-16 max-w-2xl"
      >
        <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-3 block">
          Contact
        </span>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-5">
          Let's build something great
        </h1>
        <p className="text-muted-foreground leading-relaxed text-lg">
          Have a project you'd like to discuss or just want to say hello? I'd
          love to hear from you. I typically respond within one business day.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-12">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="lg:col-span-3"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col items-center justify-center text-center py-20 px-8 rounded-2xl bg-emerald-50 border border-emerald-100 h-full"
            >
              <CheckCircle2 size={48} className="text-emerald-500 mb-5" />
              <h2 className="text-2xl font-semibold text-emerald-900 mb-3">
                Message sent!
              </h2>
              <p className="text-emerald-700 max-w-sm leading-relaxed">
                Thanks for reaching out, {form.name}. I'll be in touch at{" "}
                <strong>{form.email}</strong> as soon as possible.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: "", email: "", subject: "", message: "" });
                }}
                className="mt-8 px-5 py-2.5 rounded-lg bg-emerald-600 text-white text-sm hover:bg-emerald-700 transition-colors"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Name
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    className={inputClass(errors.name)}
                  />
                  {errors.name && (
                    <p className="text-destructive text-xs mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    className={inputClass(errors.email)}
                  />
                  {errors.email && (
                    <p className="text-destructive text-xs mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Subject
                </label>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className={inputClass()}
                >
                  <option value="">Select a topic…</option>
                  <option value="project">New project inquiry</option>
                  <option value="freelance">Freelance opportunity</option>
                  <option value="collab">Collaboration</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Tell me about your project, timeline, and budget…"
                  className={`${inputClass(errors.message)} resize-none`}
                />
                {errors.message && (
                  <p className="text-destructive text-xs mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity font-medium disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8z"
                      />
                    </svg>
                    Sending…
                  </>
                ) : (
                  <>
                    Send message <Send size={15} />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>

        {/* Info sidebar */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="lg:col-span-2 space-y-8"
        >
          <div className="rounded-2xl bg-card border border-border p-7 space-y-6">
            {contactInfo.map(({ Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-foreground" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    {label}
                  </span>
                  {href ? (
                    <a
                      href={href}
                      className="block text-foreground font-medium hover:text-indigo-600 transition-colors mt-0.5"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-foreground font-medium mt-0.5">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-card border border-border p-7">
            <h3 className="font-semibold mb-4">Find me online</h3>
            <div className="flex gap-3">
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-xl bg-accent hover:bg-muted flex items-center justify-center text-foreground transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div
            className="rounded-2xl p-7 text-white"
            style={{
              background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
            }}
          >
            <h3 className="font-semibold mb-2">Open to opportunities</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              I'm currently available for freelance projects and full-time
              roles. If you're building something meaningful, let's talk.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
