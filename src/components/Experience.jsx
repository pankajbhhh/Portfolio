import { experience } from '../data/portfolioData'

const avatarColors = ['#3B82F6', '#F59E0B', '#8B5CF6']

export default function Experience() {
  return (
    <section id="experience" className="side-card reveal">
      <div className="panel-head">
        <h3>Work Experience</h3>
      </div>

      <div className="mini-timeline">
        {experience.map((job, i) => (
          <div key={job.company} className="mini-timeline__item">
            <span
              className="mini-timeline__avatar"
              style={{ background: `${avatarColors[i % avatarColors.length]}33`, color: avatarColors[i % avatarColors.length] }}
            >
              {job.initial}
            </span>
            <div className="mini-timeline__body">
              <div className="mini-timeline__row">
                <h4>{job.role}</h4>
                <span className="mini-timeline__period">{job.period}</span>
              </div>
              <p className="mini-timeline__company">{job.company}</p>
              <ul>
                {job.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
