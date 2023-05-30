'use client'

import { MoonStarIcon, SunIcon } from 'lucide-react'
import { useEffect } from 'react'

export function ThemeToggle() {
  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  function ToggleDarkMode() {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    } else {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    }
  }

  return (
    <button
      aria-label='toggle theme'
      className='absolute right-0 top-0 '
      onClick={ToggleDarkMode}
    >
      <span className='inline-block rounded-bl-3xl bg-brown-Vanilla p-1 text-brown-blackBean dark:hidden'>
        <SunIcon aria-label='light theme' size={32} />
      </span>
      <span className='tag hidden rounded-bl-3xl bg-brown-blackBean p-1 text-brown-Vanilla dark:inline-block'>
        <MoonStarIcon aria-label='dark theme' size={32} />
      </span>
    </button>
  )
}
