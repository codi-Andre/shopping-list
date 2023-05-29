'use client'

import { ReactNode, useEffect } from 'react'
import { MoonStarIcon, SunIcon } from 'lucide-react'

interface DataProps {
  children: ReactNode
}

export function ToggleDarkMode({ children }: DataProps) {
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

  function handleClick() {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    } else {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    }
  }

  return (
    <div className='app overflow-scroll bg-brown-Vanilla p-4 text-brown-blackBean dark:bg-brown-blackBean dark:text-brown-Vanilla md:px-4 md:py-8'>
      <button
        aria-label='toggle theme'
        className='absolute right-0 top-0 m-4'
        onClick={handleClick}
      >
        <span>
          <SunIcon aria-label='light theme' className='dark:hidden' />
        </span>
        <span>
          <MoonStarIcon
            aria-label='dark theme'
            className='hidden dark:inline'
          />
        </span>
      </button>
      {children}
    </div>
  )
}
