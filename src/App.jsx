import { useEffect, useState } from 'react'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import { Education, CodingProfiles, Certificates } from './components/ProfileCards'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [scrollPct, setScrollPct] = useState(0)

  // Scroll-reveal: any element with class "reveal" fades/slides in once it
  // enters the viewport. Respects prefers-reduced-motion automatically since
  // the CSS transition is skipped for that media query (see App.css).
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [loading])

  // Hero mouse-spotlight: tracks pointer position over the hero section and
  // writes it to CSS variables consumed by the .hero__mesh gradient.
  useEffect(() => {
    const hero = document.querySelector('.hero')
    if (!hero) return
    const onMove = (e) => {
      const rect = hero.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      hero.style.setProperty('--spot-x', `${x}%`)
      hero.style.setProperty('--spot-y', `${y}%`)
    }
    hero.addEventListener('mousemove', onMove)
    return () => hero.removeEventListener('mousemove', onMove)
  }, [loading])

  // Scroll progress bar under the navbar.
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const scrolled = h.scrollTop
      const max = h.scrollHeight - h.clientHeight
      setScrollPct(max > 0 ? (scrolled / max) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : ''
  }, [loading])

  return (
    <>
      {loading && <Loader onDone={() => setLoading(false)} />}
      <div className="scroll-progress" style={{ transform: `scaleX(${scrollPct / 100})` }} />
      <Navbar />

      <div className="dashboard container">
        <main className="dashboard__main">
          <Hero />
          <Projects />
          <About />
        </main>

        <aside className="dashboard__sidebar">
          <Experience />
          <Education />
          <Skills />
          <CodingProfiles />
          <Certificates />
          <Contact />
        </aside>
      </div>

      <Footer />
    </>
  )
}
