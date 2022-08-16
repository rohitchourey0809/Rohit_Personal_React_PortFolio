import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const ThemeContext = createContext()

function ThemeProvider({ children }) {
  const [themeName, setThemeName] = useState('dark')

  useEffect(() => {
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: light)')
    setThemeName(darkMediaQuery.matches ? 'light' : 'dark')
    darkMediaQuery.addEventListener('change', (e) => {
      setThemeName(e.matches ? 'light' : 'dark')
    })
  }, [])

  const toggleTheme = () => {
    const name = themeName === 'light' ? 'dark' : 'light'
    localStorage.setItem('themeName', name)
    setThemeName(name)
  }

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ThemeContext.Provider value={[{ themeName, toggleTheme }]}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ThemeProvider, ThemeContext }
