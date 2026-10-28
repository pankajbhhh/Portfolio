import { useState } from 'react'
import { skillGroups } from '../data/portfolioData'
import TechIcon from './TechIcon'

const categories = Object.keys(skillGroups)

export default function Skills() {
  const [active, setActive] = useState(categories[0])

  return (
    <section id="skills" className="side-card reveal">
      <div className="panel-head">
        <h3>Technical Skills</h3>
      </div>

      <div className="skills__tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`skills__tab ${active === cat ? 'is-active' : ''}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="skills__grid">
        {skillGroups[active].map((skill, i) => (
          <div
            key={`${active}-${skill}`}
            className="skills__chip skills__chip--in"
            style={{ animationDelay: `${i * 35}ms` }}
            title={skill}
          >
            <TechIcon name={skill} size={20} />
            <span className="skills__chip-label">{skill}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
