import { useEffect, useState } from 'react'

function readTheme() {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

// Owns the theme so several toggles (desktop and mobile nav) stay in sync.
export function useTheme() {
  const [theme, setTheme] = useState(readTheme)

  // Follow the system preference until the visitor picks a theme themselves.
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = (e) => {
      if (!localStorage.getItem('theme')) setTheme(e.matches ? 'dark' : 'light')
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    try {
      localStorage.setItem('theme', next)
    } catch {
      // Storage may be blocked; the toggle still works for this page view.
    }
  }

  return { theme, toggle }
}
