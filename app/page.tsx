import type { Metadata } from "next";

const skills = [
  {
    title: "Frontend Architecture",
    items: ["React", "TypeScript", "Canvas UI", "SPA systems", "Design patterns"],
  },
  {
    title: "Performance Engineering",
    items: ["Render profiling", "Memory analysis", "Microbenchmarks", "Browser APIs"],
  },
  {
    title: "Streaming Systems",
    items: ["Real-time telemetry", "Event pipelines", "State synchronization", "REST APIs"],
  },
  {
    title: "Observability & Analytics",
    items: ["Session replay", "eBPF telemetry", "User behavior analytics", "AI summaries"],
  },
];

const timeline = [
  {
    company: "Trench",
    role: "Senior Software Engineer",
    dates: "2024 - Present",
    location: "Atlanta, GA",
    summary:
      "Leading frontend architecture for an AI-native Linux observability platform powered by eBPF telemetry and real-time infrastructure monitoring.",
    highlights: [
      "Architected a canvas rendering engine for dense, low-latency streaming telemetry.",
      "Designed modular visualization systems for timelines, event graphs, dashboards, and dependency exploration.",
      "Integrated AI-assisted incident summarization that turns low-level telemetry into actionable operational insight.",
    ],
  },
  {
    company: "FullStory",
    role: "Senior Software Engineer, Playback",
    dates: "2022 - 2023",
    location: "Atlanta, GA",
    summary:
      "Set technical direction for FullStory's next-generation session replay platform after joining as the Playback team's first engineer.",
    highlights: [
      "Modernized internal frontend infrastructure by migrating legacy frameworks to React.",
      "Unified fragmented replay timing logic into a scalable architecture.",
      "Designed streaming data structures for efficient real-time playback and analysis.",
    ],
  },
  {
    company: "FullStory",
    role: "Senior Software Engineer, Web Capture",
    dates: "2016 - 2022",
    location: "Atlanta, GA",
    summary:
      "Built browser capture and analytics infrastructure responsible for recording hundreds of millions of user sessions annually.",
    highlights: [
      "Delivered enterprise-grade frustration signal detection and configuration preview tooling.",
      "Created performance utilities that nearly eliminated forced style recomputation on critical paths.",
      "Implemented GDPR-aware privacy controls for dynamic consent-based data collection.",
    ],
  },
  {
    company: "Google, Evernote, LogicBlox",
    role: "Software Engineering Internships",
    dates: "2012 - 2015",
    location: "CA / GA",
    summary:
      "Early engineering work across consumer web UI, content sharing workflows, image tools, Datalog testing, and OLAP exploration.",
    highlights: [
      "Built Google+ frontend features with Closure and Guice.",
      "Improved Evernote gallery and sharing experiences.",
      "Developed visualization components for data exploration systems.",
    ],
  },
];

const impactCards = [
  {
    eyebrow: "Current focus",
    title: "AI-native Linux observability",
    body:
      "Frontend systems that translate continuous eBPF telemetry into interactive timelines, dependency maps, dashboards, and incident summaries.",
  },
  {
    eyebrow: "Platform scale",
    title: "Hundreds of millions of sessions",
    body:
      "Core contributions to FullStory's browser capture and replay infrastructure, spanning performance, privacy, streaming data, and enterprise analytics.",
  },
  {
    eyebrow: "Engineering leverage",
    title: "Patterns teams can reuse",
    body:
      "Reusable React architecture, profiling standards, and microbenchmarking tools that improved developer velocity across complex frontend platforms.",
  },
];

export const metadata: Metadata = {
  title: "Benjamin Dean | Senior Software Engineer",
  description:
    "Portfolio for Benjamin Dean, a senior software engineer focused on React, TypeScript, performance engineering, streaming telemetry, session replay, and observability platforms.",
};

export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Benjamin Dean home">
          BD
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="kicker">Senior Software Engineer</p>
          <h1>
            I build real-time frontend systems for complex engineering
            platforms.
          </h1>
          <p className="hero-summary">
            I'm Benjamin Dean, an Atlanta-based engineer with 10+ years of
            experience across React, TypeScript, browser performance, streaming
            data, session replay, and AI-powered observability.
          </p>
          <div className="hero-actions" aria-label="Primary actions">
            <a className="button primary" href="mailto:ben.dean0518@gmail.com">
              Email me
            </a>
            <a className="button secondary" href="./Benjamin_Dean_Resume.pdf">
              Resume
            </a>
          </div>
        </div>

        <aside className="hero-panel" aria-label="Portfolio snapshot">
          <div className="signal-grid" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="panel-content">
            <p className="panel-label">Architecture profile</p>
            <h2>React + telemetry + performance at production scale.</h2>
            <dl>
              <div>
                <dt>10+</dt>
                <dd>years building software</dd>
              </div>
              <div>
                <dt>100M+</dt>
                <dd>annual sessions supported</dd>
              </div>
              <div>
                <dt>4</dt>
                <dd>core specialties</dd>
              </div>
            </dl>
          </div>
        </aside>
      </section>

      <section className="section intro" id="about">
        <div>
          <p className="section-label">About</p>
          <h2>Pragmatic systems thinking for demanding user interfaces.</h2>
        </div>
        <p>
          I work where frontend engineering meets systems complexity: dense
          data, continuous streams, browser internals, visualization, privacy,
          and observability. My best work turns low-level platform behavior into
          tools engineers can trust, understand, and move through quickly.
        </p>
      </section>

      <section className="section" id="work">
        <div className="section-heading">
          <p className="section-label">Selected impact</p>
          <h2>Platforms, performance, and product clarity.</h2>
        </div>
        <div className="impact-grid">
          {impactCards.map((card) => (
            <article className="impact-card" key={card.title}>
              <p>{card.eyebrow}</p>
              <h3>{card.title}</h3>
              <span>{card.body}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="experience">
        <div className="section-heading">
          <p className="section-label">Experience</p>
          <h2>Senior engineering across observability and session replay.</h2>
        </div>
        <div className="timeline">
          {timeline.map((job) => (
            <article className="timeline-item" key={`${job.company}-${job.dates}`}>
              <div className="timeline-meta">
                <p>{job.dates}</p>
                <span>{job.location}</span>
              </div>
              <div className="timeline-body">
                <p className="role">{job.role}</p>
                <h3>{job.company}</h3>
                <p>{job.summary}</p>
                <ul>
                  {job.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="section-label">Skills</p>
          <h2>Tools for fast, observable, high-confidence interfaces.</h2>
        </div>
        <div className="skills-grid">
          {skills.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div>
          <p className="section-label">Contact</p>
          <h2>Need a senior engineer for real-time product architecture?</h2>
          <p>
            Based in Atlanta, GA. Available for senior software engineering,
            frontend platform, observability, and performance-focused roles.
          </p>
        </div>
        <div className="contact-actions">
          <a className="button primary" href="mailto:ben.dean0518@gmail.com">
            ben.dean0518@gmail.com
          </a>
        </div>
      </section>
    </main>
  );
}
