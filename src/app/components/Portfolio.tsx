import { Nav } from "./portfolio/Nav";
import { Hero } from "./portfolio/Hero";
import { About } from "./portfolio/About";
import { Skills } from "./portfolio/Skills";
import { Experience } from "./portfolio/Experience";
import { ProjectsSection } from "./portfolio/ProjectsSection";
import { Education } from "./portfolio/Education";
import { ContactSection } from "./portfolio/ContactSection";

export function Portfolio() {
  return (
    <div style={{ background: "#050508", minHeight: "100vh", fontFamily: "'Space Grotesk', sans-serif" }}>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <ProjectsSection />
      <Education />
      <ContactSection />
    </div>
  );
}
