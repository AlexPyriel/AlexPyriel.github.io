import type { Content, Para } from './content';

function Segments({ para }: { para: Para }) {
  return (
    <>
      {para.map((seg, i) =>
        typeof seg === 'string' ? (
          seg
        ) : (
          <a key={i} href={seg[1]} target="_blank" rel="noreferrer">
            {seg[0]}
          </a>
        ),
      )}
    </>
  );
}

function lines(parts: readonly string[]) {
  return parts.map((part, i) => (
    <span key={part}>
      {i > 0 && <br />}
      {part}
    </span>
  ));
}

export default function PageView({ c }: { c: Content }) {
  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#top">
          AB<span>.</span>
        </a>
        <div className="navLinks">
          <a href="#about">{c.nav.about}</a>
          <a href="#work">{c.nav.work}</a>
          <a href="#experience">{c.nav.experience}</a>
        </div>
        <div className="navRight">
          <a
            className="langToggle"
            href={c.altHref}
            hrefLang={c.altLang}
            lang={c.altLang}
            title={c.altTitle}
          >
            {c.altLabel}
          </a>
          <a
            className="navCta"
            href="https://t.me/AlexPyriel"
            target="_blank"
            rel="noreferrer"
            aria-label={c.nav.ctaAria}
          >
            {c.nav.cta} <span>↗</span>
          </a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="heroEyebrow">
          <i /> {c.hero.eyebrow}
        </div>
        <h1>
          {c.hero.first}
          <br />
          {c.hero.last}
          <span>.</span>
        </h1>
        <div className="heroBottom">
          <p>{c.hero.copy}</p>
          <a href="#work">{c.hero.link}</a>
        </div>
        <div className="orbit portraitOrbit" aria-hidden="true">
          <b />
          <em />
          <img src="/aleksandr-portrait-bw.png" alt="" />
        </div>
      </section>

      <section className="about shell section" id="about">
        <p className="label">{c.about.label}</p>
        <div className="aboutGrid">
          <h2>{lines(c.about.heading)}</h2>
          <div className="aboutCopy">
            <p>{c.about.copy}</p>
            <small>{c.about.note}</small>
          </div>
        </div>
        <div className="skills">
          {c.skills.map((x) => (
            <span key={x}>{x}</span>
          ))}
        </div>
      </section>

      <section className="work section" id="work">
        <div className="shell sectionHead">
          <p className="label">{c.work.label}</p>
          <h2>{c.work.heading}</h2>
          <p>{c.work.sub}</p>
        </div>
        <div className="shell">
          {c.projects.map((p) => (
            <article className="project" key={p.n}>
              <div className={`visual ${p.tone}`}>
                <img className="singleProjectImage" src={p.image} alt={p.imageAlt} />
                <span>{p.n}</span>
                <small>{p.platforms}</small>
              </div>
              <div className="projectInfo">
                <div>
                  <p className="meta">
                    {p.role} · {p.platforms}
                  </p>
                  <h3 className={p.title.length > 30 ? 'longTitle' : undefined}>{p.title}</h3>
                  <p className="projectSubtitle">{p.subtitle}</p>
                </div>
                <p className="desc">{p.desc}</p>
                <div>
                  <h4>{c.work.contribution}</h4>
                  <p>{p.contribution}</p>
                </div>
                {p.caseStudy && (
                  <details className="caseStudy">
                    <summary>
                      <span className="csHead">
                        <span className="csLabel">{p.caseStudy.label}</span>
                        <span className="csTitle">{p.caseStudy.title}</span>
                      </span>
                      <span className="csChevron" aria-hidden="true">
                        ⌄
                      </span>
                    </summary>
                    <div className="caseStudyBody">
                      {p.caseStudy.body.map((para, i) => (
                        <p key={i}>
                          <Segments para={para} />
                        </p>
                      ))}
                    </div>
                  </details>
                )}
                <div className="tech">
                  {p.tech.map((x) => (
                    <span key={x}>{x}</span>
                  ))}
                </div>
                <div className="actions">
                  <a href={p.link} target="_blank" rel="noreferrer">
                    {p.store} ↗
                  </a>
                  <a className="secondaryAction" href={p.link} target="_blank" rel="noreferrer">
                    {c.work.view}
                  </a>
                </div>
                {p.note && <p className="availabilityNote">{p.note}</p>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="experience shell section" id="experience">
        <p className="label">{c.experience.label}</p>
        <div className="experienceGrid">
          <div>
            <h2>{lines(c.experience.heading)}</h2>
            <div className="language">
              {c.experience.languages.map((l) => (
                <p key={l}>{l}</p>
              ))}
            </div>
          </div>
          <div className="timeline">
            {c.jobs.map((x) => (
              <div key={x.company}>
                <span>{x.date}</span>
                <h3>{x.company}</h3>
                <h4>{x.role}</h4>
                <p>{x.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="education">
          <p className="label">{c.experience.educationLabel}</p>
          {c.experience.education.map((e) => (
            <p key={e.school}>
              <strong>{e.school}</strong> — {e.degree}
            </p>
          ))}
        </div>
      </section>

      <footer id="contact">
        <div className="shell contact">
          <p className="label">{c.contact.label}</p>
          <p>{c.contact.lead}</p>
          <h2>
            {c.contact.headingTop}
            <br />
            <em>{c.contact.headingEm}</em>
          </h2>
          <div className="contactLinks">
            {c.contact.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                {...(l.href.startsWith('mailto:')
                  ? {}
                  : { target: '_blank', rel: 'noreferrer' })}
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="footerBottom">
            <span>© {new Date().getFullYear()} Aleksandr Boiarintsev</span>
            <span>{c.contact.role}</span>
            <a href="#top">{c.contact.backToTop}</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
