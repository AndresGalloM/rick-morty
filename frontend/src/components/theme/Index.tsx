import ThemeContext, { Themes } from '../../context/theme'
import { useOutsideClick } from '../../hooks/useOutsideClick'
import { useContext, useRef, useState } from 'react'
import { MoonIcon, SunIcon, SystemIcon } from '../Icons'
import './Theme.css'

const THEMES = ['Light', 'Dark', 'System']

const Theme = () => {
  const themeMenu = useRef<HTMLDivElement | null>(null)
  const themeButton = useRef<HTMLButtonElement | null>(null)

  const { theme, setTheme } = useContext(ThemeContext)
  const [open, setOpen] = useState(false)

  useOutsideClick(themeMenu, themeButton, () => {
    setOpen(false)
  })

  const handleClick = () => {
    setOpen(!open)
  }

  const changeTheme = (selectedTheme: Themes) => () => {
    window.localStorage.setItem('theme', selectedTheme)
    setTheme(selectedTheme)
    setOpen(false)
  }

  return (
    <div className='theme'>
      <button className='theme-button' onClick={handleClick} ref={themeButton}>
        {theme === 'light' && <SunIcon size={20} />}
        {theme === 'dark' && <MoonIcon size={20} />}
        {theme === 'system' && <SystemIcon size={20} />}
      </button>
      <div className={`${!open ? '' : 'open'} themes-menu`} ref={themeMenu}>
        <ul>
          {THEMES.map((theme) => {
            return (
              <li
                key={theme}
                onClick={changeTheme(theme.toLowerCase() as Themes)}
              >
                {theme}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Theme
