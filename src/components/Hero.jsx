import { profile, socials, heroStats } from '../data/portfolioData'
import TechIcon from './TechIcon'

const floatIcons = [
  { label: 'Java', style: { top: '6%', left: '4%' } },
  { label: 'Spring Boot', style: { bottom: '12%', left: '0%' } },
  { label: 'React.js', style: { top: '16%', right: '2%' } },
  { label: 'Docker', style: { bottom: '4%', right: '8%' } },
  { label: 'Redis', style: { top: '46%', right: '-2%' } },
]

function magneticMove(e) {
  const el = e.currentTarget
  const rect = el.getBoundingClientRect()
  const x = e.clientX - rect.left - rect.width / 2
  const y = e.clientY - rect.top - rect.height / 2
  el.style.transform = `translate(${x * 0.18}px, ${y * 0.35}px)`
}

function magneticLeave(e) {
  e.currentTarget.style.transform = ''
}

export default function Hero() {
  const stats = heroStats()
  const [first, ...rest] = profile.role.split(' ')

  return (
    <section id="home" className="hero">
      <div className="hero__mesh" aria-hidden="true" />
      <div className="hero__inner">
        <div className="hero__copy">
          <div className="hero__badge">
            <span className="dot dot--live" />
            {profile.availability}
          </div>

          <p className="hero__name">Hi, I’m {profile.name}</p>
          <h1 className="hero__title">
            Full Stack
            <span className="hero__title-gradient"> {first} {rest.join(' ')}</span>
          </h1>

          <p className="hero__tagline">{profile.tagline}</p>

          <div className="hero__meta">
            <span>{stats[0].value} experience</span>
            <span className="hero__meta-sep">•</span>
            <span>{profile.location}</span>
            <span className="hero__meta-sep">•</span>
            <span>{profile.currentRole}</span>
          </div>

          <div className="hero__cta">
            <a
              href="#projects"
              className="btn btn-primary btn-magnetic"
              onMouseMove={magneticMove}
              onMouseLeave={magneticLeave}
            >
              View My Work →
            </a>
            <a href={profile.resumeFile} download className="btn btn-ghost">
              Download Resume ↓
            </a>
          </div>

          <div className="hero__socials">
            {socials.map((s) => {
              const href = s.name === 'Email' ? '#contact' : s.url
              return (
                <a
                  key={s.name}
                  href={href}
                  className="hero__social"
                  aria-label={s.name === 'Email' ? 'Email — go to contact options' : s.name}
                  title={s.name}
                  {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <TechIcon name={s.name} size={18} />
                </a>
              )
            })}
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__photo-ring">
            <div className="hero__photo">
              {profile.photo ? (
                <img className="hero__photo-img" src={profile.photo} alt={profile.name} />
              ) : (
                <span>{profile.initials}</span>
              )}
            </div>
          </div>
          {floatIcons.map((icon) => (
            <div key={icon.label} className="hero__float" style={icon.style} title={icon.label}>
              <TechIcon name={icon.label} size={18} />
            </div>
          ))}
        </div>
      </div>

      <div className="hero__stats">
        {stats.map((s) => (
          <div key={s.label} className="hero__stat">
            <div className="hero__stat-value">{s.value}</div>
            <div className="hero__stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
