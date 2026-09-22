import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

// The hall's only light source.
//
// Every scene declares where the lamp stands when that scene is on: the lamp
// travels there, and each lit plate recomputes its own falloff from the lamp's
// real position relative to its box. That is the page's one authored moment;
// nothing else animates on scroll, and no content waits for it to be readable.

const LightContext = createContext({ scene: null })

export const useActiveScene = () => useContext(LightContext).scene

export function Light({ children }) {
  const reduce = useReducedMotion()
  const [scene, setScene] = useState(null)
  const [flare, setFlare] = useState(0)
  const lamp = useRef({ x: 64, y: 22 })

  // Move the lamp to whichever scene owns the middle of the viewport.
  useEffect(() => {
    const scenes = Array.from(document.querySelectorAll('[data-scene]'))
    if (!scenes.length) return

    const pick = () => {
      const mid = window.innerHeight * 0.42
      let best = scenes[0]
      for (const el of scenes) {
        const r = el.getBoundingClientRect()
        if (r.top <= mid && r.bottom > mid) best = el
      }
      return best
    }

    const apply = () => {
      const el = pick()
      const id = el.getAttribute('data-scene')
      setScene((prev) => {
        if (prev === id) return prev
        const [x, y, t] = (el.getAttribute('data-lamp') || '64 22 118').split(' ').map(Number)
        lamp.current = { x, y }
        const root = document.documentElement.style
        root.setProperty('--lx', `${x}%`)
        root.setProperty('--ly', `${y}%`)
        root.setProperty('--throw', `${t}%`)
        if (!reduce) setFlare((n) => n + 1)
        return id
      })
    }

    apply()
    window.addEventListener('scroll', apply, { passive: true })
    window.addEventListener('resize', apply)
    return () => {
      window.removeEventListener('scroll', apply)
      window.removeEventListener('resize', apply)
    }
  }, [reduce])

  // Recompute every plate's falloff from where the lamp actually is.
  useEffect(() => {
    let frame = 0
    const measure = () => {
      frame = 0
      const lx = (lamp.current.x / 100) * window.innerWidth
      const ly = (lamp.current.y / 100) * window.innerHeight
      for (const el of document.querySelectorAll('[data-plate]')) {
        const r = el.getBoundingClientRect()
        if (r.bottom < -600 || r.top > window.innerHeight + 600) continue
        el.style.setProperty('--fx', `${(((lx - r.left) / r.width) * 100).toFixed(1)}%`)
        el.style.setProperty('--fy', `${(((ly - r.top) / r.height) * 100).toFixed(1)}%`)
      }
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(measure)
    }
    measure()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    const id = setInterval(schedule, 400)
    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      clearInterval(id)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <LightContext.Provider value={{ scene }}>
      <div className="beam weave" aria-hidden="true" />
      <div className="dust" aria-hidden="true" />
      {flare > 0 && <div key={flare} className="flare" aria-hidden="true" />}
      <div className="relative z-[2]">{children}</div>
    </LightContext.Provider>
  )
}
