import { useState, useRef, useEffect, useCallback } from 'react'

const LINKEDIN = 'https://www.linkedin.com/in/abdullah-almekhyal/'
const GITHUB = 'https://github.com/mekhyal'
const EMAIL = 'a.almekhyal05@gmail.com'
const PHONE_DISPLAY = '+965 5580 5805'
const PHONE_TEL = '+96555805805'

const highlights = [
  {
    title: '🥇 Gold Medal & 1st Place — GCC Cybersecurity Summit 2025',
    text: ' — AI-based UAV attack detection (GCC Summit, 2025)',
  },
  {
    title: '🎤 International Presenter — MILSET ESI',
    text: ' — Networked File Sync System (MILSET ESI, 2025)',
  },
  {
    title: '🌍 GSR Local Ambassador — KFUPM',
    text: ' — KFUPM (2025–Present)',
  },
]

const experience = [
  {
    title: 'Global Student Research (GSR)',
    time: '2025 – Present',
    role: 'Local Ambassador • King Fahd University of Petroleum & Minerals (KFUPM)',
    bullets: [
      'Represent and support student research and innovation initiatives at the local level.',
      'Promote academic research activities and facilitate collaboration among student researchers.',
    ],
  },
  {
    title: 'Computer Science Club (CSC)',
    time: 'Sep 2024 – Jun 2025',
    role: 'Secretary • Kuwait University',
    bullets: [
      'Coordinated executive schedules and supported technical events (workshops, hackathons, field visits).',
      'Drafted official correspondence and communication with academic and industry partners.',
    ],
  },
  {
    title: 'Kuwait National Petroleum Company (KNPC)',
    time: 'Jul 2024 – Aug 2024',
    role: 'IT Intern • Training Center, Kuwait',
    bullets: ['Enterprise IT systems, workflows, and documentation.'],
  },
]

const projects = [
  {
    title: 'Mosque Management System (SaaS)',
    subtitle: 'Full-stack • Role-based portals',
    bullets: [
      'End-to-end platform: admin, supervisor, teacher, parent, and student views.',
      'Attendance, tajweed/memorization grading, reports, exports; alerts and dashboards for daily ops.',
    ],
    tags: ['Supabase', 'Auth/RLS', 'Dashboards', 'Reports', 'SaaS'],
  },
  {
    title: 'SAR-AI (Suspicious Activity Reporting)',
    subtitle: 'AML • ML classification • Money laundering detection',
    bullets: [
      'Built ML pipelines to flag suspicious transactions and support money-laundering detection.',
      'Compared Random Forest, logistic regression, Naive Bayes, decision trees, and XGBoost; evaluated models for AML-style prediction tasks.',
    ],
    tags: ['AML', 'XGBoost', 'Random Forest', 'Scikit-learn', 'Classification'],
  },
  {
    title: 'AML-Graph (AMLSim + Graph ML)',
    subtitle: 'Graph Analytics • Simulation Data • Fraud Patterns',
    bullets: [
      'Built graph datasets from AMLSim-style synthetic transaction networks.',
      'Tested ML features (communities, flows, centrality) on simulated laundering patterns.',
    ],
    tags: ['AMLSim', 'Graphs', 'Features', 'ML'],
  },
  {
    title: 'Tadreeb (National Training Platform)',
    subtitle: 'Product & Startup • University–Company Matching',
    bullets: [
      'One national hub for coop and field training placements.',
      'Roles for students, companies, and universities; tracking, reviews, and subscription model outline.',
    ],
    tags: ['Product', 'Marketplace', 'Reviews', 'Subscriptions'],
  },
  {
    title: 'Motor Vehicle Collisions Database (NYC)',
    subtitle: 'Oracle SQL • ER modeling • 3NF',
    bullets: [
      'ER model and 3NF schema: Collisions, Locations, Vehicles, plus a bridge table for many-to-many links.',
      'Cleaning and ETL through a staging table; constraints: PK, FK, CHECK, NOT NULL in Oracle SQL Developer.',
      'Advanced SQL for analysis: joins, aggregates, subqueries, and window functions for patterns and severity.',
    ],
    tags: ['Oracle', 'SQL', 'ETL', '3NF', 'Data modeling'],
  },
  {
    title: 'Networked File Synchronization System',
    subtitle: 'C • Client–Server • Checksum Sync',
    bullets: [
      'Chunked checksum sync over sockets; tested end-to-end file transfer.',
      'Presented at MILSET Expo-Sciences International, Abu Dhabi.',
    ],
    tags: ['C', 'Sockets', 'Checksums', 'Systems'],
  },
]

