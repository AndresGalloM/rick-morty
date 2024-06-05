import { createContext, useState } from 'react'

export enum Themes {
  LIGHT = 'light',
  DARK = 'dark',
  SYSTEM = 'system'
}

type ThemeContext = {
  theme: Themes
  setTheme: React.Dispatch<React.SetStateAction<Themes>>
}

const Context = createContext<ThemeContext>({} as ThemeContext)

let remove: Function | null = null
const matchMedia = window.matchMedia('(prefers-color-scheme: dark)')

export const ThemeProvider = ({
  children
}: {
  children: JSX.Element[] | JSX.Element
}) => {
  const [theme, setTheme] = useState(() => {
    return (window.localStorage.getItem('theme') as Themes) ?? Themes.SYSTEM
  })

  const updateTheme = () => {
    if (remove != null) {
      remove()
    }

    matchMedia.addEventListener('change', updateTheme)
    remove = () => {
      matchMedia.removeEventListener('change', updateTheme)
    }

    const isDark =
      theme === Themes.DARK || (theme === Themes.SYSTEM && matchMedia.matches)

    document.documentElement.classList[isDark ? 'add' : 'remove']('dark')
  }

  updateTheme()

  return (
    <Context.Provider value={{ theme, setTheme }}>{children}</Context.Provider>
  )
}

export default Context
