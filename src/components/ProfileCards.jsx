import { codingProfiles, certifications, education } from '../data/portfolioData'
import TechIcon from './TechIcon'

export function Education() {
  return (
    <section id="education" className="side-card reveal">
      <div className="panel-head">
        <h3>Education</h3>
      </div>
      <div className="edu">
        <TechIcon name="NPTEL" size={18} />
        <div>
          <h4>{education.degree}</h4>
          <p>{education.school}</p>
          <span className="edu__meta">{education.year} · {education.cgpa}</span>
        </div>
      </div>
    </section>
  )
}

function ProfileRow({ p }) {
  const inner = (
    <>
      <span className="profiles-list__name">
        <TechIcon name={p.icon} size={16} />
        {p.platform}
      </span>
      <span className="profiles-list__right">
        <strong>{p.metric}</strong>
        {p.url && (
          <svg className="profiles-list__arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M7 17L17 7M7 7h10v10" />
          </svg>
        )}
      </span>
    </>
  )

  return p.url ? (
    <a href={p.url} target="_blank" rel="noopener noreferrer" className="profiles-list__link" aria-label={`${p.platform} profile (opens in new tab)`}>
      {inner}
    </a>
  ) : (
    <div className="profiles-list__link">{inner}</div>
  )
}

export function CodingProfiles() {
  return (
    <section id="coding-profiles" className="side-card reveal">
      <div className="panel-head">
        <h3>Coding Profiles</h3>
      </div>
      <ul className="profiles-list">
        {codingProfiles.map((p) => (
          <li key={p.platform}>
            <ProfileRow p={p} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export function Certificates() {
  return (
    <section id="certifications" className="side-card reveal">
      <div className="panel-head">
        <h3>Certifications</h3>
      </div>
      <div className="certs-grid">
        {certifications.map((c) => (
          <div key={c.title} className="cert-card">
            <TechIcon name={c.icon} size={16} />
            <div className="cert-card__body">
              <h4>{c.title}</h4>
              <p>{c.org}{c.date ? ` · ${c.date}` : ''}</p>
              {c.note && <span className="cert-card__note">{c.note}</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
