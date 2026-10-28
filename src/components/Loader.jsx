import { useEffect, useState } from 'react'

export default function Loader({ onDone }) {
  const [progress, setProgress] = useState(0)
  const [hide, setHide] = useState(false)

  useEffect(() => {
    const start = performance.now()
    const duration = 1400
    let raf

    const tick = (now) => {
      const elapsed = now - start
      const pct = Math.min(100, (elapsed / duration) * 100)
      setProgress(pct)
      if (pct < 100) {
        raf = requestAnimationFrame(tick)
      } else {
        setTimeout(() => {
          setHide(true)
          setTimeout(onDone, 500)
        }, 150)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [onDone])

  return (
    <div className={`loader ${hide ? 'loader--hide' : ''}`} aria-hidden={hide}>
      <div className="loader__mark">
        <span className="loader__bracket">{'<'}</span>
        <span className="loader__slash">/</span>
        <span className="loader__bracket">{'>'}</span>
      </div>
      <div className="loader__bar">
        <div className="loader__bar-fill" style={{ width: `${progress}%` }} />
      </div>
      <span className="loader__pct">{Math.round(progress)}%</span>
    </div>
  )
}
