import { useEffect, useMemo, useState } from "react";

const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

const ROLES = ["Full Stack Developer", "ICT Undergraduate", "Cloud Enthusiast", "AI Explorer"];


const HIGHLIGHTS = [
  "I build practical full-stack products with clean user interfaces and reliable backends.",
  "I enjoy turning academic and community problems into maintainable digital systems.",
  "I am exploring cloud infrastructure, automation, and AI-assisted software workflows.",
];

const SKILLS = [
  { group: "Frontend", items: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Vite"] },
  { group: "Backend", items: ["Node.js", "Spring Boot", "Java", "PHP", "REST APIs", "Hibernate"] },
  { group: "Data & Cloud", items: ["MySQL", "AWS", "Terraform", "Git", "Linux", "Analytics"] },
];

const PROJECTS = [
  {
    title: "AIESEC Ruhuna Web Application",
    desc: "Member, event, task, merchandise, and registration analytics platform with role-based dashboards for a student organization.",
    tech: ["React", "Spring Boot", "MySQL"],
    link: "https://github.com/hewageumesha/AIESEC_Ruhuna",
    featured: true,
  },
  {
    title: "Medicine Stock Management System",
    desc: "Inventory workflow for PHI medicine distribution with batch tracking, stock alerts, and a streamlined management UI.",
    tech: ["React", "Node.js", "JavaScript", "MySQL"],
    link: "https://github.com/ishara425/medicine-stock-management",
    featured: true,
  },
  {
    title: "HRGSMS — Hotel Reservation & Guest Services",
    desc: "Web-based hotel operations system with room availability, automated billing, guest services tracking, and multi-branch support.",
    tech: ["React", "Vite", "Node.js", "Express", "MySQL"],
    link: "https://github.com/Nepul1234/HRGSMS-ADBMS-Project",
    featured: true,
  },
  {
    title: "ChatApp System",
    desc: "Real-time Java chat application with admin and user roles, room management, threaded chats, and persisted histories.",
    tech: ["Java Swing", "Java RMI", "Hibernate", "MySQL"],
    link: "https://github.com/ishara425",
  },
  {
    title: "FOT-Tecmis",
    desc: "Collaborative Java-based technical management information system for the Faculty of Technology.",
    tech: ["Java", "MySQL"],
    link: "https://github.com/ishara425",
  },
  {
    title: "Soft Clothes — Online Clothing Store",
    desc: "E-commerce management app for customer registration, orders, product cataloging, payments, and business reports.",
    tech: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
    link: "https://github.com/ishara425",
  },
];

const CONTACT_LINKS = [
  { icon: "📧", label: "Email", value: "isharapalangasingha@gmail.com", href: "mailto:isharapalangasingha@gmail.com" },
  { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/ishara-palangasinghe", href: "https://linkedin.com/in/ishara-palangasinghe" },
  { icon: "🐙", label: "GitHub", value: "github.com/ishara425", href: "https://github.com/ishara425" },
];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [typed, setTyped] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const currentYear = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const timeout = setTimeout(() => {
      if (!deleting && charIndex < currentRole.length) {
        setTyped(currentRole.slice(0, charIndex + 1));
        setCharIndex((index) => index + 1);
        return;
      }

      if (!deleting && charIndex === currentRole.length) {
        setDeleting(true);
        return;
      }

      if (deleting && charIndex > 0) {
        setTyped(currentRole.slice(0, charIndex - 1));
        setCharIndex((index) => index - 1);
        return;
      }

      setDeleting(false);
      setRoleIndex((index) => (index + 1) % ROLES.length);
    }, deleting ? 45 : charIndex === ROLES[roleIndex].length ? 1400 : 85);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  useEffect(() => {
    const sections = NAV_ITEMS.map(({ id }) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.1, 0.35, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleCVDownload = () => {
    const link = document.createElement("a");
    link.href = "/Ishara Palangasinghe_CV.pdf";
    link.download = "Ishara_Palangasinghe_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="portfolio-shell">
      <nav className="site-nav" aria-label="Primary navigation">
        <button className="brand" onClick={() => scrollTo("home")} aria-label="Go to home section">
          <span>ishara</span>
          <strong>.dev</strong>
        </button>

        <div className="desktop-nav">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${activeSection === item.id ? "active" : ""}`}
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile-nav">
          {NAV_ITEMS.map((item) => (
            <button key={item.id} onClick={() => scrollTo(item.id)} className={activeSection === item.id ? "active" : ""}>
              {item.label}
            </button>
          ))}
        </div>
      )}

      <main>
        <section id="home" className="hero section-pad">
          <div className="hero-copy fade-in">
            <p className="eyebrow">Available for internships & collaborations</p>
            <h1>
              Hi, I&apos;m <span>Ishara Palangasinghe</span>.
            </h1>
            <p className="type-line" aria-label={`I am a ${typed}`}>
              {typed}
              <span className="cursor" aria-hidden="true">|</span>
            </p>
            <p className="hero-description">
              ICT undergraduate and full-stack developer focused on building useful web applications, reliable data-driven systems,
              and cloud-ready solutions with thoughtful user experiences.
            </p>
            <div className="hero-actions">
              <button className="btn primary" onClick={() => scrollTo("projects")}>View Projects</button>
              <button className="btn secondary" onClick={handleCVDownload}>Download CV</button>
            </div>
            <div className="stats-grid" aria-label="Portfolio highlights">
              {STATS.map((stat) => (
                <div key={stat.label} className="stat-card">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

         
        </section>

        <section id="about" className="section-pad about-section">
          <div className="section-heading">
            <p className="eyebrow">About me</p>
            <h2>Developer with product thinking and a learning mindset.</h2>
          </div>

          <div className="about-grid">
            <div className="about-card large-card">
              <h3>What I bring</h3>
              <div className="highlight-list">
                {HIGHLIGHTS.map((highlight) => (
                  <p key={highlight}>{highlight}</p>
                ))}
              </div>
            </div>

            <div className="about-card achievement-card">
              <span className="achievement-icon">🥇</span>
              <h3>1st Place — Hacktrail 1.0</h3>
              <p>
                Competed with team <strong>Ones &amp; Zeros</strong> in an intense HackerRank problem-solving hackathon organized by the
                ICT Students&apos; Circle at the University of Ruhuna.
              </p>
            </div>
          </div>

          <div className="skills-grid">
            {SKILLS.map((skillGroup) => (
              <article key={skillGroup.group} className="skill-card">
                <h3>{skillGroup.group}</h3>
                <div>
                  {skillGroup.items.map((skill) => (
                    <span key={skill} className="tag">{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section-pad projects-section">
          <div className="section-heading centered">
            <p className="eyebrow">Selected work</p>
            <h2>Projects that solve real problems.</h2>
            <p>From student organization platforms to inventory systems, these projects show my range across frontend, backend, and databases.</p>
          </div>

          <div className="projects-grid">
            {PROJECTS.map((project) => (
              <article key={project.title} className={`project-card ${project.featured ? "featured" : ""}`}>
                {project.featured && <span className="project-badge">Featured</span>}
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noreferrer">View project →</a>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section-pad contact-section">
          <div className="contact-card">
            <p className="eyebrow">Let&apos;s connect</p>
            <h2>Have an opportunity or idea?</h2>
            <p>
              I&apos;m open to internships, collaborative development work, and conversations about full-stack, cloud, or AI-enabled products.
            </p>
            <div className="contact-links">
              {CONTACT_LINKS.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                  <span>{link.icon}</span>
                  <div>
                    <strong>{link.label}</strong>
                    <small>{link.value}</small>
                  </div>
                  <em>→</em>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>
          <strong>ishara</strong>.dev
        </span>
        <p>© {currentYear} Ishara Palangasinghe. Built with React.</p>
      </footer>
    </div>
  );
}
