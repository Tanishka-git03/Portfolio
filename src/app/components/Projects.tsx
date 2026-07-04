import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { projects } from "../data/projects";

export function Projects() {
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
          Portfolio
        </span>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-5">
          All Projects
        </h1>
        <p className="text-muted-foreground leading-relaxed text-lg">
          A selection of products and experiments I've built—some solo, some
          with teams. Each one taught me something.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
          >
            <Link
              to={`/projects/${project.id}`}
              className="group flex flex-col rounded-2xl bg-card border border-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-60 overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <span className="text-sm px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white font-medium">
                    {project.role}
                  </span>
                  <span className="text-sm px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white">
                    {project.year}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="text-xl font-semibold text-foreground mb-2 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="mt-5 flex items-center gap-1 text-sm font-medium text-foreground border-t border-border pt-4">
                  Read case study{" "}
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
  );
}
