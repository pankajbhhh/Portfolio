import { about } from '../data/portfolioData'
import TechIcon from './TechIcon'

export default function About() {
  return (
    <section id="about" className="block about">
      <div className="section-head reveal">
        <div>
          <span className="eyebrow">Profile summary</span>
          <h2 className="section-title">About Me</h2>
        </div>
      </div>

      <p className="about__summary glass-card reveal">{about.summary}</p>

      <div className="about__grid">
        {about.strengths.map((s, i) => (
          <div key={s.title} className="about-card glass-card reveal" style={{ transitionDelay: `${i * 80}ms` }}>
            <TechIcon name={s.icon} size={18} />
            <h4>{s.title}</h4>
            <p>{s.text}</p>
          </div>
        ))}
      </div>

      <div className="about__practices reveal">
        <span className="about__practices-label">Practices</span>
        {about.practices.map((p) => (
          <span key={p} className="pill">{p}</span>
        ))}
      </div>
    </section>
  )
}
