import { Link } from "react-router";
import { ArrowRight, Download, ExternalLink, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { projects } from "../data/projects";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const skills = [
  { label: "React / Next.js", level: 95 },
  { label: "TypeScript", level: 90 },
  { label: "Node.js", level: 80 },
  { label: "UI/UX Design", level: 75 },
  { label: "React Native", level: 70 },
  { label: "Python / FastAPI", level: 65 },
];

const stats = [
  { value: "4+", label: "Years experience" },
  { value: "20+", label: "Projects shipped" },
  { value: "8", label: "Happy clients" },
  { value: "3", label: "Open-source tools" },
];

export function Home() {
  const featured = projects.slice(0, 3);

  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Gradient blob */}
        <div
          className="pointer-events-none absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, #6366f1 0%, #8b5cf6 40%, transparent 70%)",
          }}
        />
        <div
          className="pointer-events-none absolute -bottom-20 -left-40 w-[500px] h-[500px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, #3b82f6 0%, transparent 70%)",
          }}
        />

        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-sm mb-6"
            >
              <Sparkles size={13} />
              Available for freelance work
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1]! text-foreground mb-6"
            >
              Hi, I'm{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Alex Morgan
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="text-xl sm:text-2xl text-muted-foreground leading-relaxed mb-10 max-w-2xl"
            >
              A full-stack developer who turns complex problems into clean,
              fast, and delightful products. I care as much about the code as
              the experience it creates.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity text-base font-medium"
              >
                View my work <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent text-accent-foreground hover:bg-muted transition-colors text-base font-medium"
              >
                Get in touch
              </Link>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground hover:bg-accent transition-colors text-base font-medium"
              >
                <Download size={15} /> Resume
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="border-y border-border bg-accent/30">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {stats.map(({ value, label }, i) => (
            <motion.div
              key={label}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-semibold text-foreground mb-1">
                {value}
              </div>
              <div className="text-sm text-muted-foreground">{label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── About / Skills ── */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-3 block">
              About me
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6">
              I build things that
              <br />
              matter at scale
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              I'm a full-stack developer based in San Francisco with four years
              of experience building web and mobile products for startups and
              growth-stage companies. I thrive at the intersection of
              engineering and design—comfortable in a Figma file in the morning
              and deep in a TypeScript refactor by afternoon.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Outside of work I contribute to open-source tooling, run a small
              tech newsletter, and occasionally speak at local developer
              meetups.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-foreground font-medium hover:gap-3 transition-all"
            >
              Let's work together <ArrowRight size={16} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            {skills.map(({ label, level }, i) => (
              <div key={label}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-foreground font-medium">{label}</span>
                  <span className="text-muted-foreground">{level}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-accent overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: i * 0.08, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{
                      background:
                        "linear-gradient(90deg, #6366f1, #8b5cf6)",
                    }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section className="bg-accent/20 py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
            <div>
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-3 block">
                Selected work
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                Featured Projects
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-foreground font-medium hover:gap-3 transition-all shrink-0"
            >
              View all projects <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((project, i) => (
              <motion.div
                key={project.id}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <Link
                  to={`/projects/${project.id}`}
                  className="group block rounded-2xl bg-card border border-border overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative h-52 overflow-hidden bg-muted">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-3 right-3">
                      <span className="text-xs px-2 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white">
                        {project.year}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-1.5 group-hover:text-indigo-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-sm font-medium text-foreground">
                      Case study{" "}
                      <ArrowRight
                        size={14}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-5">
            Have a project in mind?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            I'm always open to new opportunities. Whether you need a new
            product built from scratch or want to improve an existing one,
            let's talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity font-medium"
            >
              Start a conversation <ArrowRight size={16} />
            </Link>
            <a
              href="mailto:alex@example.com"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-border hover:bg-accent transition-colors font-medium"
            >
              <ExternalLink size={15} /> alex@example.com
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
