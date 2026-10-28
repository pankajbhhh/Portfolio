import { profile, socials } from '../data/portfolioData'

export default function Footer() {
  const links = socials.filter((s) => s.name !== 'Email')
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a href="#home" className="navbar__brand">
          <span className="navbar__brand-icon">{'</>'}</span>
          {profile.brand}
        </a>

        <p className="footer__copy">© {new Date().getFullYear()} {profile.name}. Built with React.</p>

        <div className="footer__socials">
          {links.map((s) => (
            <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer">{s.name}</a>
          ))}
          <a href="#home" className="footer__top">Back to Top ↑</a>
        </div>
      </div>
    </footer>
  )
}
