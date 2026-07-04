import { useState, useEffect } from "react";
import { Outlet, NavLink, useLocation } from "react-router";
import { Menu, X, Code2, Github, Linkedin, Twitter } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Root() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative py-1 transition-colors duration-200 ${
      isActive
        ? "text-foreground"
        : "text-muted-foreground hover:text-foreground"
    }`;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navbar */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center gap-2 text-foreground hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Code2 size={16} className="text-primary-foreground" />
            </div>
            <span className="font-semibold tracking-tight">Alex Morgan</span>
          </NavLink>

          {/* Desktop nav */}
          <div className="hidden sm:flex items-center gap-8">
            {navLinks.map(({ to, label }) => (
              <NavLink key={to} to={to} end={to === "/"} className={linkClass}>
                {({ isActive }) => (
                  <>
                    {label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-0.5 inset-x-0 h-0.5 rounded-full bg-primary"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
            <a
              href="#"
              className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm hover:opacity-90 transition-opacity"
            >
              Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="sm:hidden p-2 rounded-md text-foreground hover:bg-accent transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="sm:hidden bg-background/95 backdrop-blur-md border-b border-border px-5 pb-5 pt-2 flex flex-col gap-4"
            >
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === "/"}
                  className={({ isActive }) =>
                    `text-base transition-colors ${isActive ? "text-foreground font-medium" : "text-muted-foreground"}`
                  }
                >
                  {label}
                </NavLink>
              ))}
              <a
                href="#"
                className="w-fit px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm"
              >
                Resume
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Page content */}
      <main className="flex-1 pt-16">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Code2 size={14} />
            <span>© 2026 Alex Morgan. Built with React & Tailwind.</span>
          </div>
          <div className="flex items-center gap-5">
            {[
              { Icon: Github, label: "GitHub", href: "#" },
              { Icon: Linkedin, label: "LinkedIn", href: "#" },
              { Icon: Twitter, label: "Twitter", href: "#" },
            ].map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
