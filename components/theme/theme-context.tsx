"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

type Theme = "dark" | "light" | "system"
type AccentColor = "green" | "blue" | "purple" | "amber"

interface ThemeContextType {
  theme: Theme
  accentColor: AccentColor
  setTheme: (theme: Theme) => void
  setAccentColor: (color: AccentColor) => void
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  accentColor: "green",
  setTheme: () => null,
  setAccentColor: () => null,
})

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark")
  const [accentColor, setAccentColorState] = useState<AccentColor>("green")
  const [mounted, setMounted] = useState(false)

  // Load saved preferences from localStorage
  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("knott-theme") as Theme
    const savedAccentColor = localStorage.getItem("knott-accent") as AccentColor

    if (savedTheme) {
      setThemeState(savedTheme)
    }

    if (savedAccentColor) {
      setAccentColorState(savedAccentColor)
    }
  }, [])

  // Apply theme to document
  useEffect(() => {
    if (!mounted) return

    const root = document.documentElement
    let resolvedTheme = theme

    // Handle system preference
    if (theme === "system") {
      const systemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      resolvedTheme = systemPreference
    }

    // Apply theme class
    if (resolvedTheme === "dark") {
      root.classList.add("dark")
      root.classList.remove("light")
    } else {
      root.classList.add("light")
      root.classList.remove("dark")
    }

    // Apply accent color
    root.setAttribute("data-accent", accentColor)

    // Save preferences
    localStorage.setItem("knott-theme", theme)
    localStorage.setItem("knott-accent", accentColor)
  }, [theme, accentColor, mounted])

  // Listen for system preference changes
  useEffect(() => {
    if (!mounted) return

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    const handleChange = () => {
      if (theme === "system") {
        const root = document.documentElement
        if (mediaQuery.matches) {
          root.classList.add("dark")
          root.classList.remove("light")
        } else {
          root.classList.add("light")
          root.classList.remove("dark")
        }
      }
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [theme, mounted])

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
  }

  const setAccentColor = (newColor: AccentColor) => {
    setAccentColorState(newColor)
  }

  return (
    <ThemeContext.Provider value={{ theme, accentColor, setTheme, setAccentColor }}>{children}</ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