const workChips = [
  'AML analytics',
  'Fraud / financial crime',
  'Machine learning',
  'UAV security (AI)',
  'SQL & data modeling',
  'Web Development',
  'Research programs',
]

/** Interviews & media — { title, outlet, date, href? } */
const interviews = [
  {
    title: 'Television interview',
    outlet: 'Kuwait TV',
    date: '2025',
    href: 'https://www.youtube.com/watch?v=IfL0IjLDEfM',
  },
]

const skillPanels = [
  {
    title: 'Languages',
    chips: ['Python', 'SQL', 'R', 'JavaScript','C', 'C++']
  },
  {
    title: 'Data / AI',
    chips: ['Data Mining', 'Machine Learning', 'AML Analytics'],
  },
  {
    title: 'Databases',
    chips: ['ER Modeling', 'Normalization (1NF–3NF)', 'Oracle SQL Developer'],
  },
  {
    title: 'Systems',
    chips: ['Linux/Unix', 'System Programming', 'Client–Server Programming'],
  },
  {
    title: 'Spoken',
    chips: ['Arabic (native)', 'English (fluent)'],
  },
]

export default function App() {
  const [navOpen, setNavOpen] = useState(false)
  const mediaScrollRef = useRef(null)
  const [mediaScroll, setMediaScroll] = useState({ canPrev: false, canNext: true })

  const year = new Date().getFullYear()

  const closeNav = () => setNavOpen(false)

  const updateMediaScroll = useCallback(() => {
    const el = mediaScrollRef.current
    if (!el) return
    const { scrollLeft, scrollWidth, clientWidth } = el
    const max = scrollWidth - clientWidth
    setMediaScroll({
      canPrev: scrollLeft > 2,
      canNext: scrollLeft < max - 2,
    })
  }, [])

  useEffect(() => {
    const el = mediaScrollRef.current
    if (!el) return
    updateMediaScroll()
    el.addEventListener('scroll', updateMediaScroll, { passive: true })
    const ro = new ResizeObserver(updateMediaScroll)
    ro.observe(el)
    return () => {
      el.removeEventListener('scroll', updateMediaScroll)
      ro.disconnect()
    }
  }, [updateMediaScroll])

  useEffect(() => {
    const tick = () => {
      if (document.hidden) return
      const el = mediaScrollRef.current
      if (!el) return
      const { scrollLeft, scrollWidth, clientWidth } = el
      const max = scrollWidth - clientWidth
      if (max <= 0) return
      if (scrollLeft >= max - 2) {
        el.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        el.scrollBy({ left: clientWidth, behavior: 'smooth' })
      }
    }
    const id = window.setInterval(tick, 3000)
    return () => window.clearInterval(id)
  }, [])

  const scrollHeroMedia = (direction) => {
    const el = mediaScrollRef.current
    if (!el) return
    el.scrollBy({ left: direction * el.clientWidth, behavior: 'smooth' })
  }

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label="Go to top">
            <span className="brand-dot" />
            <span className="brand-text">Abdullah Al-Mekhyal</span>
          </a>

          <nav className="nav" aria-label="Primary">
            <button
              type="button"
              className="nav-toggle"
              aria-expanded={navOpen}
              aria-controls="navMenu"
              onClick={() => setNavOpen((o) => !o)}
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="hamburger" aria-hidden="true" />
            </button>

            <ul className={`nav-menu${navOpen ? ' show' : ''}`} id="navMenu">
              <li>
                <a href="#about" onClick={closeNav}>
                  About
                </a>
              </li>
              <li>
                <a href="#experience" onClick={closeNav}>
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" onClick={closeNav}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#achievements" onClick={closeNav}>
                  Achievements
                </a>
              </li>
              <li>
                <a href="#interviews" onClick={closeNav}>
                  Interviews
                </a>
              </li>
              <li>
                <a href="#skills" onClick={closeNav}>
                  Skills
                </a>
              </li>
              <li>
                <a className="btn btn-small" href="#contact" onClick={closeNav}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-text">
              <p className="eyebrow">Computer Science • Kuwait University</p>
              <h1>
                From <span className="grad">vision</span> to <span className="grad">systems</span> that make{' '}
                <span className="grad">impact</span>.
              </h1>
              <p className="value-statement">
                ML for AML and fraud detection, AI for UAV security, and SaaS platforms for mosque operations.
              </p>

              <div className="hero-cta">
                <a className="btn" href="#projects">
                  View projects
                </a>
                <a className="btn btn-ghost" href="#contact">
                  Contact
                </a>
              </div>

              <div className="quick-info">
                <div className="pill">📍 Kuwait</div>
                <a className="pill" href={`mailto:${EMAIL}`}>
                  ✉️ {EMAIL}
                </a>
                <a className="pill" href={`tel:${PHONE_TEL}`}>
                  📞 {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            <aside className="hero-card" aria-label="Highlights">
              <div className="hero-media-wrap">
                <div
                  ref={mediaScrollRef}
                  className="hero-media-box"
                  role="region"
                  aria-label="Photos — scroll sideways or use arrows"
                >
                  <figure className="hero-media-slide">
                    <img src="/profile.jpg" alt="Abdullah Al-Mekhyal" />
                  </figure>
                  <figure className="hero-media-slide hero-media-slide--align-top">
                    <img
                      src="/IMG_9248.jpg"
                      alt="Kuwait University CS delegation visit at KNPC"
                      loading="lazy"
                    />
                  </figure>
                  <figure className="hero-media-slide">
                    <img
                      src="/IMG_6662.jpg"
                      alt="Ministry of Higher Education — first place in research posters"
                      loading="lazy"
                    />
                  </figure>
                </div>
                <button
                  type="button"
                  className="hero-media-nav hero-media-nav--prev"
                  aria-label="Previous photo"
                  disabled={!mediaScroll.canPrev}
                  onClick={() => scrollHeroMedia(-1)}
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="hero-media-nav hero-media-nav--next"
                  aria-label="Next photo"
                  disabled={!mediaScroll.canNext}
                  onClick={() => scrollHeroMedia(1)}
                >
                  ›
                </button>
              </div>

              <div className="card">
                <h2 className="card-title">Highlights</h2>
                <ul className="list">
                  {highlights.map((h) => (
                    <li key={h.title}>
                      <strong>{h.title}</strong>
                      {h.text}
                    </li>
                  ))}
                </ul>

                <div className="card-actions">
                  <a className="link" href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                    LinkedIn ↗
                  </a>
                  <a className="link" href={GITHUB} target="_blank" rel="noopener noreferrer">
                    GitHub ↗
                  </a>
                  <a className="link" href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                    CV ↗
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container">
            <div className="section-head">
              <h2>About</h2>
              <p>
                CS student, Kuwait University. AML/ML, data mining, databases, systems—and UAV security research
                (GCC gold, 2025).
              </p>
            </div>

            <div className="two-col">
              <div className="panel">
                <h3>Education</h3>
                <div className="timeline">
                  <div className="t-item">
                    <div className="t-meta">
                      <span className="t-title">Kuwait University</span>
                      <span className="t-time">Sep 2023 – Present</span>
                    </div>
                    <p className="muted">Bachelor of Computer Science • Kuwait</p>
                    <p>
                      Coursework includes: ML, databases, data mining, NLP, algorithms, and Web Development.
                    </p>
                  </div>
                </div>
              </div>

              <div className="panel">
                <h3>Focus areas</h3>
                <ul className="chips">
                  {workChips.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>

                <div className="note">
                  <strong>Principle:</strong> Clean data, correct behavior, readable docs.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="container">
            <div className="section-head">
              <h2>Experience</h2>
              <p>Leadership, research, and industry.</p>
            </div>

            <div className="timeline">
              {experience.map((job) => (
                <div className="t-item" key={job.title}>
                  <div className="t-meta">
                    <span className="t-title">{job.title}</span>
                    <span className="t-time">{job.time}</span>
                  </div>
                  <p className="muted">{job.role}</p>
                  <ul className="bullets">
                    {job.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="container">
            <div className="section-head">
              <h2>Projects</h2>
              <p>Selected builds and product concepts.</p>
            </div>

            <div className="cards">
              {projects.map((p) => (
                <article className="proj card" key={p.title}>
                  <h3>{p.title}</h3>
                  <p className="muted">{p.subtitle}</p>
                  <ul className="bullets">
                    {p.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  <div className="tags">
                    {p.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="achievements">
          <div className="container">
            <div className="section-head">
              <h2>Achievements</h2>
              <p>Awards and talks.</p>
            </div>

            <div className="panel">
              <ul className="bullets big">
                <li>
                  <strong>🥇 Gold Medal — GCC Cybersecurity Summit 2025</strong> — UAV attack detection (AI), Qatar.{' '}
                  <a
                    href="/poster_cs_qatar.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="achievement-link"
                  >
                    Poster ↗
                  </a>
                </li>
                <li>
                  <strong>🎤 MILSET ESI 2025</strong> — Presented networked file sync (C), Abu Dhabi.
                </li>
                <li>
                  <strong>Hackathon</strong> — Google Cloud Intelligent Planet (with KFUPM).
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="interviews">
          <div className="container">
            <div className="section-head">
              <h2>Interviews</h2>
              <p>Media, podcasts, and appearances.</p>
            </div>

            {interviews.length > 0 ? (
              <div className="timeline">
                {interviews.map((item) => (
                  <div className="t-item" key={`${item.title}-${item.date}`}>
                    <div className="t-meta">
                      <span className="t-title">{item.title}</span>
                      <span className="t-time">{item.date}</span>
                    </div>
                    <p className="muted">{item.outlet}</p>
                    {item.href ? (
                      <p style={{ margin: '10px 0 0', position: 'relative', zIndex: 1 }}>
                        <a className="link" href={item.href} target="_blank" rel="noopener noreferrer">
                          Watch / read ↗
                        </a>
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
            ) : (
              <div className="panel interview-empty">
                <p className="muted" style={{ margin: 0, position: 'relative', zIndex: 1 }}>
                  Open to podcasts, articles, and panels on AML, AI, UAV security, and student research. Links to past
                  appearances will appear here.
                </p>
                <div style={{ marginTop: '18px', position: 'relative', zIndex: 1 }}>
                  <a
                    className="btn btn-small"
                    href={`mailto:${EMAIL}?subject=${encodeURIComponent('Interview request')}`}
                  >
                    Request an interview
                  </a>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="section" id="skills">
          <div className="container">
            <div className="section-head">
              <h2>Skills</h2>
              <p>Tools and stack.</p>
            </div>

            <div className="skills-grid">
              {skillPanels.map((panel) => (
                <div className="panel" key={panel.title}>
                  <h3>{panel.title}</h3>
                  <ul className="chips">
                    {panel.chips.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="panel">
                <h3>Quick Links</h3>
                <ul className="links">
                  <li>
                    <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                      LinkedIn ↗
                    </a>
                  </li>
                  <li>
                    <a href={GITHUB} target="_blank" rel="noopener noreferrer">
                      GitHub ↗
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container">
            <div className="contact-simple">
              <h2>Contact</h2>
              <p>Open to roles, research, and collaborations.</p>

              <div className="contact-links">
                <a href={`mailto:${EMAIL}`} className="contact-link">
                  ✉️ {EMAIL}
                </a>
                <a href={`tel:${PHONE_TEL}`} className="contact-link">
                  📞 {PHONE_DISPLAY}
                </a>
                <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="contact-link">
                  💼 LinkedIn ↗
                </a>
                <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="contact-link">
                  💻 GitHub ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="site-footer">
          <div className="container footer-inner">
            <p>
              © {year} Abdullah Ahmed Al-Mekhyal
            </p>
            <a className="link" href="#top">
              Back to top ↑
            </a>
          </div>
        </footer>
      </main>
    </>
  )
}
