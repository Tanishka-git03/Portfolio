import { useParams, Link, Navigate } from "react-router";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  CheckCircle2,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import { motion } from "motion/react";
import { getProjectById, projects } from "../data/projects";

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : undefined;

  if (!project) return <Navigate to="/projects" replace />;

  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const prev = projects[currentIndex - 1];
  const next = projects[currentIndex + 1];

  return (
    <div>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[340px] overflow-hidden bg-muted">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 w-full pb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Link
                to="/projects"
                className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-sm mb-5 transition-colors"
              >
                <ArrowLeft size={14} /> Back to projects
              </Link>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight mb-2">
                {project.title}
              </h1>
              <p className="text-white/70 text-lg">{project.tagline}</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-12">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed text-base">
                {project.longDescription}
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.18 }}
            >
              <div className="flex items-center gap-2 mb-5">
                <CheckCircle2 size={20} className="text-indigo-500" />
                <h2 className="text-2xl font-semibold">Key Features</h2>
              </div>
              <ul className="space-y-3">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.26 }}
              className="rounded-2xl bg-amber-50 border border-amber-100 p-6"
            >
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb size={18} className="text-amber-600" />
                <h2 className="text-lg font-semibold text-amber-900">
                  The Challenge
                </h2>
              </div>
              <p className="text-amber-800 leading-relaxed text-sm">
                {project.challenges}
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.34 }}
              className="rounded-2xl bg-emerald-50 border border-emerald-100 p-6"
            >
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp size={18} className="text-emerald-600" />
                <h2 className="text-lg font-semibold text-emerald-900">
                  Outcome
                </h2>
              </div>
              <p className="text-emerald-800 leading-relaxed text-sm">
                {project.outcome}
              </p>
            </motion.section>
          </div>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="space-y-6"
          >
            <div className="rounded-2xl bg-card border border-border p-6 space-y-5">
              <div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  Role
                </span>
                <p className="text-foreground font-medium mt-1">{project.role}</p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  Year
                </span>
                <p className="text-foreground font-medium mt-1">{project.year}</p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                  Tech stack
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {(project.liveUrl || project.githubUrl) && (
                <div className="pt-2 space-y-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm hover:opacity-90 transition-opacity"
                    >
                      <ExternalLink size={14} /> Live site
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg border border-border text-foreground text-sm hover:bg-accent transition-colors"
                    >
                      <Github size={14} /> View code
                    </a>
                  )}
                </div>
              )}
            </div>

            <div className="rounded-2xl bg-card border border-border p-6">
              <p className="text-sm text-muted-foreground mb-3">
                Interested in working together?
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg bg-accent text-accent-foreground text-sm hover:bg-muted transition-colors"
              >
                Get in touch
              </Link>
            </div>
          </motion.aside>
        </div>

        {/* Prev / Next */}
        {(prev || next) && (
          <div className="mt-20 pt-10 border-t border-border grid sm:grid-cols-2 gap-4">
            {prev ? (
              <Link
                to={`/projects/${prev.id}`}
                className="group flex items-center gap-4 p-5 rounded-2xl border border-border hover:bg-accent transition-colors"
              >
                <ArrowLeft
                  size={18}
                  className="text-muted-foreground group-hover:text-foreground transition-colors shrink-0"
                />
                <div>
                  <span className="text-xs text-muted-foreground">Previous</span>
                  <p className="font-medium text-foreground">{prev.title}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {next && (
              <Link
                to={`/projects/${next.id}`}
                className="group flex items-center justify-end gap-4 p-5 rounded-2xl border border-border hover:bg-accent transition-colors sm:text-right"
              >
                <div>
                  <span className="text-xs text-muted-foreground">Next</span>
                  <p className="font-medium text-foreground">{next.title}</p>
                </div>
                <ArrowLeft
                  size={18}
                  className="text-muted-foreground group-hover:text-foreground transition-colors rotate-180 shrink-0"
                />
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
