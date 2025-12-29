"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Theme = "default" | "pink" | "elderly"

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  elderlyMode: boolean
  toggleElderlyMode: () => void
  pinkSafetyMode: boolean
  togglePinkSafetyMode: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("default")
  const [elderlyMode, setElderlyMode] = useState(false)
  const [pinkSafetyMode, setPinkSafetyMode] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove("theme-default", "theme-pink", "theme-elderly")
    root.classList.add(`theme-${theme}`)
  }, [theme])

  const toggleElderlyMode = () => {
    const newElderlyMode = !elderlyMode
    setElderlyMode(newElderlyMode)
    if (newElderlyMode) {
      setPinkSafetyMode(false)
      setTheme("elderly")
    } else {
      setTheme("default")
    }
  }

  const togglePinkSafetyMode = () => {
    const newPinkMode = !pinkSafetyMode
    setPinkSafetyMode(newPinkMode)
    if (newPinkMode) {
      setElderlyMode(false)
      setTheme("pink")
    } else {
      setTheme("default")
    }
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        elderlyMode,
        toggleElderlyMode,
        pinkSafetyMode,
        togglePinkSafetyMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
